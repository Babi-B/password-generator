const fname = document.getElementById("fn");
const lname = document.getElementById("ln");
const email = document.getElementById("mail");
const pwd = document.getElementById("pass");
const formAlert = document.getElementById("alert");
const formAlert2 = document.getElementById("alert2");
const gen = document.getElementById("gen");
const form = document.getElementById("submit");

gen.addEventListener("click", getPassword);

function handleSubmit() {
  if (validatePassword(pwd.value, fname.value, lname.value) == false) {
    return false;
  }
  return true;
}

function getPassword() {
  pwd.value = generatePassword();
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
  return shuffle(password);
}

/* To shuffle the password string*/
function shuffle(str) {
  let arr = str.split("");
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let j = Math.floor(Math.random() * n);

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr.join("");
}

/* To Validate the password*/
function validatePassword(password, fname, lname) {
  if (password.includes(fname) || password.includes(lname)) {
    formAlert.style.display = "block";
    return false;
  } else if (
    !/\d/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/[%!@#$^&*-+=|\\(){}:\"';,?]/.test(password)
  ) {
    formAlert2.style.display = "block";
    return false;
  } else return true;
}
