const ANIMATION = () => {
  const messages = document.querySelectorAll("#message-container p");
  let index = 0;
  // Target the section by its custom attribute name and it value
  const theSeconds = document
    .querySelector("[second-animation]")
    .getAttribute("second-animation");

  function showMessage(i) {
    messages.forEach((msg, j) => {
      if (i === j) {
        msg.classList.remove("opacity-0", "translate-y-6");
        msg.classList.add("opacity-100", "translate-y-0");
      } else {
        msg.classList.add("opacity-0", "translate-y-6");
        msg.classList.remove("opacity-100", "translate-y-0");
      }
    });
  }

  // Show the first message immediately
  showMessage(index);

  // Rotate every 5 seconds
  setInterval(() => {
    index = (index + 1) % messages.length;
    showMessage(index);
  }, theSeconds);
};

ANIMATION();
