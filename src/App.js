import React, {useState, useReducer, useEffect} from "react";
import axios from "axios";
import './App.scss';
import Users from "./Component/Users";
import ApiExample from "./Component/ApiExample";
function App() {


  return(
    <>
      <Users/>
      <hr/>
      <ApiExample/>
    </>
  )
}

export default App