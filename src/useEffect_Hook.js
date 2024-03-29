import React, { useState, useEffect } from 'react';
const MyComponents = () => {
    const [count, setCount] = useState(0);
    // Initialization 
    useEffect(() => {
        console.log('Component mounted');
        // Cleanup function
        return () => {
            console.log('Component will unmount');
        };
    }, []);
    // Updating 
    useEffect(() => {
        console.log('Count updated:', count);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
export default MyComponents;
