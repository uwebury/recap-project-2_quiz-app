const bookmarkButton = document.querySelector(".bookmark");

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector(".card__button-answer");
const answer = document.querySelector("p");

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
});
