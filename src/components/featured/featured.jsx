import './featured.scss'
import React, { useState,useEffect } from 'react';
import Image from '../../assets/images/wed.jpg'
import Wedlogo from '../../assets/images/WedLogo.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from "../../Apis/axios";
import requests from "../../Apis/request";
const Featured = ({ type }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      // random movie function
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
   const Imgsrc =`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
  return (

    <div className="featured">

      <img src={Imgsrc} />
      <div className="info">
      <h1 >{movie?.name || movie?.title || movie?.original_name}  </h1>
        <span className='desc'>
        {truncate(movie?.overview, 150)}
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>
              Info
            </span>

          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;