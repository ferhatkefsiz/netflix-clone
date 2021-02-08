import './App.css';
import React from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}  isLargeRow/>
      <Row title="Netflix Trendings" fetchUrl={requests.fetchTrending} />
      <Row title="Netflix Top Rated " fetchUrl={requests.fetchTopRated} />
      <Row title="Netflix Popular " fetchUrl={requests.fetchPopular} />
      <Row title="Horrow Movies " fetchUrl={requests.fetchHorrorMovies} />

    </div>
  );
}

export default App;
