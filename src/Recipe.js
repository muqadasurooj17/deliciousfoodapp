import React from "react";
import "./App.css";
//import {motion} from framer-motion;

import style from "./recipe.module.css";
 const Recipe =({title,ingredients,image})=>{
     return(
<>
<div className={style.recipe}>
<h1 > {title}</h1>

<div className="Inghead">Ingredients</div>
<ol >
    {
        ingredients.map(ingredients=>(
            <li>{ingredients.text}</li>
        ))}</ol>     
<img src={image} alt=""/>
</div>
</>
     );
 };
 export default Recipe;