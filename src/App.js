import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
import "./App.css";

//http://www.omdbapi.com/?i=tt3896198&apikey=80cdd94f

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
    </Routes>
  );
};

export default App;
