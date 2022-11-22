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

//This is our main App component that will Fetch, Request and Display the data 
const App = (props) => {
  const [photos, setPhotos] = useState([]);
  const [flower, setFlower] = useState([]);
  const [waterfalls, setWaterfalls] = useState([]);
  const [murals, setMurals] = useState([]);

  useEffect(() => {
    performSearch();
    performSearch("flower");
    performSearch("waterfalls");
    performSearch("murals");
  }, []);

  const performSearch = ( keyword = "flower" ) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => {
      // handle success
      if (keyword === "flower") {
        setFlower(response.data.photos.photo);
      } else if (keyword === "waterfalls") {
        setWaterfalls(response.data.photos.photo);
      } else if (keyword === "murals") {
        setMurals(response.data.photos.photo);
      } else {
        setPhotos(response.data.photos.photo);
      }
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
        <Route path="/" element={<Navigate to="/flower" />} />
        <Route path="/flower" element={<PhotoContainer data={flower} />} />
        <Route path="/waterfalls" element={<PhotoContainer data={waterfalls} />} />
        <Route path="/murals" element={<PhotoContainer data={murals} />} />
        <Route path="/search/:keyword" element={<PhotoContainer data={photos} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;