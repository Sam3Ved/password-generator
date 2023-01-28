// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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

//Empty array ready for user selections
let userSelect = []
let passwordLength = 0
// Function to prompt user for password options
function getPasswordOptions() {
    passwordLength = parseInt(prompt("How long would you like your password to be be?" + "\nEnter a number between 10 and 64!"))
    if (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
      alert("Your password does not meet the required length!")
    } 
      else {
        let hasLowercase = confirm("Would you like lowercase characters?")
        if (hasLowercase === true) {
          userSelect = userSelect.concat(lowerCasedCharacters)
        }
        let hasUppercase = confirm("Would you like uppercase characters")
        if (hasUppercase === true) {
          userSelect = userSelect.concat(upperCasedCharacters)
        }
        let hasNumeric = confirm("Would you like numeric characters?")
        if (hasNumeric === true) {
          userSelect = userSelect.concat(numericCharacters)
        }
        let hasSpecial = confirm("Would you like special characters?")
        if (hasSpecial === true) {
          userSelect = userSelect.concat(specialCharacters)
        }
        if (hasLowercase === false && hasUppercase === false && hasNumeric === false && hasSpecial === false) {
          alert("You must select a character type!")
          
        }}

    return
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
  let chosenPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    let randomChar = Math.floor(Math.random() * userSelect.length)
    chosenPassword = chosenPassword + userSelect[randomChar]
    
  }
 
  return chosenPassword

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
