const btnHome = document.getElementById('btn-home');
const btnPortfolio = document.getElementById('btn-portfolio');

const homePage = document.getElementById('home-page');
const portfolioPage = document.getElementById('portfolio-page');

btnHome.addEventListener('click', () => {
  homePage.classList.add('active');
  portfolioPage.classList.remove('active');
});

btnPortfolio.addEventListener('click', () => {
  portfolioPage.classList.add('active');
  homePage.classList.remove('active');
});

