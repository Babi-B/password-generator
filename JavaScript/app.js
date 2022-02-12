const fname = document.getElementById("fn");
const lname = document.getElementById("ln");
const email = document.getElementById("mail");
const pwd = document.getElementById("pass");
const alert = document.getElementById("alert");
const gen = document.getElementById("gen");
const success = document.getElementById("success");
const prompt = document.getElementById("prompt");

gen.addEventListener("click", getPassword);
submit.addEventListener("click", handleSubmit);

function handleSubmit() {
  console.log("".length);
  if (pwd.value == "" || fname.value == "" || lname.value == "") {
    prompt.style.display = "block";
  } else if (validatePassword(pwd.value, fname.value, lname.value) === true) {
    success.style.display = "block";
  } else {
    alert.style.display = "block";
  }
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

/* To Validate the password*/
function validatePassword(password, fname, lname) {
  if (password.includes(fname) || password.includes(lname)) {
    return false;
  } else return true;
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
