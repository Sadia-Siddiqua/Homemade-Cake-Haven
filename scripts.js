// JavaScript for Cake Decoration Games

// Add hover animation for gallery images
const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach((img) => {
    img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.2)";
        img.style.transition = "transform 0.5s ease";
    });
    img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
    });
});

// Add smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Add button click animations
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("mousedown", () => {
        button.style.transform = "scale(0.9)";
        button.style.transition = "transform 0.1s ease";
    });
    button.addEventListener("mouseup", () => {
        button.style.transform = "scale(1)";
    });
});

// Add dynamic animations for testimonials
const testimonials = document.querySelectorAll(".testimonials blockquote");
testimonials.forEach((testimonial, index) => {
    setTimeout(() => {
        testimonial.style.opacity = "1";
        testimonial.style.transform = "translateY(0)";
        testimonial.style.transition = "opacity 1s ease, transform 1s ease";
    }, index * 1000); // Stagger animations
});

// Apply initial styles for testimonials
testimonials.forEach((testimonial) => {
    testimonial.style.opacity = "0";
    testimonial.style.transform = "translateY(20px)";
});

// Add a sparkle effect to the header
const header = document.querySelector("header");
header.addEventListener("mouseover", () => {
    header.style.boxShadow = "0 0 15px 5px #FFD700";
    header.style.transition = "box-shadow 0.5s ease";
});
header.addEventListener("mouseout", () => {
    header.style.boxShadow = "none";
});