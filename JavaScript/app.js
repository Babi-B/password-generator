const fname = document.getElementById("fname").value;
const lname = document.getElementById("lname").value;
const email = document.getElementById("email").value;
const pwd = document.getElementById("pwd").value;
let pwdfField = document.getElementById("pwd");
const alert = document.getElementById("alert");
const gen = document.getElementById("gen");
const success = document.getElementById("success");

gen.addEventListener("click", getPassword);
submit.addEventListener("click", handleSubmit);

function getPassword() {
  pwdfField.value = generatePassword();
}

function handleSubmit() {
  let isValid = validatePassword(pwd);
  if (isValid) {
    success.style.display = "block";
  } else {
    alert.style.display = "block";
  }
}

/* To Generate the password*/
function generatePassword() {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let symbols = "%!@#$^&*-+=|\\(){}:\"';,?";
  let password = "";

  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    let lowerCaseLetter = alphabet.charAt(Math.random() * 26).toLowerCase();
    let upperCaseLetter = alphabet.charAt(Math.random() * 26).toUpperCase();
    let specialChar = symbols.charAt(Math.random() * symbols.length);

    password += randomNumber + lowerCaseLetter + upperCaseLetter + specialChar;
  }
  return password;
}

/* To Validate the password*/
function validatePassword(password) {
  if (password.includes(fname) || password.includes(lname)) {
    return false;
  } else return true;
}
