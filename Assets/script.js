// Assignment code here
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "1234567890";
var specialChars = "!@#$%^&*()-=+[]{};:'<>/?";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = getPasswordLength();
  var includeLowercase = getIncludeLowercase();
  var includeUppercase = getIncludeUppercase();
  var includeNumbers = getIncludeNumbers();
  var includeSpecial = getIncludeSpecial();

  var allChars = "";

  if (includeLowercase) {
    allChars += lowercaseChars;
  }

  if (includeUppercase) {
    allChars += uppercaseChars;
  }
  if (includeNumbers) {
    allChars += numberChars;
  }
  if (includeSpecial) {
    allChars += specialChars;
  }
  if (allChars === "") {
    alert("Please select at least one character type");
    return generatePassword();
  }

  var generatedPassword = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars.charAt(randomIndex);
  }
  return generatedPassword;
}

function getPasswordLength() {
  var userLengthInput = prompt(
    "How many characters would you like your password to be? Min: 8 Max: 128"
  );
  var passwordLength = parseInt(userLengthInput);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter valid number between 8 and 128.");
    return getPasswordLength();
  }
  return passwordLength;
}

function getIncludeLowercase() {
  return confirm("Would you like to include lowercase characters?");
}

function getIncludeUppercase() {
  return confirm("Would you like to include uppercase characters?");
}

function getIncludeNumbers() {
  return confirm("Would you like to include numbers?");
}

function getIncludeSpecial() {
  return confirm("Would you like to include special characters?");
}
