let days = ["Sunday", "Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday" ];

let dayIndex = new Date().getDay();  // Gets day index
console.log(`Today is ${dayIndex}`);

let today = days[dayIndex];   // Gets specific day based on index value
console.log(today);

// Sun: Church, Mon-Thurs: Work, Fri: Mosque, Sat: Party
let dayEvent;
if(dayIndex == 0){
    dayEvent = 'Church';
}
if(dayIndex >= 1 && dayIndex <= 4){
    dayEvent = 'Work';
}
if(dayIndex== 5){
    dayEvent = 'Mosque';
}
if(dayIndex == 6){
    dayEvent = 'Party';
}

const daily = {
    mdn: {
        dayT : 'pm',
        night : 'am'
    }
}

// Get hour of the day to determine morning, afternoon, evening or night
let hour = new Date().getHours();
//console.log(`The hour is ${hour}`);

let minutes = new Date().getMinutes();
// console.log(`The minute is ${minutes}`);
let mdn;
let hourT;

function am(){
    if(hour < 12){
        //hourT = (hour + 12);
        mdn = "am";
    }
}
function pm(){
    if(hour > 12){
        hourT = hour - 12;
        mdn = "pm";
    } else if(hour == 12){
        mdn = "pm";
    }
}
(hour < 12) ? am() : pm();
let mdn_content;
if(hour > 12){
    mdn_content = `${hourT}:${minutes < 10 ? '0' + minutes : minutes}${mdn}`;
} else{
    mdn_content = `${hour}:${minutes < 10 ? '0' + minutes : minutes}${mdn}`;
}

console.log(`The hour is ${hour}`);
console.log(hour);

let time_of_day;

if(hour >=1 && hour <= 11){
    time_of_day = "morning";
} 
else if(hour >=12 && hour <= 15){
    time_of_day = "afternoon";
}
else if(hour >=16 && hour <= 19){
    time_of_day = "evening";
}
else if(hour >=20 && hour <= 24){
    time_of_day = "night";
}



document.getElementById("heading-sm").innerHTML = `Good ${time_of_day}, Daniel`;
document.getElementById("heading-lg").innerHTML = `Today is ${today}. It is ${mdn_content}. Get up and go to ${dayEvent}.`;