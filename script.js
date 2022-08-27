let pswrd = document.getElementById('pswrd');
let toggleBtn = document.getElementById('toggleBtn');

let lowerCase = document.getElementById('lower');
let upperCase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('length');


function checkPassword(data){
    // javascript regular expression pattern
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    // Lower case validation check
    if(lower.test(data)){
        lowerCase.classList.add('valid');
    } else {
        lowerCase.classList.remove('valid');
    }

    // upper case validation check
    if(upper.test(data)){
        upperCase.classList.add('valid');
    } else {
        upperCase.classList.remove('valid');
    }

    // number case validation check
    if(number.test(data)){
        digit.classList.add('valid');
    } else {
        digit.classList.remove('valid');
    }

    // special case validation check
    if(special.test(data)){
        specialChar.classList.add('valid');
    } else {
        specialChar.classList.remove('valid');
    }

    // minimum length case validation check
    if(length.test(data)){
        minLength.classList.add('valid');
    } else {
        minLength.classList.remove('valid');
    }
}

function validate() { 
    let msg; 
    let str = document.getElementById("mdp").value; 
    if (str.match( /[0-9]/g) && str.match( /[A-Z]/g) && str.match(/[a-z]/g) && str.match( /[^a-zA-Z\d]/g) &&str.length >= 8) {
        msg = "<p style='color:green'>Mot de passe fort.</p>"; 
    } else {
        msg = "<p style='color:red'>Mot de passe faible.</p>";
    } 
         
    document.getElementById("msg").innerHTML= msg; 
} 

// Show hide password
toggleBtn.onclick = function(){
    if (pswrd.type === 'password'){
        pswrd.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
    } else {
        pswrd.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide');
    }
}