const passwordBtn=document.getElementById("generate");
const copyBtn = document.getElementById("copy");
let passwordEl = document.getElementById("password");

passwordBtn.addEventListener("click", function(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ.,";
    var passwordLength = 12;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
}
        passwordEl.value = password;
 
});

console.log(password);

copyBtn.addEventListener("click", function(){
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");  
});