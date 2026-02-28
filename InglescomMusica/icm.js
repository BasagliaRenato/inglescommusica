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