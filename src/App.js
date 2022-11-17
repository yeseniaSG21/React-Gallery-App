import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import apiKey from "./config";

function App() {
  const [photo, setPhoto] = useState();

  useEffect(() => {
  axios.get('')
    .then(function (response) {
      // handle success
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }, []);

  return <div>App</div>;
}

export default App;