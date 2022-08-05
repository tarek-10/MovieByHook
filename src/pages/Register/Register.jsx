import React from "react";
import axios from "axios";
const Register = () => {
  const user = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const getFormData = (e) => {
    user[e.target.name] = e.target.value;
    console.log(user);
  };

  const sendFormData = async (e) => {
    e.preventDefault();
    let { data } = await axios.post(
      `https://route-egypt-api.herokuapp.com/signup`,
      user
    );
    if (data.message === "success") {
      e.target.reset();
    }
    console.log(data);
  };
  return (
    <>
      <div className="w-75 mx-auto my-5">
        <form onSubmit={sendFormData}>
          <input
            type="text"
            placeholder="Frist Name"
            name="first_name"
            className="form-control mt-3"
            onChange={getFormData}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            className="form-control mt-3"
            onChange={getFormData}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="form-control mt-3"
            onChange={getFormData}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="form-control mt-3"
            onChange={getFormData}
          />
          <button className="btn btn-info float-right mt-3">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
