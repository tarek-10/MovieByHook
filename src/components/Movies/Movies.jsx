import React from "react";
const Movies = ({ movieData }) => {
  console.log(movieData);
  return (
    <>
      <div className="container">
        <div className="row my-4 py-4">
          <div className="col-md-4  py-4">
            <div className="bdr w-25"></div>
            <div className="item">
              <h2 className="movieTitle">
                trending <br />
                movies
                <br /> to watch now
              </h2>
              <p className="movieDesc">most watched movies by days</p>
            </div>
            <div className="bdr w-100"></div>
          </div>

          {movieData
            ? movieData.slice(0, 10).map((movie) => {
                return (
                  <div className="col-md-2 my-4" key={movie.id}>
                    <div className="items">
                      <img
                        className="w-100"
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="not found"
                      />
                      <h5 className="movieTitleImage">
                        {movie.title}
                        {movie.name}
                      </h5>
                      <span className="badgeNumber">{movie.vote_average}</span>
                    </div>
                  </div>
                );
              })
            : "There Is No Films To Show"}
        </div>
      </div>
    </>
  );
};

export default Movies;
