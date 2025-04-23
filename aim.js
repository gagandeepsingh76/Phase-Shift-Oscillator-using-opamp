
const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.getAttribute('data-value'));
        updateStars(selectedRating);
    });
});

function updateStars(rating) {
    stars.forEach(star => {
        const value = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('selected', value <= rating);
    });
}

function openModal() {
    document.getElementById("rateModal").style.display = "block";
}

function closeModal() {
    document.getElementById("rateModal").style.display = "none";
    selectedRating = 0;
    updateStars(0);
}

function submitRating() {
    if (selectedRating > 0) {
        alert(`You rated ${selectedRating} star(s)!`);
        closeModal();
    } else {
        alert("Please select a rating before submitting.");
    }
}
