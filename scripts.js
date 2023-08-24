/*Like and Dislike buttons script*/

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

/*Search functionality*/

  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const contentItems = document.querySelectorAll('.topic'); // Adjust the selector based on your content structure

  document.getElementById('searchButton').addEventListener('click', function () {
    const searchQuery = searchInput.value.toLowerCase();

    contentItems.forEach(item => {
      const itemTitle = item.querySelector('.topic-title').textContent.toLowerCase();
      const itemText = item.querySelector('p').textContent.toLowerCase();

      if (itemTitle.includes(searchQuery) || itemText.includes(searchQuery)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });

  // Prevent default form submission
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
  });
