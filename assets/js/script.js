
// *************************************************************
//                    Generate Password Function
// *************************************************************
var generatePassword = function () {
  
// ********************** Input Section ************************

// get the number of desired characters in the password
var numChars = window.prompt("How many characters do you want in your password? (8 to 128)");

// while loop checking for Not a Number and numbers not between 8 and 128
while (isNaN(numChars) || numChars < 8 || numChars > 128) {
    numChars = window.prompt("Please only enter numbers between 8 and 128");
}

// create a flag to check if at least one of the following character options is selected and use it in a while loop to get the required input
var checkFlag = false;
  
while (!checkFlag) {
  // does the user want lowercase characters
  var lowerChars = window.confirm("Do you want to include lowercase characters in your password?");
  if (lowerChars) {
    checkFlag = true;
  } 
  
  // does the user want uppercase characters in their password
  var upperChars = window.confirm("Do you want to include uppercase characters in your password?");
  if (upperChars) {
    checkFlag = true;
  } 
  
  // does the user want special characters in their password
  var specialChars = window.confirm("Do you want to include special characters in your password?");
  if (specialChars) {
    checkFlag = true;
  } 
  
  // does the user want numbers in their password
  var digitChars = window.confirm("Do you want to include numbers in your password?");
  if (digitChars) {
    checkFlag = true;
  } 
 
  if (checkFlag) {
    break;
  } else {
    window.alert("You must choose at least one option for your password characters.  All four options are recommended for greatest security.")
  }
}    
// ********************** End of Input Section *********************

// ********************** Input Array Building Section *******************

// define arrays for building the password - password string will be built in the mainArray
var mainArray = [];
var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var digitsArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialArray = ["~","!","@","#","$","%","^","&","*","(",")","-","+","?","/"];

// build mainArrary by concatenating the constituent arrays as selected in the input section
if (lowerChars) {
  mainArray = mainArray.concat(lowerArray);
}
if (upperChars) {
  mainArray = mainArray.concat(upperArray);
}
if (specialChars) {
  mainArray = mainArray.concat(specialArray);
}
if (digitChars) {
  mainArray = mainArray.concat(digitsArray);
}

// *********************** End of Input Array Section ********************

// *********************** Build Password Array **************************

// use a for loop to build the password array using the input array (mainArray) and the selected password character length
var passwordArray = [];
for ( i=0; i < numChars; i++) {
  var charPosition = Math.floor(Math.random() * mainArray.length);
  passwordArray[i] = mainArray[charPosition];

}// concatenate the passwordArray into a string
  passwordString = passwordArray.join('');

// *********************** End of Password Array **************************

return passwordString; // return the password string to the calling function
} // ******************* End of Generate Password Function ****************

// **************** Assignment Provided Code **********************

// Link javascript to generate button on index.html 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input on index.html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// *************** End Assignment Provided Code *****************

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
