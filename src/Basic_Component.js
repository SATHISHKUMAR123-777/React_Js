import React from "react";


export function Basic(){
 
        const shoot = () => {
        // document.write("hello world");
         alert("Great Shot!");
        }
     
    return(
        <>
        <h2>Hello</h2>
        <button onClick={shoot}>Click</button>
        </>
    );
  
}