document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".order-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.add("animate");
    });
  });

  document
    .querySelector(".reset")
    .addEventListener("click", () =>
      buttons.forEach((btn) => btn.classList.remove("animate"))
    );
});
