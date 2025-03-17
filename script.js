document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact form submission (just a basic alert for now)
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your message has been sent!");
    });
});