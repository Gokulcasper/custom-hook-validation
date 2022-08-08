import React, { useState } from "react";

const UseForm = (Validate) => {
  const initialize = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };
  const [value, setValue] = useState({ initialize });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((e) => {
      return {
        ...e,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validate(value));
  };

  return { handleChange, value, handleSubmit, errors };
};

export default UseForm;
