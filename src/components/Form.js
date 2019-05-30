import React from "react";

import search from "../images/Search.png";

const Form = props => {
  return (
    <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
      <img src={search} alt="" className="setting" />
      <input className="form__input ml-1" type="text" name="recipeName" />
      <button className="ml-2" className="form__button darker">
        Search
      </button>
    </form>
  );
};

export default Form;
