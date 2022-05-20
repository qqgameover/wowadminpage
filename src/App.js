import './App.css';
import MainView from './components/mainView.jsx'
import EditView from './components/editView.jsx'
import { useEffect, useState } from 'react'

function App() {
    return (
        <div className="App">
            <EditView/>
        </div>
    );
}

export default App;
