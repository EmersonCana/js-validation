let form = document.querySelector("form");
let submit = document.querySelector("#submit");

const userData = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  password: "",
};

function reset() {
  form.reset();
}

let firstName = document.querySelector("#firstName");
let middleName = document.querySelector("#middleName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");

function validateInput(input) {
  if (!input.value) {
    console.log(input.name, "should not be empty");
    return;
  }
}

function register(e) {
  e.preventDefault();
  let credentials = [
    firstName,
    middleName,
    lastName,
    email,
    password,
    confirmPassword,
  ];

  credentials.forEach((creds) => {
    validateInput(creds);
  });
  console.log(
    "Password: ",
    password.value.length,
    "Confirm Password: ",
    confirmPassword.value.length
  );

  if (password.value.length < 8) {
    console.log("Password should be longer than 8 characters");
    return;
  } else {
    if (password.value === confirmPassword.value) {
      form.submit();
    } else {
      console.log("Passwords do not match");
    }
  }
}

function createErrorMessage(name, message, parent) {
  let error = document.createElement("span");
  error.classList.add("error");
  error.innerHTML = `${name} ${message}`;
  parent.appendChild(error);
}
