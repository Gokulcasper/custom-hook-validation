import React from "react";

const FormSignup = () => {
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
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            name="Email"
            placeholder="Enter Your Email"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            name="Password"
            placeholder="Enter Password"
          />
        </div>
        <div>
          <label htmlFor="password2">password2</label>
          <input
            id="password2"
            type="password"
            name="ConfirmPassword"
            placeholder="Enter Confirm Password"
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
