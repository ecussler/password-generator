/* Password needs to be between 8-128 characters
Confirm whether or not to use lowercase, uppercase, numeric, special characters
Input to each prompt should be verified and one type of character should be selected
Password is displayed in alert or on page */


// // Get references to the #generate element

// function passwordLengthConfirm(lengthPrompt) {

// }

const generatePassword = () => {

  // ARRAY VALUES //
  var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
  var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharactersArray = ['!', '@', '#', '$', '%', '^', '&','*'];
  var characterOptions = []; 
  var password = []; 

  var writePassword; 

  // PASSWORD LENGTH PROMPT

  var passwordLength; 

  var lengthPrompt = function() {
    return window.prompt('How many characters would you like in your password? Please choose a number between 8-128.');  
  }

  passwordLength = lengthPrompt(); 

  // PASSWORD LENGTH ENTRY VALIDATION

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert('Please enter a number between 8-128');
    passwordLength = lengthPrompt();
  }

  console.log(passwordLength); 

  // LOWERCASE PROMPT

  var includeLowercase; 

  var lowercasePrompt = function() {
    return window.confirm('Would you like to include lowercase characters in your password? Click OK for yes, Cancel for no.');
  }

  includeLowercase = lowercasePrompt(); 

  // If user selects 'OK' to include lowercase characters, next section adds lowerCaseArray to the empty characterOptions array and randomizes into empty password array. 

  if (includeLowercase) {
    characterOptions = characterOptions.concat(lowercaseArray); 
    password.push(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]); 
    console.log(password); 
    console.log(characterOptions); 
  }

  console.log(includeLowercase); 

  // For loop randomizes characterOptions array until desired password length is reached.

  for (let index = 0; index < passwordLength-1; index++) {
    password.push(characterOptions[Math.floor(Math.random() * characterOptions.length)]); 
  }

  return password.join(''); 

}




// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
