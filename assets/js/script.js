document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("open");
});

document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

