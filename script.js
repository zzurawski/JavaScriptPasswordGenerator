// Assignment Code
var generateBtn = document.querySelector("#generate");

//Event listener when button is clicked to write password//
addEventListener("click", writePassword)


  //Set the possible characters in each chosen requirement//
  const lowercaseChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const uppercaseChoices =["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const specialChoices = ["!","@","#","$","%","^","&","*",">","<","-","+","?"];
  const numberChoices = ["1","2","3","4","5","6","7","8","9","0"];

//generating the password based on user inputted parameters//
function generatePassword() {

  //Set character length for password requirements//
  var number = window.prompt("How many characters does your password require? \nPick between 8-128 characters");

      //Make sure the numbers are within the available requirements and redo it if number not acceptable//
    if (number > 128 || number < 8) {
      window.alert("Please pick a numeric value between 8 and 128!")
      //resets the value if it is too small or large//
      var number = window.prompt("How many characters does your password require minimum? \nPick between 8-128 characters")
      
      } else {

      window.alert("you chose " + number + " characters for your password")
      }

  //parameters for password based on confirmations//
  var special = window.confirm("Does your password require a special character? \n($ , @ , ! , + , etc.");
  
  var uppercase = window.confirm("Does your password require an uppercase letter?");
  
  var numeric = window.confirm("Does your password require any numeric values?");
  
  var lowercase = window.confirm("Does your password require any lowercase letters?");
  
  //empty array to be filled if certain requirements are confirmed//
  var passwordCharacters = []


  //Resets if all possible requirements are null//
    if (special === false && uppercase === false && numeric === false && lowercase === false) {
      window.alert("Must chose atleast one requirement!");
      var special = window.confirm("Does your password require a special character? \n($ , @ , ! , + , etc.");
      var uppercase = window.confirm("Does your password require an uppercase letter?");   
      var numeric = window.confirm("Does your password require any numeric values?");
      var lowercase = window.confirm("Does your password require any lowercase letters?");
    }



    if (special === true) {
      passwordCharacters = passwordCharacters.concat(specialChoices)
      }
  
    if (uppercase === true) {
      passwordCharacters = passwordCharacters.concat(uppercaseChoices)
      }

    if (numeric === true) {
    //adds the array of possible choices if confirmed//
      passwordCharacters = passwordCharacters.concat(numberChoices)
      }
  
    if (lowercase === true) {
      passwordCharacters = passwordCharacters.concat(lowercaseChoices)
      }

      console.log(passwordCharacters)

      //no starting password so it can be randomly generated based on the parameters//
      var passwordGenerated = ""
  
      //sets the characters to be random from each array that is confirmed//
      for (var i = 0; i <= number; i++){
        var passwordGenerated = passwordGenerated + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(passwordGenerated)
      }
  
    return passwordGenerated;

}

//puts the generated password into the textbox on the page//

function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

};

//Zachariah Zurawski//