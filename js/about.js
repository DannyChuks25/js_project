//
//window.addEventListener("load", () => {
function aboutMe(){
        const profile = {
            name: "Chukwu Daniel",
            age: 21,
            DOB: 2004,
            complexion: "fair",
            hobbies: ["drawing", "discovery", "web surfing", "movies", 'games'],
            likes: {
                favouriteFood: "Rice and Chicken",
                favouriteAppetizer: "Goat Meat PepperSoup",
                favouriteColor: "Yellow, Brown, Red",
                favouriteMusiGenre: "Pop"
            },
            address: "Ologuneru",
            dwellingCapital: "Ibadan",
            originState: "Enugu",
            nationality: "Nigeria",
            occupation: "Full Stack Developer",
            knownStack: ["HTML", "CSS", "JavaScript", "Python"],
            highestEducation: "Undergraduate",
            school: "Federal University of Technology, Owerri",
            familyPosition: "first",
            height: "5'7 inches",
            weight: "75kg",
            size: "slim",
            hairColor: "black",
            skin: "oily",
            eyeColor: "black",
            qualites: ["dilligent", "hardworking", "enthutiastic in learning", "curious"],
            glasses: "a pair of glasses"
        }
        document.getElementById("about").innerHTML = `My name is ${profile.name}. I am ${profile.age} years old. I was born in the year ${profile.DOB}. I am ${profile.complexion} in complexion. I hail from ${profile.originState} state in ${profile.nationality}. I currently reside in ${profile.dwellingCapital}. I am an ${profile.highestEducation} from ${profile.school}. I am an aspiring ${profile.occupation} with proficiency in ${profile.knownStack}.<br>`
        
        const btn = document.getElementById("read");
        const dropdwown = document.getElementById("dropdown");

        dropdwown.innerHTML = `I am the ${profile.familyPosition} born in my family. I am ${profile.height} tall. I weigh ${profile.weight}. I am ${profile.size}. My hair color is ${profile.hairColor}. I have ${profile.skin} skin. I am ${profile.qualites}. I usually wear a ${profile.glasses}`;
        
        btn.addEventListener("click", () => {
            if(btn.innerHTML === "Read More"){
                btn.innerHTML = "Read Less";
            } else {
                btn.innerHTML = "Read More";
            }
            dropdwown.classList.toggle("hidden");
        })
         
        let about = document.getElementById("jsCode");
        let about2 = document.getElementById("jsCode2");
        let about3 = document.getElementById("jsCode3");
        const myCode = `function aboutMe() {<br>
            &nbsp; const profile = {<br>
                &nbsp;&nbsp;&nbsp;&nbsp;name: 'Chukwu Daniel',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;age: 21,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;DOB: 2004,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;complexion: 'fair',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;hobbies: ['drawing', 'discovery', 'web surfing', 'movies', &'games'],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;likes: {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;favouriteFood: 'Rice and Chicken',<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;favouriteAppetizer: 'Goat Meat PepperSoup',<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;favouriteColor: 'Yellow, Brown, Red',<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;favouriteMusiGenre: 'Pop'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
                &nbsp;&nbsp;&nbsp;&nbsp;address: 'Ologuneru',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;dwellingCapital: 'Ibadan',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;originState: 'Enugu',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;nationality: 'Nigeria',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;occupation: 'Full Stack Developer',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;knownStack: ['HTML', 'CSS', 'JavaScript', 'Python'],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;highestEducation: 'Undergraduate',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;school: 'Federal University of Technology, Owerri'<br>
                &nbsp;&nbsp;&nbsp;&nbsp;familyPosition: 'first',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;height: '5\'7 inches',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;weight: '75kg',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;size: 'slim',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;hairColor: 'black',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;skin: 'oily',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;eyeColor: 'black',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;qualites: ['dilligent', 'hardworking', 'enthutiastic in learning', 'curious'],<br>
                &nbsp;&nbsp;&nbsp;&nbsp;glasses: 'a pair of glasses'
                <br><br>
        `
        const myCode2 = "document.getElementById('about').innerHTML = 'My name is ${profile.name}. I am ${profile.age} years old. I was born in the year ${profile.DOB}. I am ${profile.complexion} in complexion. I hail from ${profile.originState} state in ${profile.nationality}. I currently reside in ${profile.dwellingCapital}. I am an ${profile.highestEducation} from ${profile.school}. I am an aspiring ${profile.occupation} with proficiency in &nbsp;&nbsp;&nbsp;&nbsp;${profile.knownStack}.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;";

        const myCode3 = `
        const btn = document.getElementById("read");
        const dropdwown = document.getElementById("dropdown");
        
        btn.addEventListener("click", () => {
            if(btn.innerHTML === "Read More"){
                btn.innerHTML = "Read Less";
            } else {
                btn.innerHTML = "Read More";
            }
            dropdwown.classList.toggle("hidden");
        })<br>}
        `;

        about.innerHTML = myCode;
        about2.innerHTML = myCode2;
        about3.innerHTML = myCode3;


}
