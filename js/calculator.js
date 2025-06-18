// RETIREMENT AGE CALCULATOR
function calculateAge(birthYear){
    return new Date().getFullYear() - birthYear;
}


function calculateRetirement(birthYear){
    const retirementAge = 55;
    const currentAge = calculateAge(birthYear);
    const yearsLeft = retirementAge - currentAge;

    if (yearsLeft > 1) {
        return `You will retire in ${yearsLeft} years.`;
    } else if (yearsLeft === 1) {
        return `You will retire next year.`;
    } else if (yearsLeft === 0) {
        return `You will retire this year.`;
    } else if (yearsLeft === -1) {
        return `You ought to have retired last year.`;
    } else {
        return `You ought to have retired ${Math.abs(yearsLeft)} years ago.`;
    }

}

let retireForm = document.getElementById("retire_form");
let retireFeedback = document.querySelector(".retire-feedback");

retireForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let birthYear = document.getElementById("retire").value;
    birthYear = parseInt(birthYear);
    console.log(birthYear);

    console.log(calculateRetirement(birthYear));
    
    retireFeedback.innerHTML = calculateRetirement(birthYear);
    retireFeedback.style.border =  "2px solid gray";
})

// INVESTMENT CALCULATOR

const investCalculator = document.getElementById("invest_calculator");
const investFeedback  = document.querySelector(".investment-feedback");

investCalculator.addEventListener("submit", (e) => {
    e.preventDefault();
    let investAmt = document.getElementById("invest_amt").value;
    investAmt = parseInt(investAmt);
    let duration = document.getElementById("duration").value;
    duration = parseInt(duration);
    console.log(duration);
    console.log(investAmt);
    let interest = (0.2 * investAmt);
    let total = interest * duration;
    console.log(total);

    investFeedback.innerHTML = `You will get N${total} at the end of each month`;
    investFeedback.style.border = "2px solid gray";
})


// LOAN CALCULATOR
const loanForm = document.getElementById("loan_form");

const loanFeedback = document.querySelector(".loan-feedback ");

loanForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let loanTime = document.getElementById("loanTime").value;
    loanTime = parseInt(loanTime);
    let loanAmt = document.getElementById("loan_amount").value;
    loanAmt = parseInt(loanAmt);

    console.log(loanTime);
    console.log(loanAmt); 

    let loanInterest = 0.2 * loanAmt;
    let loanPayment = (loanInterest * loanTime) + loanAmt;
    let yr;
    if(loanTime === 1){
        yr = "year";
    } else{
        yr = "years";
    }

    loanFeedback.innerHTML = `You are to repay N${loanPayment} after ${loanTime} ${yr}.`;
    loanFeedback.style.border = "2px solid gray";
})


// SIMPLE CALCULATOR
const simpleCalcForm = document.getElementById("simple_calcForm");

const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".minus");
const divideBtn = document.querySelector(".division");
const multiplyBtn = document.querySelector(".multiply");
const modulosBtn = document.querySelector(".modulos");
const simpleCalcFeedback = document.querySelector(".simpleCalc-feedback");

function getNums(){
    let firstNo = document.getElementById("first_no").value;
    firstNo = parseInt(firstNo);
    let secondNo = document.getElementById("second_no").value;
    secondNo = parseInt(secondNo);
    return {firstNo, secondNo};
}
let snCtn = document.querySelector(".sn_ctn");    
    
addBtn.addEventListener("click", (e) => {        
    e.preventDefault();
    let {firstNo, secondNo} = getNums();
    snCtn.textContent  = addBtn.textContent;
    //console.log(firstNo+secondNo);
        
    let numsTotal = firstNo + secondNo;
    simpleCalcFeedback.innerHTML = `${firstNo} + ${secondNo} is ${numsTotal}`;
    simpleCalcFeedback.style.border = "2px solid gray";
});

subtractBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let {firstNo, secondNo} = getNums();
    snCtn.textContent  = subtractBtn.textContent;
    let numsTotal = firstNo - secondNo;
    simpleCalcFeedback.innerHTML = `${firstNo} - ${secondNo} is ${numsTotal}`;
    simpleCalcFeedback.style.border = "2px solid gray";
});   

divideBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let {firstNo, secondNo} = getNums();
    snCtn.textContent = divideBtn.textContent;
    let numsTotal = firstNo / secondNo;
    simpleCalcFeedback.innerHTML = `${firstNo} / ${secondNo} is ${numsTotal}`;
    simpleCalcFeedback.style.border = "2px solid gray";
}); 

multiplyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let {firstNo, secondNo} = getNums();
    snCtn.textContent = multiplyBtn.textContent;
    let numsTotal = firstNo * secondNo;
    simpleCalcFeedback.innerHTML = `${firstNo} * ${secondNo} is ${numsTotal}`;
    simpleCalcFeedback.style.border = "2px solid gray";
}); 

modulosBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let {firstNo, secondNo} = getNums();
    snCtn.textContent = modulosBtn.textContent;
    let numsTotal = firstNo % secondNo;
    simpleCalcFeedback.innerHTML = `${firstNo} % ${secondNo} is ${numsTotal}`;
    simpleCalcFeedback.style.border = "2px solid gray";
}); 
// document.addEventListener("DOMContentLoaded", () => {
    
// })
