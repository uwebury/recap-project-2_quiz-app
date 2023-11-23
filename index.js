const bookmarkButton = document.querySelector(".bookmark");

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});
