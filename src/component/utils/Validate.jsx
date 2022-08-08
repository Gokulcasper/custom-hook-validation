export default function Validate(value) {
  let errors = {};

  if (!value.username) {
    errors.username = "Username required";
  } else if (!/^[A-Za-z0-9]{3,16}$/.test(value.username)) {
    errors.username =
      "Username should be 3-15 characters & not include special character";
  }
  if (!value.email) {
    errors.email = "Email required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.email)) {
    errors.email = "It shouldnot be a valid email address";
  }

  if (!value.password) {
    errors.password = "Password required";
  } else if (
    !/^(?=.{8,16})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/.test(
      value.password
    )
  ) {
    errors.password =
      "Password should be above 8 characters & include atleast 1 uppercase , 1 number , 1 special character";
  }
  if (!value.password2) {
    errors.password2 = "Confirm Password required";
  } else if (value.password !== value.password2) {
    errors.password2 = "Password not match!";
  }
  return errors;
}
