document.getElementById("btn-home").addEventListener("click", () => {
  document.getElementById("home-page").classList.add("active");
  document.getElementById("portfolio-page").classList.remove("active");
});

document.getElementById("btn-portfolio").addEventListener("click", () => {
  document.getElementById("home-page").classList.remove("active");
  document.getElementById("portfolio-page").classList.add("active");
});
