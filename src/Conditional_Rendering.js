import React from "react";
 
function Component1(){
    return  <h1>Component1</h1>;
 }
 function Component2(){
    return <h1>Component2</h1>;
 }
export const Contional_render=(props)=>{

    const isGoal = props.isGoal;
 
    
     if (isGoal) {
        return <Component1/>;
      }
      else{
        return <Component2/>;
      }
     
   
   
    
}