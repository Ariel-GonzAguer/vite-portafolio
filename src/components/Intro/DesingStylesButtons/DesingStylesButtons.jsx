import React from "react";

import "./DesingStylesButtons.module.css";

export default function DesignStylesForm() {
  return (
    <>
      <p>Choose a design style</p>
        <input
          type="button"
          id="neumorphism"
          name="design-styles"
          value="neumorphism"
        />
        <label htmlFor="neumorphism" />

        <input 
          type="button" 
          id="dark" 
          name="design-styles" 
          value="dark"
        />
        <label htmlFor="dark" />

        <input 
          type="button" 
          id="light" 
          name="design-styles" 
          value="light"
        />
        <label htmlFor="dark" />

        <input
          type="button"
          id="neubrutalism"
          name="design-styles"
          value="neubrutalism"
        />
        <label htmlFor="neubrutalism" />
    </>
  );
}
