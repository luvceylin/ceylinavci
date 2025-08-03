// art-collage modal logic
const modal = document.getElementById("artModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

document.querySelectorAll(".collage-grid img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalTitle.textContent = img.dataset.title;
    modalDescription.textContent = img.dataset.description;
  });
});

function closeModal() {
  modal.style.display = "none";
}
