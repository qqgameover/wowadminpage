import React, { useState } from 'react'
import { db, auth } from '../db.jsx'
import { doc, updateDoc, onSnapshot, collection, query } from "firebase/firestore";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import GoogleView from './googleView.jsx'

export default function InfoView() {
    const [status, newStatus] = useState("loading");
    const [inputVal, newVal] = useState("");
    const [user, loading, error]  = useAuthState(auth)
    const handleInput = event => {
        newVal(event.target.value);
    }

    let docId;
    let infoRef;

    const logout = () => {
        signOut(auth);
    }

    const q = query(collection(db, "info"));
    const unsub = onSnapshot(q, (infoCol) => {
        infoCol.forEach((infoObj) => {
            docId = infoObj.id;
            infoRef = doc(db, "info", docId);
            let info = infoObj.data();
            newStatus(info.infostr);
        })
    }); 


    if (user) 
     return ( 
        <div>
            <p className="updateRow" style={{ marginRight: '1rem' }}>Info verdi akkurat nå:</p>
            <h3 className="updateRow">{status}</h3>
            <br/>
            <span className="updateRow">
                <p>Ny verdi:</p>
            </span>
            <input onChange={handleInput}/>
            <button onClick={() => updateDoc(infoRef, {
            infostr: inputVal})
            }>
                Oppdater verdi</button>
            <div>
                <button onClick={ logout }
                    >Logg ut
                </button>
            </div>
        </div>);
    
    return(
        <div>
            <GoogleView/>
        </div>
    );
}
