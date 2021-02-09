import './App.css';
import React from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from './Banner';
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}  isLargeRow/>
      <Row title="Netflix Trendings" fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title="Netflix Top Rated " fetchUrl={requests.fetchTopRated} isLargeRow/>
      <Row title="Netflix Popular " fetchUrl={requests.fetchPopular} isLargeRow/>
      <Row title="Horrow Movies " fetchUrl={requests.fetchHorrorMovies} />

    </div>
  );
}

export default App;
