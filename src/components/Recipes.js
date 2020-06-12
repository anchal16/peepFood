import React from 'react';
import { Link } from "react-router-dom";

const ak= "https://spoonacular.com/recipeImages/" ;

const Recipes = props => (
    <div className="container">
        <div className="row">
        { props.results.map((result) =>{
            return(
                <div key={result.title} className="col-md-4" style={{ marginBottom:"2rem"}}>
                    <div className="recipes__box">
                        <img className="recipes__box-img" src={ak+result.image} alt={result.title} />
                        <div className="recipe__text">
                            <h5 className="recipes__title">
                                { result.title.length < 20 ? `${result.title}` : `${result.title.substring(0,25)}...` }
                            </h5>
                            <p className="recipes__subtitle">Servings: <span>
                             { result.servings} </span></p>
                        </div>
                        <button className="recipe_buttons">
                            <Link to={{ 
                                pathname:`/result/${result.id}`,
                                state: { result: result.title}
                                }}>View recipe</Link>
                        </button>
                    </div>
                </div>

            );
        })}
        </div>
    </div>
       
         
    
    
);

export default Recipes;