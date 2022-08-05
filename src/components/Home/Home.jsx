import React from "react";
import "./Home.css";
import Movies from "../Movies/Movies";
import Tv from "../Tv/Tv";
const Home = ({ movieData, myData }) => {
  return (
    <div>
      <Movies movieData={movieData} />
      <Tv myData={myData} />
    </div>
  );
};

export default Home;
