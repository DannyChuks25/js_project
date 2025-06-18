document.getElementById("menuBtn").addEventListener("click", (e) => {
    let icon = e.target;
    let list = document.querySelector("ul");

    let content = document.querySelector(".content");
    let overlay = document.querySelector(".overlay");
    content.style.zIndex = -999;

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");

    list.classList.toggle("top-[45px]");
    list.classList.toggle("opacity-100");
});





