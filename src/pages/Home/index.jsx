import React, { useState } from 'react';
export default function Home() {
    const [count, setCount] = useState(0);
    return <div>
        <h1>Home：{count}</h1>
        <button onClick={() => {
            console.log('点击了按钮');
            
            setCount(count + 1);
        }}>点击</button>
    </div>;
}