import React, { useState, useEffect } from "react";
import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
//components below
const BubblePage = (props) => { //forgot to add props
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
    .get("/api/colors")
    .then(res => {
      setColorList(res.data)
      // console.log(res.data);
    })
    .catch( err => {
      console.log(err, "sorry, but an error has occurred getting page.")
    });
}, [props]);

  return (
    <>
      <ColorList props={props} /*this is to make the colors work*/ colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//done with Bubblespage