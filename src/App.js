/*
# Component (user guide)

# Overviews

## Description  

Overviews contiene el enrutamiento de las direcciones URL 

## Category   
Estructural

## Live demo 
N/A

## Installation 
npm install react-router-dom

## Usage 

<Overviews>  </Overviews> 

## Props 
N/A

## Exception

__Category: [Error, Warning or Message]__
[Description of the exception (if necessary)]

## License

MIT License

## Author 

RegulonDB Team: 
EDGAR ENRRIQUE HERNANDEZ MARCELO
GABRIEL 

# Component (technical guide)

## Component Type 

[stateful, stateless, pure, HOC]

## Dependencies

[Dependencies details]

## States
N/A

# Functions description

## [function name]

*/
import React from "react";
import { Switch, Route } from "react-router-dom";

import Overviews from "./overviews";
import "./styles/regulonDB_global.css";

const App = () => {
  return (
    <>
      RegulonDB Overviews Tool Testing
      <Switch>
        <Route exact path={"/overviews"}>
          <Overviews />
        </Route>
        <Route path={"/overviews/:id"}>
          <Overviews />
        </Route>
        <Route path={"*"}>
          <Overviews />
        </Route>
      </Switch>
    </>
  );
};

export default App;
