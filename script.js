const passwordBox = document.getElementById("password");
const length = 8;

//---specify the things required in password---//
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+=~<>/-=";

const allchars = upperCase + lowerCase + number + symbol;

//---for generating random password--//
function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += symbol[Math.floor(Math.random()* symbol.length)];

//---add the random num,char,sym up to lenght is 8---//
    while(length > password.length){
        password += allchars[Math.floor(Math.random()* allchars.length)];
    }

    //--dispaly value in password box---// 
    passwordBox.value =password;
}

//-----for copy the password---//
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
