const productCards = document.querySelectorAll(".product-card");
const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

productCards.forEach(card => {
  const details = card.querySelector(".view-details");
  details.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = card.getAttribute("data-image");
    modalTitle.textContent = card.getAttribute("data-title");
    modalDescription.textContent = card.getAttribute("data-description");
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});