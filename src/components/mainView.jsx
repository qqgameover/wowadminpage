import React, { useState } from 'react';

export default function MainView() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Youve clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>
        </div>
    );
}


