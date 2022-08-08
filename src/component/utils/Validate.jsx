export default function validate(value) {
  let error = {};

  if (!value.username.trim()) {
    error.username = "Username required";
  } else if (!/^[A-Za-z0-9]{3,16}$/.test(value.username)) {
    error.username =
      "Username should be 3-15 characters & not include special character";
  }
  if (!value.email.trim()) {
    error.email = "Email required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.email)) {
    error.email = "It shouldnot be a valid email address";
  }

  if (!value.password.trim()) {
    error.password = "Password required";
  } else if (
    !/^(?=.{8,20})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$/.test(
      value.password
    )
  ) {
    error.password =
      "Password should be above 8 characters & include atleast 1 uppercase , 1 number , 1 special character";
  }
  if (!value.password2.trim()) {
    error.password2 = "Confirm Password required";
  } else if (value.password !== value.password2) {
    error.password2 = "Password not match!";
  }
}
