// Assignment Code
// set variables
var start;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var options;

// set character arrays
character = ["!","@","$","#","%","^","&","*","(",")","+","-","_","=","[","]","{","}","|",",","<",">","/","?"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// empty array to send random uppercase letters to
upper = [];

// convert letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};

// create a variable to store uppercase 
letterUp = letter.map(toUpper);

// selects the button with id generate
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", function () {
    passwordText = generatePassword();
    document.getElementById("password").placeholder = passwordText;
});

// Start function to generate password
function generatePassword() {
    // get user input
    start = parseInt(prompt("Choose between 8 and 50"));
    // validate if user hits cancel
    if (!start) {
        alert("This needs a value");
        // else if for for if user doesn't stay in range to validate
    } else if (start < 8 || start > 50) {
      
        start = parseInt(prompt("You must choose between 8 and 50"));
        // else for if valid input
    } else {
        // prompts for character types wanted
        confirmNumber = confirm("Do you want numbers?");
        confirmCharacter = confirm("Do you want special characters?");
        confirmUppercase = confirm("Do you want uppercase letters?");
        confirmLowercase = confirm("Do you want lowercase letters?");
    };

    // Else if for no selection
    if (!confirmNumber && !confirmCharacter && !confirmUppercase && !confirmLowercase) {
        options = alert("You must choose something!");

    }
    // Else if for all options
    else if (confirmNumber && confirmCharacter && confirmUppercase && confirmLowercase) {

        options = number.concat(character, letterUp, letter);
    }
    // Else if for 3 options
    else if (confirmNumber && confirmCharacter && confirmUppercase) {
        options = number.concat(character, letterUp);
    }
    else if (confirmNumber && confirmCharacter && confirmLowercase) {
        options = number.concat(character, letter);
    }
    else if (confirmNumber && confirmUppercase && confirmLowercase) {
        options = number.concat(letterUp, letter);
    }
    else if (confirmCharacter && confirmUppercase && confirmLowercase) {
        options = character.concat(letterUp, letter);
    }
    // Else if for 2 options 
    else if (confirmNumber && confirmCharacter) {
        options = number.concat(character);

    } else if (confirmNumber && confirmUppercase) {
        options = number.concat(letterUp);

    } else if (confirmNumber && confirmLowercase) {
        options = number.concat(letter);
    }
    else if (confirmCharacter && confirmUppercase) {
        options = character.concat(letterUp);

    } else if (confirmCharacter && confirmLowercase) {
        options = character.concat(letter);

    } else if (confirmUppercase && confirmLowercase) {
        options = letterUp.concat(letter);
    }
    // Else if for 1 option
    else if (confirmNumber) {
        options = number;
    }
    else if (confirmCharacter) {
        options = character;
    }
    // bring values into empty array for uppercase letters
    else if (confirmUppercase) {
        options = upper.concat(letterUp);
    }
    
    else if (confirmLowercase) {
        options = letter;
    };
    
    // empty variable to join random characters into
    var password = [];
 
    // for loop to generate random characters and push to password
    for (var i = 0; i < start; i++) {
        var pickChoices = options[Math.floor(Math.random() * options.length)];
        password.push(pickChoices);
    }
    // take password from for loop and return to a variable 
    var passwordText = password.join("");
    writePassword(passwordText);
    return passwordText;
}

// writes the password in the box
function writePassword(passwordText) {
    document.getElementById("password").textContent = passwordText;

};

