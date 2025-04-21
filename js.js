// Função para inicializar o AOS
function aosInit() {
    AOS.init({
        duration: 600,   // Duração da animação
        easing: 'ease-in-out',  // Tipo de easing
        once: true,  // A animação ocorre uma vez, mesmo ao rolar a página
        mirror: false  // Impede que a animação aconteça ao rolar para cima
    });
}

// Executa a função de inicialização quando o conteúdo estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    aosInit();
});
