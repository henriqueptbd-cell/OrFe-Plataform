// assets/js/index.js
// Orquestra a montagem dos componentes específicos da index.html (landing pública).
// Roda só depois que o DOM carregou, garantindo que os #containers já existem.

document.addEventListener('DOMContentLoaded', () => {
    // --- Header ---
    // Monta a navbar dentro do container reservado no HTML
    document.getElementById('header-container').appendChild(OrFeComponents.Header());

    // --- Eventos em destaque ---
    // Dados mockados por enquanto — quando a API estiver pronta, isso vira um fetch()
    const eventos = [
        {
            image: 'https://images.unsplash.com/photo-1529070538674-1554f4b25642?auto=format&fit=crop&w=600&q=80',
            month: 'JUL', day: '20',
            church: 'Igreja Graça e Paz',
            title: 'Retiro Espiritual de Verão',
            location: 'Chácara Betel, Campinas',
            vagas: 47, vagasTotal: 80
        },
        {
            image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
            month: 'JUL', day: '27',
            church: 'Comunidade Nova Vida',
            title: 'Noite de Louvor — Geração',
            location: 'Av. Paulista, 1500 — SP',
            vagas: 132, vagasTotal: 210
        },
        {
            image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80',
            month: 'AGO', day: '3',
            church: 'Igreja Renovar',
            title: 'Workshop: Família e Fé',
            location: 'Rua das Flores, 230 — SP',
            vagas: 28, vagasTotal: 45
        }
    ];

    // Monta 1 EventCard pra cada item do array e insere no grid
    const eventsContainer = document.getElementById('events-container');
    eventos.forEach((evento) => {
        eventsContainer.appendChild(OrFeComponents.EventCard(evento));
    });

    // --- Footer ---
    document.getElementById('footer-container').appendChild(OrFeComponents.Footer());
});