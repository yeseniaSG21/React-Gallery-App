import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import apiKey from "./config";

//Creating the app through components 
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import NotFound from "./components/NotFound";


function App() {
  const [photo, setPhoto] = useState();
  const 

  useEffect(() => {

  }, []);

  axios.get('')
  .then(function (response) {
    // handle success
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });


  return (
    <div>App</div>
  );
}

export default App;