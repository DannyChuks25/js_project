let Email = document.getElementById("Email");
let Password = document.getElementById("Password");
let Username = document.getElementById("Username");

let myForm = document.getElementById("myForm");
let pswrdToggle = document.getElementById("pswrd-toggle");
let span = document.querySelector(".desc");

let char7 = document.getElementById("char7");
let aNum_Sym = document.getElementById("aNum_Sym");
let aLetter = document.getElementById("aLetter");

let nameFeedback = document.getElementById("nameFeedback");
let emailFeedback = document.getElementById("emailFeedback");
let passwordFeedback = document.getElementById("passwordFeedback");

const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const usernameFormat = /^[a-zA-Z][a-zA-Z0-9_-]{7,15}$/;
const num_symbol = /^(?=.*\d)(?=.*[!@#$%^&(),.?":{}|<>]).+$/;
const oneLetter = /^(?=.*[a-zA-Z]).+$/;

pswrdToggle.onclick =  function(){
    if(Password.type === "password"){
        Password.setAttribute("type", "text");
    }
    else{
        Password.setAttribute("type", "password");
    }
}

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(validateForm()){
        alert("Form Submitted");
        myForm.reset();
        nameFeedback.textContent = "";
        passwordFeedback.textContent = "";
        emailFeedback.textContent = "";
        char7.classList.remove("correct");
        aNum_Sym.classList.remove("correct");
        aLetter.classList.remove("correct");
    };
})

function validateForm(){
    let email = Email.value;
    let username = Username.value;
    let password = Password.value;
    console.log(email);
    console.log(username);
    console.log(password);
    
    let isValid = true;
    if(email === ""){
        emailFeedback.textContent = "Please enter your email";
        emailFeedback.style.color = "red";
        isValid = false;
    }
    else {
        if(emailFormat.test(email)){
            emailFeedback.textContent = "Valid Email";
            emailFeedback.style.color = "green";
        }
        else{
            emailFeedback.textContent = "Invalid Email";
            emailFeedback.style.color = "red";
            isValid = false;
        }
    }

    if(username === ""){
        nameFeedback.textContent = "Please enter your username";
        nameFeedback.style.color = "red";
        isValid = false;
    }
    else{
        if(usernameFormat.test(username)){
            nameFeedback.textContent = "Username Valid";
            nameFeedback.style.color = "green";
        }
        else{
            nameFeedback.textContent = "InValid Username";
            nameFeedback.style.color = "red";
            isValid = false;
        }
    }
    if(password === ""){
        passwordFeedback.textContent = "Please enter your password";
        passwordFeedback.style.color = "red";
        isValid = false;
    }
    else{

        let has7Chars = password.length >= 7;
        let hasNumSym = num_symbol.test(password);
        let hasOneLetter = oneLetter.test(password);

        char7.classList.toggle("correct", has7Chars);
        aNum_Sym.classList.toggle("correct", hasNumSym);
        aLetter.classList.toggle("correct", hasOneLetter);

        if(has7Chars && hasNumSym && hasOneLetter){
            passwordFeedback.textContent = "Password Valid";
            passwordFeedback.style.color = "green";
        }
        else{
            passwordFeedback.textContent = "Enter a valid password";
            passwordFeedback.style.color = "red";
            isValid = false;
        }
    }
    return isValid;
}

Email.addEventListener("keyup", validateForm);
Password.addEventListener("keyup", validateForm);
Username.addEventListener("keyup", validateForm);