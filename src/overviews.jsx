import React from "react";
import Main from "./components/overview_main";
import Graphic from "./components/overview_graphic";
import { useParams } from "react-router-dom";

const Overviews = () => {
  const id = useParams().id;
  if (id) {
    return <Graphic id={id} />;
  }
  return <Main />;
};

export default Overviews;
