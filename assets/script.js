// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let userLengthOpt = Number(window.prompt("Please choose the number of characters for your password. It must have at least 10 characters, but no more than 64.", 10));
  let userLowercaseOpt = window.confirm("Do you want your password with lower-cases?");
  let userUppercaseOpt = window.confirm("Do you want your password with upper-cases?");
  let userNumericOpt = window.confirm("Do you want your password with numbers?");
  let userSpecialCharOpt = window.confirm("Do you want your password with special characters?");


  return { userLengthOpt, userLowercaseOpt, userUppercaseOpt, userNumericOpt, userSpecialCharOpt };
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword(passwordOptions) {
  let password = "";
  let selectedChars = [];

  if (passwordOptions.userLowercaseOpt) {
    selectedChars.push(lowerCasedCharacters);
  }
  if (passwordOptions.userUppercaseOpt) {
    selectedChars.push(upperCasedCharacters);
  }
  if (passwordOptions.userNumericOpt) {
    selectedChars.push(numericCharacters);
  }
  if (passwordOptions.userSpecialCharOpt) {
    selectedChars.push(specialCharacters);
  }

  for (let index = 0; index < passwordOptions.userLengthOpt; index++) {
    password += getRandom(getRandom(selectedChars));
  }
  return password;
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let passwordOptions = getPasswordOptions();
  console.log(passwordOptions);
  let password = generatePassword(passwordOptions);
  let displayPassword = document.querySelector('#password');

  displayPassword.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

