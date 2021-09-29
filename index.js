// SELECTORS
const btn = document.querySelector(".password-btn");
const input = document.querySelector(".password-text");

// EVENT HANDLERS
btn.addEventListener("click", generatePassword);

// FUNCTIONS

// creates random set of numbers
function createRandom() {
  let length = 10;
  let charSet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*$!?";
  let output = "";

  for (let i = 0; i < length; i++) {
    output =
      output + charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return output;
}

function generatePassword() {
  input.value = createRandom();
}
