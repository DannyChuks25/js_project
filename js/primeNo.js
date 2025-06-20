let myInput = document.getElementById("myInput");
const checkBtn = document.getElementById("checkBtn");
const feedback = document.getElementById("feedback");

// function primeNo(num){
//     for(let i = 50; i <= 100; i++){
//         let p = true;

//         for(let m = 2; m < i; m++){
//             if(i % m === 0){
//                 p = false;
//             }
//         }
//         if(p == true) {
//             //console.log(i);
//         }   
//     }
// }
function primeNo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let userInput = parseInt(myInput.value);
    console.log(userInput);
    primeNo();
    i = userInput;
    if(isNaN(userInput)){
        feedback.textContent = "Not a number";
        feedback.style.color = "red";
    }
    else if(userInput < 1 || userInput > 50){
        feedback.textContent = "Number must be within 1 to 50.";
        feedback.style.color = "red";
    }
    else if(primeNo(userInput)){
        feedback.textContent = `Correct! ${userInput} is a prime number.`;
        feedback.style.color = "#b6f500";
    } 
    else {
        feedback.textContent = `Wrong! ${userInput} is not a prime number.`;
        feedback.style.color = "#ff4f0f";
    }
})

const primeNoList = document.getElementById("primeNoList"); 
let primes = ""; 

for (let i = 50; i <= 100; i++) {
    let p = true;

    for (let m = 2; m < i; m++) {
        if (i % m === 0) {
            p = false;
            break; 
        }
    }

    if (p === true) {
        primes += i + ", "; 
    }
}

primeNoList.textContent = "Prime numbers between 50 and 100 include: " + primes.slice(0, -2); 


