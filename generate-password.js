

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


// Collect User Data, View
function userInput() {
    
    // will store user choice
    var userChoice;



    return userChoice;
}



// Generate Random Password, Controller
export function generatePassword() {

    // will store user password, random password
    var password;

    // get user Input, Character Set and the length of the password
    var userchoice = userInput();

    // get the length of the password
    var pwdLength = userChoice.length;

    // get the character Set, all the option the user wants , is lowerCase by default
    var userCharacterSet = userChoice.allCharacterSet;

    // create a loop to get a random number from 0 to the total length of the userCharacterSet-1
    // user that random number as an index
    // pick a random character untill we get desired number of password length
    for(let i = 0; i < pwdLength; i++) {

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
    console.log("password length: " + pwdLength);

    // to avoid any further pattern we can shuffle it, 
    // because we didn't pick from each charactre set individually, we don't have a pattern like
    // lowercaseRandom + upperCaseRandom + numberRandom + specialCharacterrandom 

    return Password;
}


