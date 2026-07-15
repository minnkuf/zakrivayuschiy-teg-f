const likeButtons = document.querySelectorAll('.card__icon-button');

likeButtons.forEach((button) => {
  const icon = button.querySelector('.like-icon');
  const text = button.nextElementSibling?.querySelector('.button__text');

  button.addEventListener('click', () => {
    icon.classList.toggle('is-liked');

    if (text) {
      text.textContent = icon.classList.contains('is-liked') ? 'Unlike' : 'Like';
    }
  });
});

