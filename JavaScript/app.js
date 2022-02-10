const fname = document.getElementById("fn").value;
const lname = document.getElementById("ln").value;
const email = document.getElementById("mail").value;
const pass = document.getElementById("pass").value;
const pwdfField = document.getElementById("pass");
const alert = document.getElementById("alert");
const gen = document.getElementById("gen");
const success = document.getElementById("success");


gen.addEventListener("click", getPassword);
submit.addEventListener("click", handleSubmit);

function handleSubmit() {

    if (validatePassword(pass) == true) {
        console.log(fn.value);
        console.log(document.getElementById("pass").value);
      success.style.display = "block";
    } else {
      alert.style.display = "block";
    }
  }

function getPassword() {
  pwdfField.value = generatePassword();
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
function validatePassword() {
  if (pass.includes(fname) || pass.includes(lname)) {
    return false;
  } else return true;
}
