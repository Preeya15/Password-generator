// Assignment Code
// global attribute assignment
var generateBtn = document.querySelector("#generate");
var lowSpe = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", + '"'];
var uppNumSpChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", + '"'];
var uppNum = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var numSpe = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", + '"'];
var allChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", + '"'];


// Write password to the #password input
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.textContent = password;

}

//generate password prompts
function generatePassword(){
  var passLength = prompt("How many characters you want in your password?");
  var lowerCase = confirm("Would you fancy some LowerCase?");
  var upperCase = confirm("Would you fancy some UpperCase?");
  var numeric = confirm("Want some numbers too?");
  var specialChar = confirm("How about special characters?");

  var NoSelection='';
  var generatePass='';

//console log to check the values being true or false when selected
  console.log(passLength);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numeric);
  console.log(specialChar);

// if selected all
    if(lowerCase ===true&&upperCase === true&&numeric === true&&specialChar === true){
    for(var i = 0; i <passLength; i++){

      charPick = allChars[Math.floor(Math.random()*allChars.length)];
      generatePass = generatePass.toString()+ charPick.toString();
    }

  }
// if selected lowercase and special characters
else if(lowerCase=== true&&specialChar === true){
    for(var i = 0; i <passLength; i++){

      charPick = lowSpe[Math.floor(Math.random()*lowSpe.length)];
      generatePass = generatePass.toString()+charPick.toString();
      }
   
}

//  if selected uppercase, number, and specialchar
    else if(upperCase === true&&numeric === true&&specialChar=== true){
        for(var i = 0; i <passLength; i++){

        charPick = uppNumSpChar[Math.floor(Math.random()*uppNumSpChar.length)];
        generatePass = generatePass.toString() + charPick.toString();
        }
        
    }

//  if selected uppercase and number
    else if(upperCase === true&&numeric === true){
        for(var i = 0; i <passLength; i++){

        charPick = uppNum[Math.floor(Math.random()*uppNum.length)];
        generatePass = generatePass.toString()+charPick.toString();
        }
    
    }

// if selected numbers and special characters
    else if(numeric===true&&specialChar === true){
      for(var i = 0; i <passLength; i++){

        charPick = numSpe[Math.floor(Math.random()*numSpe.length)];
        generatePass = generatePass.toString()+charPick.toString();
        }
    }

//if no selection is made
    else {
    NoSelection++;
    alert("You've not made any selection");
    }
    return generatePass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


