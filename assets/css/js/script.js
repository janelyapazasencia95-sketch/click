document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".carousel-card");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const prevBtn = document.querySelector(".carousel-btn.prev");

    if (!track || !nextBtn || !prevBtn) return;

    let index = 0;
    const cardWidth = cards[0].offsetWidth + 40; // ancho + gap

    function updateCarousel() {
        track.style.transform = `translateX(-${index * cardWidth}px)`;

        cards.forEach(card => card.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        cards[index].classList.add("active");
        dots[index].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % cards.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i;
            updateCarousel();
        });
    });

});
