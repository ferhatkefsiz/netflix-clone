import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[4]
      );
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, []);


  return (
    <header className="banner"
      style={{ backgroundSize: 'cover', backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`, backgroundPosition: 'center center' }}>
      <div className="banner__contents">
        <h1>
          {movie.name}
        </h1>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {movie.overview}
          <br />
          <small>  {movie.vote_average} </small>  
        </h1>

      </div>
      <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner
