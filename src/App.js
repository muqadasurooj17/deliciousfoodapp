//import Recepie from "./Recipe";
import Recipe from "./Recipe";
import "./App.css";

import React, { useEffect, useState } from "react";
//import Pages from "./pages/Pages";
const App=()=>{
  
const APP_ID="17c09b2b"
const APP_KEY="9b3cf5725b01aad827a1513184c4ff83"
//const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

const[recipes,setRecipes]=useState([]);
const[search,setSearch]=useState("");
const[query,setQuery]=useState(["chicken"]);
useEffect(()=>{
  getRecipes();
  
},[query]);

const getRecipes=async()=>{
  const response=await 
  fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );

  const data =await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

const updateSearch = e=>{
  setSearch(e.target.value);
  console.log(search);
};

const getSearch = e=>{
  e.preventDefault();
  setQuery(search);
};

  return (
    <div className="App">
      <form onSubmit={getSearch} className="Search-form">
        <input className="search-bar" 
        placeholder="enter the item name"
         type="text"
         value={search}
         onChange={updateSearch}
         />
        <button className="search-button" type="submit">Search</button>
      </form>
<div className="recipes">
     {recipes.map(recipe=>(
       <Recipe
       key={recipe.recipe.label}
       title={recipe.recipe.label}
       ingredients={recipe.recipe.ingredients}
       image={recipe.recipe.image}
       />
     ))}
    </div>
    </div>
  );
}

export default App;
