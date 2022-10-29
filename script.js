/* Password needs to be between 8-128 characters.
Confirm whether or not to use lowercase, uppercase, numeric, special characters.
Input to each prompt should be verified and one type of character should be selected.
Password is displayed in alert or on page. */



const generatePassword = () => {

  // ARRAY VALUES //
  let lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
  let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let specialCharactersArray = ['!', '@', '#', '$', '%', '^', '&','*'];
  let characterOptions = []; 
  let arrayOptions = []; 
  let password = []; 



  // PASSWORD LENGTH PROMPT

  var passwordLength; 

  var lengthPrompt = function() {
    return window.prompt('How many characters would you like in your password? Please choose a number between 8-128.');  
  }

  passwordLength = lengthPrompt(); 

  // PASSWORD LENGTH ENTRY VALIDATION

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert('Please enter a number between 8-128.');
    passwordLength = lengthPrompt();
  }


  
  // LOWERCASE PROMPT

let includeLowercase; 

let lowercasePrompt = function() {
    return window.confirm('Would you like to include lowercase characters in your password? Click OK for yes, Cancel for no.');
  }

  includeLowercase = lowercasePrompt(); 

  // If user selects 'OK' to include lowercase characters, this adds lowerCaseArray to the empty characterOptions array, pushes one character to password, and adds 'lowercase' value to arrayOptions. 

  if (includeLowercase) {
    characterOptions = characterOptions.concat(lowercaseArray); 
    password.push(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]); 
    arrayOptions.push('lowercase'); 
  }



// UPPERCASE PROMPT

let includeUppercase;  

let uppercasePrompt = function() {
  return window.confirm('Would you like to include uppercase characters in your password? Click OK for yes, Cancel for no.');
}

includeUppercase = uppercasePrompt(); 

// If user selects 'OK' to include uppercase characters, next section adds uppercaseArray to the characterOptions array,pushes one character to password, and adds 'uppercase' value to arrayOptions.

if (includeUppercase) {
  characterOptions = characterOptions.concat(uppercaseArray); 
  password.push(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]); 
  arrayOptions.push('uppercase');  
}



// NUMBERS PROMPT

let includeNumbers;  

let numbersPrompt = function() {
  return window.confirm('Would you like to include numbers in your password? Click OK for yes, Cancel for no.');
}

includeNumbers = numbersPrompt(); 

// If user selects 'OK' to include numbers characters, next section adds numbersArray to the characterOptions array, pushes one character to password, and adds 'numbers' value to arrayOptions.

if (includeNumbers) {
  characterOptions = characterOptions.concat(numbersArray); 
  password.push(numbersArray[Math.floor(Math.random() * numbersArray.length)]); 
  arrayOptions.push('numbers'); 
}


// SPECIAL CHARACTERS PROMPT  

let includeSpChar;  

let spCharPrompt = function() {
  return window.confirm('Would you like to include special characters in your password? Click OK for yes, Cancel for no.');
}

includeSpChar = spCharPrompt(); 

// If user selects 'OK' to include special characters, next section adds specialCharactersArray to the characterOptions array, pushes one character to password, and adds 'special' value to arrayOptions.

if (includeSpChar) {
  characterOptions = characterOptions.concat(specialCharactersArray); 
  password.push(specialCharactersArray[Math.floor(Math.random() * specialCharactersArray.length)]); 
  arrayOptions.push('special'); 
}



// In order to make sure that the generated password included at least one of each character type selected, I pushed one character to the password upon selecting OK. 
// Below, I am using the arrayOptions value to determine how many characters are needed to meet the passwordLength chosen in the first prompt. 
// For loop randomizes characterOptions array until desired password length is reached.

if (arrayOptions.length === 4){ 
  for (let index = 0; index < passwordLength - 4; index++) {
    password.push(characterOptions[Math.floor(Math.random() * characterOptions.length)]); 
  }
} else if (arrayOptions.length === 3) {
  for (let index = 0; index < passwordLength - 3; index++) {
    password.push(characterOptions[Math.floor(Math.random() * characterOptions.length)]); 
  }
} else if (arrayOptions.length === 2) {
  for (let index=0; index < passwordLength - 2; index++) {
    password.push(characterOptions[Math.floor(Math.random() * characterOptions.length)]);
  }
} else if (arrayOptions.length ===1) {
  for (let index = 0; index < passwordLength - 1; index++) {
    password.push(characterOptions[Math.floor(Math.random() * characterOptions.length)]); 
  }
} else {
  window.alert('You have not chosen to include any characters. Please choose at least one option to generate a password.')
}


return password.join(''); 

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
