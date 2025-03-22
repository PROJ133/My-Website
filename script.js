document.addEventListener("DOMContentLoaded", function () {
    const menuButtons = document.querySelectorAll(".menu-bar button");
    menuButtons.forEach(button => {
        button.addEventListener("click", function () {
            const sectionId = this.getAttribute("data-section");
            toggleSection(sectionId);
        });
    });

    const initialSection = document.querySelector('.section');
    if (initialSection) {
        initialSection.style.display = "flex";
        initialSection.classList.add("active");
        resetSlides(initialSection.id);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.section-content');

    sections.forEach(section => {
        if (section.id === 'milk-tea') {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.target.getAttribute('data-target');

            sections.forEach(section => {
                section.classList.remove('active');
            });

            document.getElementById(target).classList.add('active');
        });
    });
});


function toggleSection(sectionId) {
    let section = document.getElementById(sectionId);
    if (!section) return;

    if (section.style.display === "flex") {
        section.style.display = "none";
        section.classList.remove('active');
    } else {
        document.querySelectorAll('.section').forEach(sec => {
            sec.style.display = "none";
            sec.classList.remove('active');
        });

        section.style.display = "flex";
        section.classList.add('active');
        resetSlides(sectionId); 
    }
}

function resetSlides(sectionId) {
    let slides = document.querySelectorAll(`#${sectionId} .mySlides`);
    if (slides.length > 0) {
        slides.forEach(slide => {
            slide.style.display = "none";
            slide.classList.remove("active-slide");
        });
        slides[0].style.display = "block";
        slides[0].classList.add("active-slide");
    }
}

function plusSlides(n) {
    let activeSection = document.querySelector('.section.active');
    if (!activeSection) return;

    let slides = activeSection.querySelectorAll(".mySlides");
    if (slides.length === 0) return;

    let currentSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active-slide"));
    slides[currentSlideIndex].classList.remove("active-slide");
    slides[currentSlideIndex].style.display = "none";

    let newIndex = (currentSlideIndex + n + slides.length) % slides.length;
    slides[newIndex].style.display = "block";
    slides[newIndex].classList.add("active-slide");
}

const orderForm = document.getElementById("orderForm");
if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const drinkType = document.getElementById("drinkType").value;
        const flavor = document.getElementById("flavor").value;
        const size = document.getElementById("size").value;
        const addons = Array.from(document.getElementById("addons").selectedOptions)
            .map(option => option.value)
            .join(", ");
        const quantity = document.getElementById("quantity").value;

        alert(`Order Summary:\n${quantity}x ${size} ${flavor} (${drinkType})\nAdd-Ons: ${addons || "None"}`);
    });
}
