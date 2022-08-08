import React, { useState } from "react";

const UseForm = () => {
  const initialize = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };
  const [value, setValue] = useState({ initialize });
  // const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((e) => {
      return {
        ...e,
        [name]: value,
      };
    });
  };
  return { handleChange, value };
};

export default UseForm;
