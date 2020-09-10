

// create data structure to store the character set and random generation function
// MODEL

const characterSet = {

    // all lower case alphabets
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    // all upper case alphabets
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    // all numbers
    numbers: "0123456789",
    // all special characters, list provided by the instructors
    specialCharacters: "@%+\/'!#$^?:,)(}{][~-_."

};

// save user choice
var includeLower;
var includeUpper;
var includeNumbers;
var includeSymbols;
var passwordLength;


// Collect User Data, View
function userInput() {
    

    // get user input
    // get the form element
    var formInput = document.getElementById('formInput');

    // store users selection
    includeLower = formInput.lower.checked;
    includeUpper = formInput.upper.checked;
    includeNumbers = formInput.number.checked;
    includeSymbols = formInput.symbols.checked;
    passwordLength = parseInt(formInput.passwordLength.value);

    // if user doesn't select any option, default to lower case
    if(!(includeLower || includeUpper || includeNumbers || includeSymbols)) {
        includeLower = true;
    } 

    // store all options
    var option = "";
    if(includeLower) {
        option += characterSet.lowerCase;
    }
    if(includeUpper) {
        option += characterSet.upperCase;
    }
    if(includeNumbers) {
        option += characterSet.numbers;
    }
    if(includeSymbols) {
        option += characterSet.specialCharacters;
    }


    // create object userChoice
    var userChoice = {
        length: passwordLength,
        allCharacterSet: option
    };
    
    console.log(userChoice.length);
    console.log(userChoice.allCharacterSet);

    return userChoice;
}



// Generate Random Password, Controller
export function generatePassword() {

    // will store user password, random password
    var password="";

    // get user Input, Character Set and the length of the password
    var userChoice = userInput();

    // get the length of the password
    var userPwdLength = userChoice.length;

    // get the character Set, all the option the user wants , is lowerCase by default
    var userCharacterSet = userChoice.allCharacterSet;


    // password must include at least 1 character from the characterSets 
    var password = includeAtleastOneCharacter();
    var additionalPwd = userPwdLength - password.length;
    // create a loop to get a random number from 0 to the total length of the userCharacterSet-1
    // user that random number as an index
    // pick a random character untill we get desired number of password length
    for(let i = 0; i < additionalPwd; i++) {

        // Math.random() creates a random number between 0 to 1 , 
        // Multiply it by the total length of the userCharacterSet to get the length
        // Round the result with Math.floor()
        var randomIndex = Math.floor( Math.random() * userCharacterSet.length );
        
        // user the random number as an index, get the random character and add save it
        // String is also of type array, we can access the string as with the array
        password += userCharacterSet[ randomIndex ];
    }

    // console log the result for testing, print both password and 
    console.log("password : " + password)
    console.log("password length: " + password.length);

    // to avoid any further pattern we can shuffle it, 
    // because we didn't pick from each charactre set individually, we don't have a pattern like
    // lowercaseRandom + upperCaseRandom + numberRandom + specialCharacterrandom 

    return password;
}


// picks atleast 1 character from the characters set
function includeAtleastOneCharacter() {
    var password = "";
    // random index
    var randomIndex = Math.floor( Math.random() * 10);

    if(includeLower) {
        password += characterSet.lowerCase[randomIndex];
    }

    if(includeUpper) {
        password += characterSet.upperCase[randomIndex];
    }

    if(includeNumbers) {
        password += characterSet.numbers[randomIndex];
    }

    if(includeSymbols) {
        password += characterSet.specialCharacters[randomIndex];
    }

    console.log("at : " + password);

    return password;
}

