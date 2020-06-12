import React from 'react';
import { Link } from "react-router-dom";

const API_KEY = "35c3bf6e69e540259ce04b71be4e532b";
const ak= "https://spoonacular.com/recipeImages/" ;


 class Recipe extends React.Component{
     state = {
        activeRecipe: []
     }
     componentDidMount = async() => {
         const title = this.props.location.state.result;
        
         const req= await fetch(`https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${title}`);
   
         const res= await req.json();

         this.setState({ activeRecipe: res.results[0] });
         console.log(this.state.activeRecipe);
     }
     render() {
         const result= this.state.activeRecipe;
         return(
             <div className="container">
                 { this.state.activeRecipe.length !== 0 &&
                   <div className="active-recipe">
                     <img className="active-recipe__img" src={ak+result.image} alt={result.title} />
                     <h3 className="active-recipe__title">{ result.title } </h3>
                     <h4 className="active-recipe__publisher">
                         Servings: <span>{ result.servings }</span>
                     </h4>
                     <p className="active-recipe__website"><h5>Website:
                         <span><a href={ result.sourceUrl }> { result.sourceUrl } </a></span>
                     </h5></p>
                     <button className="active-recipe__button">
                         <Link to="/">Go Home</Link>
                     </button>
                    </div>
                 }
             </div>
         );
     }
 }

export default Recipe;