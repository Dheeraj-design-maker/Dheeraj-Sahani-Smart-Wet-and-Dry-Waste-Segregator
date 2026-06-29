// Welcome Message
window.onload = function () {
    setTimeout(function () {
        alert("🌱 Welcome to Dheeraj Sahani's Official Website!");
    }, 1000);
};

// Scroll Animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screen = window.innerHeight / 1.2;

        if (position < screen) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Initial Style
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
