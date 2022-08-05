import React, { useState, useEffect, Fragment } from "react";
import Tv from "./components/Tv/Tv";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/Layout/DefaultLayout";
import Home from "./components/Home/Home";
import Header from "./components/Layout/BasicLayout/Header";
import NotFound from "./components/NotFound/NotFound";
import Movies from "./components/Movies/Movies";
import axios from "axios";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ProtectComp from "./components/ProtectComp/ProtectComp";
const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [myData, setMyData] = useState([]);
  const mediaType = ["movie", "tv"];
  const tokenData = localStorage.getItem("token");
  useEffect(() => {
    mediaType.map((media) => {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/${media}/day?api_key=52bbcddeda849047525b51d6f8a12361`
        )
        .then((res) => {
          if (media == "movie") {
            setMovieData(res.data.results);
          } else if (media == "tv") {
            setMyData(res.data.results);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  return (
    <>
      <Routes>
        <Fragment>
          <Route element={<ProtectComp />}>
            <Route
              path="/home"
              element={
                <DefaultLayout>
                  <Home movieData={movieData} myData={myData} />
                </DefaultLayout>
              }
            />
          </Route>

          <Route element={<ProtectComp />}>
            <Route
              path="/movie"
              element={
                <DefaultLayout>
                  <Movies movieData={movieData} />
                </DefaultLayout>
              }
            />
          </Route>

          <Route element={<ProtectComp />}>
            <Route
              path="/tv"
              element={
                <DefaultLayout>
                  <Tv myData={myData} />
                </DefaultLayout>
              }
            />
          </Route>

          <Route
            path="/login"
            element={
              <DefaultLayout>
                <Login />
              </DefaultLayout>
            }
          />
          <Route
            path="/register"
            element={
              <DefaultLayout>
                <Register />
              </DefaultLayout>
            }
          />

          <Route
            path="/"
            element={
              <DefaultLayout>
                {tokenData ? (
                  <Home movieData={movieData} myData={myData} />
                ) : (
                  <Register />
                )}
              </DefaultLayout>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Fragment>
      </Routes>
    </>
  );
};

export default App;
