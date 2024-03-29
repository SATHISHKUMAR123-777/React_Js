import React, { useState } from "react";


export function Statte_manage(){

    const[count,Setcount]=useState(0);

    const increment=()=>{
        Setcount(count+1);
    }
    
    const decrement=()=>{
        Setcount(count-1);
    }

    return(
        <>
        <h1>counter:{count}</h1>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
        </>
    );
}