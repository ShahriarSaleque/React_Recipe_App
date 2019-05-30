import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";

const API_KEY = "c9ae8a461b51c6b0c05c1932e99e0fe9";

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`
    );
    const data = await api_call.json();

    this.setState({ recipes: data.recipes });
  };

  componentDidMount() {
    const json = localStorage.getItem("recipes");
    const recipe = JSON.parse(json);
    this.setState({ recipes: recipe });
  }

  componentDidUpdate() {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
