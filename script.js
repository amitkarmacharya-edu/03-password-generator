
// import the generate-password file, which has all the logic
import {generatePassword} from "./generate-password.js";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();

    // test password
    

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    console.log(password.length);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);