// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function () {
  
// get the number of desired characters in the password
var numChars = window.prompt("How many characters do you want in your password? (8 to 128)");
//checking for Not a Number and numbers not between 8 and 128
while (isNaN(numChars) || numChars < 8 || numChars > 128) {
   numChars = window.prompt("Please only enter numbers between 8 and 128");
}
 
console.log(numChars + " characters");

// does the user want lowercase characters
var lowerChars = window.confirm("Do you want to include lowercase characters in your password?");
if (lowerChars) {
  console.log("User wants lowercase characters");
} else {
  console.log("User doesn't want lowercase characters");
}

// does the user want uppercase characters in their password
var upperChars = window.confirm("Do you want to include uppercase characters in your password?");
if (upperChars) {
  console.log("User wants uppercase characters");
} else {
  console.log("User doesn't want uppercase characters");
}

// does the user want special characters in their password
var specialChars = window.confirm("Do you want to include special characters in your password?")
if (specialChars) {
  console.log("User wants special characters");
} else {
  console.log("User doesn't want special characters");
}

  
passwordString = "This is a placeholder for the final password";
return passwordString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
