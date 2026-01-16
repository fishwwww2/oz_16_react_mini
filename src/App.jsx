// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// page components
import Layout from "@/components/Layout";
import MovieList from "@/pages/MovieList";
import MovieDetail from "@/pages/MovieDetail";
import movieDetailData from "@/data/movieDetailData.json";


// css components
import "./App.css";


function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MovieList />} />
        <Route
          path="/details"
          element={<MovieDetail movie={movieDetailData} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
