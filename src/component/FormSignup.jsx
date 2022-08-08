import React from "react";
import UseForm from "./hooks/UseForm";

const FormSignup = () => {
  const { handleChange, value } = UseForm();

  return (
    <div>
      <form>
        <h1>Get Satarted with us today! create your account</h1>
        <div>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            name="Username"
            placeholder="Enter Your Name"
            value={value.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            name="Email"
            placeholder="Enter Your Email"
            value={value.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            name="Password"
            placeholder="Enter Password"
            value={value.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password2">password2</label>
          <input
            id="password2"
            type="password"
            name="ConfirmPassword"
            placeholder="Enter Confirm Password"
            value={value.password2}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? Login <a href="#">Here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
