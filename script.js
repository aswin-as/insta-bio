const popup = document.getElementById("blogPopup");
const closePopup = document.getElementById("closePopup");

// Show popup automatically after 2 seconds
window.addEventListener("load", () => {
  // Only show once ever using localStorage
  if (!localStorage.getItem("popupShown")) {
    setTimeout(() => {
      popup.style.display = "flex";
      localStorage.setItem("popupShown", "true");
    }, 2000);
  }
});

// Close popup when clicking the "Maybe Later" button
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close popup when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});