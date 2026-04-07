// Efeito de Rolagem Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Ajuste para o header fixo
                behavior: 'smooth'
            });
        }
    });
});

// Animação de Fade-In ao rolar
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
            el.classList.add('active');
        }
    });
};

// Executa ao carregar e ao rolar
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
