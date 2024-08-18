import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseDesignStyle } from "../../../redux/designSlice";
import { toast, Toaster } from 'sonner';


import "./DesingStylesButtons.module.css";

export default function DesingStylesButtons() {
  const dispatch = useDispatch();
  const designStyle = useSelector(state => state.design.design);

  // useEffect(() => {
  //   console.log(selectedDesign);
  // }, [selectedDesign]);

  function handleClick(e) {
    const { value } = e.target;
    dispatch(chooseDesignStyle(value));
    toast(`Great! This page will be in ${value} mode. The other sections will be ${value === 'dark' ? 'well, in dark mode too' : ' in dark mode'}`);
  }

  return (
    <>
     <Toaster />
      <p>Choose a design style</p>
      <input
        type="button"
        id="neumorphism"
        name="design-styles"
        value="neumorphism"
        onClick={handleClick}
      />
      <label htmlFor="neumorphism" />

      <input type="button"
      id="dark"
      name="design-styles"
      value="dark" 
      onClick={handleClick}/>
      <label htmlFor="dark" />

      <input type="button" id="light"
      name="design-styles"
      value="light"
      onClick={handleClick}/>
      <label htmlFor="dark" />

      <input
        type="button"
        id="neubrutalism"
        name="design-styles"
        value="neubrutalism"
        onClick={handleClick}
      />
      <label htmlFor="neubrutalism" />
    </>
  );
}
