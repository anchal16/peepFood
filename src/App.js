/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes";
const API_KEY = "35c3bf6e69e540259ce04b71be4e532b";



class App extends Component {
  state = {
    results: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call= await fetch(`https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${recipeName}&number=9`);
   
    
    //console.log(recipeName);
    const data= await api_call.json();

    this.setState({ results: data.results })
    console.log(this.state.results);
  }
  componentDidMount = () =>{
    const json= localStorage.getItem("results");
    const results=JSON.parse(json);
    this.setState({ results });
  }
  componentDidUpdate = () =>{
    const results = JSON.stringify(this.state.results);
    localStorage.setItem("results", results);
  }
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h1 className= "App-title">peepFood </h1>
        </header>
        <Form getRecipe = {this.getRecipe} />
        <Recipes results={this.state.results} />
      </div>
    );
  }
}

export default App;
