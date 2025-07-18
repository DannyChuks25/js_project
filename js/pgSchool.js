const addCourse = document.getElementById("add");
const removeCourse = document.getElementById("remove");

const availableCourseList = document.getElementById("available");
const selectedCourseList = document.getElementById("selected");
const saveBtn = document.getElementById("save");

// allCourses.forEach(course, course.onclick = function(){
//     console.log(course.textContent);
// } )
let myCourse;
let courseToRemove;
let courseElement;
availableCourseList.addEventListener('click', e => {
    if(e.target.classList.contains('course')){
        console.log(e.target.textContent);
        myCourse = e.target.textContent;
        courseElement = e.target;
    }
})

const generateCourse = (myCourse) => {
    let item = `<li class="course">${myCourse}</li>`;
    selectedCourseList.innerHTML += item;
}

addCourse.onclick = function(){
    const allCourses = document.querySelectorAll(".available li");
    if(myCourse && courseElement){
        availableCourseList.removeChild(courseElement);
        generateCourse(myCourse);

        allCourses.forEach(course => {
            if(course.textContent == myCourse){
                course.remove();
            }
        });
        myCourse = null;
        courseElement = null;
    } else {
        alert("Please select a course to register.")
    }
}

selectedCourseList.addEventListener('click', e => {
    if(e.target.classList.contains("course")){
        courseToRemove = e.target;
        console.log(courseToRemove);
        
        const allSelected = document.querySelectorAll("#selected li");
        allSelected.forEach(li => li.classList.remove("highlight"));
        courseToRemove.classList.add("highlight");
    }
})

removeCourse.onclick = function(){
    if(courseToRemove){
        const courseText = courseToRemove.textContent;
        //courseToRemove.remove();
        selectedCourseList.removeChild(courseToRemove);

        const li = document.createElement('li');
        li.classList.add('course');
        li.textContent = courseText;
        availableCourseList.appendChild(li);

        courseToRemove = null;
    } 
    else{
        alert("PLease click a course from the selected list first.");
    }
}

saveBtn.onclick = function(){

}

