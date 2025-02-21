document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const closeBtn = document.querySelector(".close-btn");

    hamburgerBtn.addEventListener("click", function () {
        const isOpen = hamburgerMenu.style.display === "block";
        hamburgerMenu.style.display = isOpen ? "none" : "block";
        hamburgerBtn.innerHTML = isOpen ? "☰" : "✖"; 
    });

    closeBtn.addEventListener("click", function () {
        hamburgerMenu.style.display = "none";
        hamburgerBtn.innerHTML = "☰"; 
    });

    document.addEventListener("click", function (event) {
        if (!hamburgerMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
            hamburgerMenu.style.display = "none";
            hamburgerBtn.innerHTML = "☰"; 
        }
    });
});
