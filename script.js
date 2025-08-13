document.addEventListener("DOMContentLoaded", () => {
  const clickSound = new Audio("assets/click.mp3");

  function playClickSound(e) {
    e.preventDefault();
    clickSound.currentTime = 0;
    clickSound.play().catch(err => console.warn("Audio play blocked:", err));

    const link = e.currentTarget;
    setTimeout(() => {
      window.location.href = link.href;
    }, 350);
  }

  const portfolioButton = document.querySelector(".portfolio-button");
  if (portfolioButton) {
    portfolioButton.addEventListener("click", playClickSound);
  }

  const envelopeLinks = document.querySelectorAll(".envelope-wrapper");
  envelopeLinks.forEach(link => {
    link.addEventListener("click", playClickSound);
  });

  const allLinks = document.querySelectorAll("a");
  allLinks.forEach(link => {
    if (!link.classList.contains("envelope-wrapper") && !link.classList.contains("portfolio-button")) {
      link.addEventListener("click", playClickSound);
    }
  });
});
