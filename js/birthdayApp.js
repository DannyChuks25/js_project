let reminderForm = document.getElementById("reminderForm");
let userName = document.getElementById("Name");
let userDOB = document.getElementById("DOB");
let user_name;
let user_DOB;
let edit_Icon  = document.querySelector(".fa-pencil");
let del_Icon  = document.querySelector(".fa-trash");
let nameFeedback = document.getElementById("nameFeedback");
let DOBFeedback= document.getElementById("DOBFeedback");
let nameRegex = /^[A-Z][a-zA-Z]*[ -']?[a-zA-Z]*([A-Z][a-zA-Z]*[ -']?[a-zA-Z]*){1,2}$/;
let dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;
let currentEditRow = null;
let countDown =  document.getElementById("countdown");

reminderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    user_name = document.getElementById("Name").value;
    user_DOB = document.getElementById("DOB").value;
    // let table = document.querySelector("table");
    console.log(user_name);
    console.log(user_DOB); 

    if(user_name === ""){
        nameFeedback.textContent = "Please enter a name";
        nameFeedback.style.color = "red";
        Name.focus();
        return;
    }
    if(user_DOB === ""){
        DOBFeedback.textContent = "Please enter a date of birth";
        DOBFeedback.style.color = "red";
        DOB.focus();
        return;
    }
    if(nameRegex.test(user_name) && dateRegex.test(user_DOB)){
        console.log("Form Submitted Successfully");
        reminderForm.reset();
        nameFeedback.textContent = "";
        DOBFeedback.textContent = "";
        Name.focus();
        DOB.focus();
    }

    function getNextBirthday(dob) {
        let today = new Date();
        let [month, day, year] = dob.split('/').map(Number);
        
        let birthdayThisYear = new Date(today.getFullYear(), month - 1, day);
        console.log(`Today: ${today}`);
        
        // If birthday has passed this year, set to next year
        if (birthdayThisYear < today) {
            birthdayThisYear.setFullYear(today.getFullYear() + 1);
        }
        return birthdayThisYear;
    }

    console.log(getNextBirthday(user_DOB));

    function countdown(dateOfBirth, countdownCell){
        const nextBirthday = getNextBirthday(dateOfBirth).getTime();
        // const birthdayCountDate = new Date(dateOfBirth).getTime();
        const countInterval = setInterval(() => {
            let now = new Date().getTime();
            let distance = nextBirthday - now;
            // let todayDate = new Date().getTime();
            // let distance = birthdayCountDate - todayDate;

            if (distance < 0) {
                countdownCell.textContent = `Happy Birtday, ${user_name}. Wish you abundant success, long life and prosperity.`;
                clearInterval(countInterval);
                return;
            }

            let days = Math.floor(distance / (1000*60*60*24));
            let hrs = Math.floor(distance % (1000*60*60*24)/(1000*60*60));
            let mins = Math.floor(distance % (1000*60*60)/(1000*60));
            let secs = Math.floor(distance % (1000*60)/1000);

            days = (days < 10) ? "0" + days : days;
            hrs = (hrs < 10) ? "0" + hrs : hrs;
            mins = (mins < 10) ? "0" + mins : mins;
            secs = (secs < 10) ? "0" + secs : secs;

            countdownCell.textContent = `${days}D:${hrs}H:${mins}M:${secs}S`;
        }, 1000);
    }
    if(currentEditRow){
        currentEditRow.querySelector(".name").textContent =  user_name;
        currentEditRow.querySelector(".dob").textContent = user_DOB;
        currentEditRow.classList.remove("disabled");
        currentEditRow = null;
    }
    else{
    let formTable = document.querySelector("table tbody");
    let tableRow = document.createElement("tr");
    let actionTableData = document.createElement("td");
    let nameTableData = document.createElement("td");
    let nextBddayTableData = document.createElement("td");
    let countdownTableData = document.createElement("td");
    let edit = document.createElement("i");
    let dlt = document.createElement("i");
    edit.className = "fa fa-pencil";
    edit.title = "Edit";
    dlt.className = "fa fa-trash";
    dlt.title = "Delete";

    nameTableData.classList.add("name");
    nextBddayTableData.classList.add("dob");
    actionTableData.append(edit,dlt);
    actionTableData.classList.add("action");
    countdownTableData.classList.add("count");
    tableRow.append(actionTableData, nameTableData, nextBddayTableData, countdownTableData);

    actionTableData.append(edit,dlt);
    nameTableData.textContent = user_name;
    nextBddayTableData.textContent = user_DOB;
    
    //countdownTableData.textContent = countDown();
    formTable.appendChild(tableRow);

    countdown(user_DOB, countdownTableData);

    
    // countdown();
    }
});
userName.addEventListener("keyup", () => {
    user_name = document.getElementById("Name").value;
    user_DOB = document.getElementById("DOB").value;
    if(nameRegex.test(user_name)){
        nameFeedback.textContent = "Name is Valid";
        nameFeedback.style.color = "green";
    }
    else{
        nameFeedback.textContent = "Invalid Name Format";
        nameFeedback.style.color = "red";
    }
});
userDOB.addEventListener("keyup", () => {
    user_name = document.getElementById("Name").value;
    user_DOB = document.getElementById("DOB").value;
    if(dateRegex.test(user_DOB)){
        DOBFeedback.textContent = "Date of Birth is Valid";
        DOBFeedback.style.color = "green";
    }
    else{
        DOBFeedback.textContent = "Invalid Date Format";
        DOBFeedback.style.color = "red";
    }
})

document.querySelector("table tbody").addEventListener("click", function(e){
    if(e.target.classList.contains("fa-trash")){
        e.target.closest('tr').remove();
    }
    else if(e.target.classList.contains("fa-pencil")){
        let row = e.target.closest('tr');
        let name = row.querySelector(".name").textContent;
        let dob = row.querySelector(".dob").textContent;

        currentEditRow = row;
        row.classList.add("disabled");
    }
});