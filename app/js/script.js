const ratingForm = document.querySelector('.rating');
const ratingInputs = document.querySelectorAll('.rating__input')
const ratingSubmit = document.querySelector('#rating-submit');
const ratingTextSubmit = document.querySelector('#rating-text');

const ratingCard = document.querySelector('.card__rating');
const thanksCard = document.querySelector('.card__thanks')

// Listener for Form 
const formListener = () => {
  // If rating is clicked change state of submit button to active
  ratingInputs.forEach(input => {
    input.addEventListener('change', () => {
      ratingSubmit.disabled = false;
    });
  });

  ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get value from rating and display it to rating text
    const formData = new FormData(ratingForm);
    ratingTextSubmit.textContent = formData.get('rating');
  });
}

// Displaying Thanks State 
const submitButton = () => {
  ratingSubmit.addEventListener('click', () => {
    ratingCard.classList.add('hidden');
    thanksCard.classList.add('active');
  })
}


formListener();
submitButton();