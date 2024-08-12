// Toggle menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
};

// Scroll sections active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // Scroll top
    let scrollTop = document.querySelector(".scroll-top");
    scrollTop.classList.toggle("show", window.scrollY > 100);
};

// Scroll reveal
ScrollReveal().reveal(".home-content, .heading", {
    origin: "top",
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".home-img, .about-img", {
    origin: "top",
    distance: "80px",
    duration: 2000,
    delay: 400,
});

ScrollReveal().reveal(".home-sci", {
    origin: "left",
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".home-content h1", {
    origin: "left",
    distance: "80px",
    duration: 2000,
    delay: 500,
});
