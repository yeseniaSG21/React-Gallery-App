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

//This is our main container component that will Fetch, Request and Display the data 
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

  const performSearch = ( keyword = "sunsets" ) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => {
      // handle success
    })
    .catch((error) => {
     // handle error
      console.log("Error fetching and parsing data", error);
    });
  };

  return (
    <div className="container">
      <SearchForm onSearch={performSearch} />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/sunsets" />} />
        <Route path="/sunsets" element={<PhotoContainer data={sunsets} />} />
        <Route path="/mountains" element={<PhotoContainer data={mountains} />} />
        <Route path="/elephants" element={<PhotoContainer data={elephants} />} />
        <Route path="/search/:keyword" element={<PhotoContainer data={photo} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;