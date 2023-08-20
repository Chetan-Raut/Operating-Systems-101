document.addEventListener("DOMContentLoaded", function () {
  const likeButton = document.getElementById("like-button");
  const dislikeButton = document.getElementById("dislike-button");
  const popup = document.getElementById("popup");
  let liked = false;
  let disliked = false;

  likeButton.addEventListener("click", function () {
    if (!liked) {
      liked = true;
      likeButton.classList.add("clicked");
      dislikeButton.disabled = true; // Disable the dislike button
      popup.style.display = "block";
      setTimeout(function () {
        popup.style.display = "none";
      }, 3000);
    }
  });

  dislikeButton.addEventListener("click", function () {
    if (!disliked) {
      disliked = true;
      dislikeButton.classList.add("clicked");
      likeButton.disabled = true; // Disable the like button
      popup.style.display = "block";
      setTimeout(function () {
        popup.style.display = "none";
      }, 3000);
    }
  });
});