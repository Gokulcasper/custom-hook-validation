import React from "react";
import UseForm from "./hooks/UseForm";
import Validate from "./utils/Validate";

const FormSignup = () => {
  const { handleChange, value, handleSubmit, errors } = UseForm(Validate);

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          {errors.username && <p>{errors.username}</p>}
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
          {errors.email && <p>{errors.email}</p>}
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
          {errors.password && <p>{errors.password}</p>}
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
          {errors.password2 && <p>{errors.password2}</p>}
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
