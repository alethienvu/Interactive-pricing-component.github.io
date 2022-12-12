const progress = document.querySelector(".progress");

progress.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, var(--soft-cyan) 0%, var(--soft-cyan) ${value}%, var(--light-grayish-blue) ${value}%, var(--light-grayish-blue) 100%)`;
});
