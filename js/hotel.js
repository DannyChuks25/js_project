//  FIRST PAGE VALIDATION

const hotelForm = document.getElementById("hotelForm");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
const fnameFeedback = document.getElementById("fnameFeedback");
const lnameFeedback = document.getElementById("lnameFeedback");

const recommendationSelect = document.getElementById("recommendation-select");
const recommendationFeedback =  document.getElementById("recommendation-feedback");
const roomSelect = document.getElementById("room-select");
const roomFeedback = document.getElementById("room-feedback");
const countdownCtn = document.getElementById("countdown-container");
const accommodationBack =  document.getElementById("accommodationBack");
const dateFeedback = document.getElementById("dateFeedback");
const selectRoomFeedback = document.getElementById("selectRoomFeedback");
const countdown = document.getElementById("countdown");

hotelForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstName = fname.value;
    let lastName = lname.value; 
    // console.log(firstName);
    // console.log(lastName);
    if(firstName === ""){
        fnameFeedback.textContent = "Enter first name";
        fnameFeedback.style.color = "#fa3232";
        return;
    }
    if(lastName === ""){
        lnameFeedback.textContent = "Enter last name";
        lnameFeedback.style.color = "#fa3232";
        // return;
    }
    if(firstName && lastName){
        // alert("Form Submitted Successfully")
        document.body.style.background = "linear-gradient(to left, #303030, #525151)";
        hotelForm.style.display = "none";
        recommendationSelect.style.display = "block";
    }
});
accommodationBack.onclick = function(){
    recommendationSelect.style.display = "none";
    document.body.style.background = "linear-gradient(to right, black, #1d4ed8)";
    hotelForm.style.display = "block";
}
// "#17f817" - green
// "#fa3232" - red

//  SECOND PAGE VALIDATION
const recommend1 = document.getElementById("one");
const recommend2 = document.getElementById("two");
const recommendBack =  document.getElementById("recommendBack");
const roomSelectBack = document.getElementById("roomSelectBack");
const recommendFeedbackNext = document.getElementById("recommendFeedbackNext");
const recommendRadios = document.querySelectorAll("input[name='boxx']");
console.log(recommendRadios);

const feedbackContent = document.getElementById("feedback-content");

recommendRadios.forEach(recommendRadio => {
    recommendRadio.addEventListener("change", () => {
        if(recommendRadio.checked){
            if(recommendRadio.value === "free"){
                 recommendationSelect.style.display = "none";
                 recommendationFeedback.style.display = "block";
                 feedbackContent.textContent = "Thank you for selecting a Free Accommodation. Our Staff will get you the available room soon."
                console.log("You selected free plan");
                
            }
            else if(recommendRadio.value === "paid"){
                  recommendationSelect.style.display = "none";
                  recommendationFeedback.style.display = "block";
                  feedbackContent.textContent = "Thank you for selecting a Paid Accommodation. Our Staff will get you the available room soon."
                console.log("You selected paid plan");
            }
        }
    })
})
recommendBack.onclick = function(){
    recommendationFeedback.style.display = "none";
    recommendationSelect.style.display = "block";
    recommend1.checked = false;
    recommend2.checked = false;
    
}
recommendFeedbackNext.onclick = function(){
    recommendationFeedback.style.display = "none";
    roomSelect.style.display = "block";
}
roomSelectBack.onclick = function(){
    roomSelect.style.display = "none";
    recommendationFeedback.style.display = "block";
}

//  THIRD PAGE VALIDATION
const roomFeedbackContent = document.getElementById("roomFeedback-content");
const roomRadios = document.querySelectorAll("input[name='box']");
const checkout = document.getElementById("checkout");

let no_of_days;
let date = null;
function confirmCheckout(){
    checkout.addEventListener("change", function(){
    const leave = this.value;
    // console.log(leave);
    const [year, month, day] = leave.split("-").map(Number);
    // console.log(day);
    // console.log(month);
    
    date = new Date(year, month-1, day);
    console.log(date.toString());
    let presentDay = new Date();
    let pDay = presentDay.getDate();
    console.log(presentDay);
    console.log(day);
    console.log(pDay);

    // let month31 = true;
    // let month30 = true;
    // let mth31 = [0,2,4,6,8,10];
    // let mth30 = [1,3,5,7,9,11];
    // if(mth31.some(month31))
    
    // if(date > presentDay){
    //     console.log(date - presentDay);
    // }
    console.log(date.getTime());
    console.log(presentDay.getTime());
    

    // no_of_days = day - pDay;
    no_of_days = date.getTime() - presentDay.getTime();
    no_of_days = Math.floor(no_of_days/(1000*60*60*24)); // Correct
    console.log(no_of_days);
    console.log(date);
    // let dateInMs = date.getTime();
    // let presentDayInMs = presentDay.getTime();
    // console.log(dateInMs);
    // console.log(presentDayInMs);
    // if(dateInMs > presentDayInMs){
    //     let totalDaysInMs = dateInMs + presentDayInMs;
    //     no_of_days = Math.floor(totalDaysInMs/(1000*60*60*24));
    //     console.log(no_of_days);
    // }

    if(date < presentDay){
        dateFeedback.textContent = "Checkout cannot be a past date. Select a future date"
        dateFeedback.style.color = "#fa3232";
        selectNext.disabled = true;
    }
    else{
        dateFeedback.textContent = "Checkout Valid"
        dateFeedback.style.color = "#17f817";
        selectNext.disabled = false;
    }
})
}
// confirmCheckout()

function startCountdown(){
    const interval = setInterval(() => {
        if(!date) return;
        const now = new Date().getTime();
        // let dateInMs = date.getTime();
        let distance = date.getTime() - now;
        console.log(distance);

        let days = Math.floor(distance/(1000*60*60*24));
        let hours = Math.floor(distance%(1000*60*60*24)/(1000*60*60));
        let minutes = Math.floor(distance%(1000*60*60)/(1000*60));
        let seconds = Math.floor(distance%(1000*60)/1000);

        days = (days<10)?"0"+days:days;
        hours = (hours<10)?"0"+hours:hours;
        minutes = (minutes<10)?"0"+minutes:minutes;
        seconds = (seconds<10)?"0"+seconds:seconds;

        countdown.textContent = `${days}D:${hours}H:${minutes}M:${seconds}S`;
    })
}
confirmCheckout();

console.log(roomRadios);
let roomType;
let roomPrice;
const selectNext = document.getElementById("selectNext");
let radioChecked = false;
roomRadios.forEach(roomRadio => {
    if(roomRadio.checked) radioChecked = true;
})
roomRadios.forEach(roomRadio => {
    roomRadio.addEventListener("change", () => {
        if(roomRadio.checked){
            if(roomRadio.value === "standard"){
                roomType = "Standard";
                roomPrice = 5000;
                console.log("You chose standard room");
            }
            else if(roomRadio.value === "emerald"){
                roomType = "Emerald";
                roomPrice = 15000;
                console.log("You chose emerald room");
            }
            else if(roomRadio.value === "supreme"){
                roomType = "Supreme";
                roomPrice = 25000;
                console.log("You chose supreme room");
            }
            else if(roomRadio.value === "presidential"){
                roomType = "Presidential";
                roomPrice = 40000;
                console.log("You chose presidential room");
            }
        }
    })
})

selectNext.onclick = function () {
    // Always get fresh values when button is clicked
    let radioChecked = false;
    let selectedRadioValue = null;

    roomRadios.forEach(roomRadio => {
        if (roomRadio.checked) {
            radioChecked = true;
            selectedRadioValue = roomRadio.value;
        }
    });

    let myCheckout = checkout.value.trim() !== "";

    // Reset messages
    selectRoomFeedback.textContent = "";
    dateFeedback.textContent = "";

    // Validation checks
    if (!radioChecked) {
        selectRoomFeedback.textContent = "Please select a room type";
        selectRoomFeedback.style.color = "#fa3232";
    } else {
        selectRoomFeedback.textContent = "Room Type Valid";
        selectRoomFeedback.style.color = "#17f817";

        // Set roomType and roomPrice here since we now know which was selected
        switch (selectedRadioValue) {
            case "standard":
                roomType = "Standard";
                roomPrice = 5000;
                break;
            case "emerald":
                roomType = "Emerald";
                roomPrice = 15000;
                break;
            case "supreme":
                roomType = "Supreme";
                roomPrice = 25000;
                break;
            case "presidential":
                roomType = "Presidential";
                roomPrice = 40000;
                break;
        }
    }

    if (!myCheckout) {
        dateFeedback.textContent = "Enter a checkout date";
        dateFeedback.style.color = "#fa3232";
    } else {
        dateFeedback.textContent = "Checkout Date is Valid";
        dateFeedback.style.color = "#17f817";
    }

    // Show next section if all validations pass
    if (radioChecked && myCheckout) {
        selectNext.disabled = false;
        roomSelect.style.display = "none";
        roomFeedback.style.display = "block";
        roomFeedbackContent.textContent = `Your ${roomType} Room costs ₦${roomPrice} per night. Your bill at the expiration of ${no_of_days} days is ₦${no_of_days*roomPrice}`;
    } else {
        selectNext.disabled = true;
    }
};
roomRadios.forEach(roomRadio => {
    roomRadio.addEventListener("change", () => {
        // Show success message when a radio is selected
        selectRoomFeedback.textContent = "Room Type is Valid";
        selectRoomFeedback.style.color = "#17f817";
    });
});


//  FOURTH PAGE VALIDATION
const roomFeedbackCancel = document.getElementById("roomFeedbackCancel");
const roomFeedbackCont = document.getElementById("roomFeedbackCont");
roomFeedbackCancel.onclick = function(){
    console.log("cancelled");
    roomFeedback.style.display = "none";
    roomSelect.style.display = "block";

}
roomFeedbackCont.onclick = function(){
    roomFeedback.style.display = "none";
    countdownCtn.style.display = "block";
    startCountdown();
}
//  FIFTH PAGE VALIDATION
const countdownBack =  document.getElementById("countdown-back");
const homeMenu = document.getElementById("home-menu");

countdownBack.onclick = function(){
    countdownCtn.style.display = "none";
    roomFeedback.style.display = "block";
}

homeMenu.onclick = function(){
    countdownCtn.style.display = "none";
    hotelForm.style.display = "block";
    document.body.style.background = "linear-gradient(to right, black, #1d4ed8)";
    hotelForm.reset();
}
