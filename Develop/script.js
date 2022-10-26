/* Password needs to be between 8-128 characters
Confirm whether or not to use lowercase, uppercase, numeric, special characters
Input to each prompt should be verified and one type of character should be selected
Password is displayed in alert or on page */

// ARRAY VALUES //
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharactersArray = ['!', '@', '#', '$', '%', '^', '&','*'];


console.log(lowercaseArray, uppercaseArray, numbersArray, specialCharactersArray); 

// // Get references to the #generate element

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var writePassword; 

// PASSWORD LENGTH PROMPT

var passwordLength; 

var lengthPrompt = function() {
  return window.prompt('How many characters would you like in your password? Please choose a number between 8-128.');  
}

passwordLength = lengthPrompt(); 

// PASSWORD LENGTH ENTRY VALIDATION

if (isNaN(passwordLength)) {
  window.alert('Please enter a number between 8-128');
  passwordLength = lengthPrompt(); 
} else if (passwordLength < 8) {
  window.alert('Please enter a number greater than 8 and less than 128');
  passwordLength = lengthPrompt();  
} else if (passwordLength > 128) {
  window.alert('Please enter a number less than 128 and more than 8'); 
  passwordLength = lengthPrompt(); 
}

console.log(passwordLength); 

// LOWERCASE PROMPT

var includeLowercase; 

var lowercasePrompt = function() {
  return window.prompt('Would you like to include lowercase characters in your password? Please answer yes or no.'); 
}

includeLowercase = lowercasePrompt(); 

if (includeLowercase !== 'yes', 'no') {
  window.alert('Please enter either yes or no.'); 
  includeLowercase = lengthPrompt(); 
}

console.log(includeLowercase); 
// function passwordLengthConfirm(lengthPrompt) {

// }

// write this first

// const generatePassword() = {

// // Write JS for include/exclude certain characters using if/them statements




// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
