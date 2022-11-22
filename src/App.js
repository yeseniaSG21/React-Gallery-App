//Import our require dependencies 
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import apiKey from "./config";

//Creating the app through components 
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import PhotoContainer from "./components/PhotoContainer";
import NotFound from "./components/NotFound";


function App(props) {
  const [photo, setPhoto] = useState([]);
  const [sunsets, setSunsets] = useState([]);
  const [mountains, setMountains] = useState([]);
  const [elephants, setElephants] = useState([]);

  useEffect(() => {
    performSearch();
    performSearch("sunsets");
    performSearch("mountains");
    performSearch("elepahnts");
  }, []);

  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
  .then(function (response) {
    // handle success
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });


  return (
    <div className="container">
      <SearchForm onSearch={performSearch} />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/sunsets" />} />
        <Route path="/sunsets" element={<PhotoContainer data={sunsets} />} />
        <Route path="/mountains" element={<PhotoContainer data={mountains} />} />
        <Route path="/elephants" element={<PhotoContainer data={elephants} />} />
        <Route path="/search/:keyword" element={<PhotoContainer data={photos} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;