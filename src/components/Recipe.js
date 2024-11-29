import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import StarRating from "./StarRating";

function Recipe({ 
    name = "untitled", 
    ingredients = [],
    steps = [],
}) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <StarRating totalStars={5}/>
            <IngredientsList list={ingredients} />
            <Instructions title="Cooking Instructions" steps={steps}/>
        </section>
    );
}

export default Recipe;