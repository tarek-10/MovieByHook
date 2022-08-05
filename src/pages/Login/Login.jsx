import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const history = useNavigate();
  const [dataError, setDataError] = useState("");
  const user = {
    email: "",
    password: "",
  };

  const getFormData = (e) => {
    user[e.target.name] = e.target.value;
  };
  const sendFormData = async (e) => {
    e.preventDefault();
    let { data } = await axios.post(
      `https://route-egypt-api.herokuapp.com/signin`,
      user
    );
    console.log("jdjjdjdjdjd", user);
    console.log(data);
    if (data.message === "success") {
      localStorage.setItem("token", data.token);
      history("/home");
    } else {
      setDataError(data.message);
    }
  };

  return (
    <>
      <div className="w-75 mx-auto my-5">
        <form onSubmit={sendFormData}>
          <input
            onChange={getFormData}
            type="email"
            placeholder="Email"
            name="email"
            className="form-control mt-3"
          />
          <input
            onChange={getFormData}
            type="password"
            placeholder="password"
            name="password"
            className="form-control mt-3"
          />
          {dataError ? <div className="errorInfo">{dataError}</div> : ""}
          <button className="btn btn-info float-right mt-3">login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
