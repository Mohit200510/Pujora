import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'


import { useEffect } from "react";
import { supabase } from "./supabaseClient";


function App() {




  const [products, setProducts] = useState([]);

  useEffect(() => {
  getProducts();
}, []);

async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    console.log("Error:", error);
    return;
  }

  console.log("Products:", data);
  setProducts(data);
}


  return (
    <>

<div>
    <h1>Products from Supabase</h1>

    {products.map((product) => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>₹{product.sale_price}</p>
      </div>
    ))}
  </div>
    <Header/>
    <Home/>
      
    </>
  )
}

export default App;
