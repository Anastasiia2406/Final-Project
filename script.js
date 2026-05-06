const viewport = document.querySelector('.portfolio__viewport');
const items = document.querySelectorAll('.portfolio__item');
const prevBtn = document.querySelector('.portfolio__arrow_prev');
const nextBtn = document.querySelector('.portfolio__arrow_next');

const currentNumber = document.querySelector('.portfolio__progress-current');
const totalNumber = document.querySelector('.portfolio__progress-total');
const progressFill = document.querySelector('.portfolio__progress-fill');

const cardsPerPage = 3;
const totalPages = Math.ceil(items.length / cardsPerPage);

let currentPage = 1;

totalNumber.textContent = String(totalPages).padStart(2, '0');

function updateProgress() {
    currentNumber.textContent = String(currentPage).padStart(2, '0');

    progressFill.style.width = `${(currentPage / totalPages) * 100}%`;
}

function scrollToPage() {
    const cardWidth = items[0].offsetWidth;
    const gap = 24;
    const scrollAmount = (cardWidth + gap) * cardsPerPage * (currentPage - 1);

    viewport.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });

    updateProgress();
}

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        scrollToPage();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        scrollToPage();
    }
});

updateProgress();


const partnersTrack = document.querySelector('.partners__track');
const partnersSlides = document.querySelectorAll('.partners__content');

const partnersPrev = document.querySelector('.partners__arrow_prev');
const partnersNext = document.querySelector('.partners__arrow_next');

const partnersCurrent = document.querySelector('.partners__progress-current');
const partnersTotal = document.querySelector('.partners__progress-total');
const partnersFill = document.querySelector('.partners__progress-fill');

let partnersIndex = 0;

function updatePartnersSlider() {
    partnersTrack.style.transform = `translateX(-${partnersIndex * 100}%)`;

    partnersCurrent.textContent = String(partnersIndex + 1).padStart(2, '0');
    partnersTotal.textContent = String(partnersSlides.length).padStart(2, '0');

    partnersFill.style.width = `${((partnersIndex + 1) / partnersSlides.length) * 100}%`;
}

partnersNext.addEventListener('click', () => {
    if (partnersIndex < partnersSlides.length - 1) {
        partnersIndex++;
        updatePartnersSlider();
    }
});

partnersPrev.addEventListener('click', () => {
    if (partnersIndex > 0) {
        partnersIndex--;
        updatePartnersSlider();
    }
});

updatePartnersSlider();


const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
    const question = item.querySelector('.faq__question');

    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});