let currentIndex = 0;
const reviews = document.querySelectorAll(".review");

function changeSizeReview() {
  reviews.forEach((review) => review.classList.remove("review-big"));
  reviews[currentIndex].classList.add("review-big");
  currentIndex = (currentIndex + 1) % reviews.length;
}

changeSizeReview();

setInterval(changeSizeReview, 4500);
