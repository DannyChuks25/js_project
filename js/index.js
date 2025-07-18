// document.getElementById("menuBtn").addEventListener("click", (e) => {
//     let icon = e.target;
//     let list = document.querySelector("ul");

//     let content = document.querySelector(".content");
//     let overlay = document.querySelector(".overlay");
//     content.style.zIndex = -999;

//     icon.classList.toggle("fa-bars");
//     icon.classList.toggle("fa-times");

//     list.classList.toggle("top-[45px]");
//     list.classList.toggle("opacity-100");
// });


      function Menu(e){
            e.classList.toggle('fa-bars');
            e.classList.toggle('fa-times');
            
            let list = document.querySelector("nav ul");
            list.classList.toggle("top-[80px]");
            list.classList.toggle("opacity-100");
            list.classList.toggle("z-[10]");

            let overlay = document.getElementById("pageOverlay");
            // overlay.classList.toggle("hidden");
            let nav =  document.querySelector("nav");

            
        }


