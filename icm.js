const headerTitle = document.querySelector(".bottom h1");
const chapters = document.querySelectorAll(".chapter");

const headerHeight = document.querySelector(".header").offsetHeight;

window.addEventListener("scroll", () => {
    let currentChapter = "Capítulo I";

    chapters.forEach(chapter => {
        const rect = chapter.getBoundingClientRect();

        if (rect.top <= headerHeight) {
            currentChapter = chapter.dataset.chapter;
        }
    });

    headerTitle.textContent = currentChapter;
});

const menu = document.querySelector(".menu");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");

menu.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    menu.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
    menu.classList.toggle("active");
});

