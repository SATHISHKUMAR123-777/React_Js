
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


// TASK LINE IMPORT
import { Basic } from './Basic_Component';
import { Statte_manage } from './State_Management';
import { Contional_render } from './Conditional_Rendering';
import { Forms_Component } from './Forms_and_Controlled';
import Component_composition from './Component_Composition';
import MyComponents from './useEffect_Hook';

  // State Lift-Up and Props
import ProductList from './State Lift-Up and Props/productList';
import Cart from './State Lift-Up and Props/Cart';


//  Context API  
import CounterDisplay from './Context API/Display';
import { CounterProvider } from './Context API/Context';
 
 



function App() {
  // State Lift-Up and Props
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };


  return (
    <div className="App">
 
      {/* TASK */}

    <p>Task1</p>  <Basic/> <hr/>
    <p>Task2</p>   <Statte_manage/><hr/>
    <p>Task3</p>   <Contional_render/><hr/>
    <p>Task4</p>  <Forms_Component /><hr/>
    <p>Task5</p>   <Component_composition/><hr/>
    <p>Task6</p>   <MyComponents/><hr/>



      {/* State Lift-Up and Props */}

      <p>Task8</p>    <ProductList products={products} addToCart={addToCart} />
        <Cart cartItems={cartItems} />   <hr/>


      {/* Context API  */}

      <p>Task9</p>    <CounterProvider>
      <div>
        <h1>Counter App</h1>
        <CounterDisplay/>
      </div>
      </CounterProvider>


 
   
   

  
      
  
 
    




    </div>
  );
}

export default App;
