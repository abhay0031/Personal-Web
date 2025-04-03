document.addEventListener("DOMContentLoaded", function () {
    let clickMe = document.getElementById("clickMe");
    clickMe.addEventListener("click", function () {
        this.innerText = "Currently Pursuing B.E.(CSE) from Chitkara University";
    });

    let changeDate = document.getElementById("changeDate");
    let date = new Date();
    let formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    changeDate.innerText = `Date: ${formattedDate}`;

    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Hover effect on project cards
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s";
        });
        card.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
