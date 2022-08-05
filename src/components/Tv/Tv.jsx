import React from "react";

const Tv = ({ myData }) => {
  return (
    <>
      <div className="container">
        <div className="row my-4 py-4">
          <div className="col-md-4 py-4 as">
            <div className="bdr w-25"></div>
            <div className="item">
              <h2 className="movieTitle">
                trending <br />
                Tv
                <br /> to watch now
              </h2>
              <p className="movieDesc">most watched Tv by days</p>
            </div>
            <div className="bdr w-100"></div>
          </div>

          {myData
            ? myData.slice(0, 10).map((tv) => {
                return (
                  <div className="col-md-2 oy-4" key={tv.id}>
                    <div className="items">
                      <img
                        className="w-100"
                        src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                        alt="not found"
                      />
                      <h5 className="movieTitleImage">
                        {tv.title}
                        {tv.name}
                      </h5>
                      <span className="badgeNumber">{tv.vote_average}</span>
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

export default Tv;
