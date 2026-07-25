// assets/js/componentes/EventCard.js
// Card de evento — usado na seção "Eventos em destaque" do index.html.
// Recebe os dados do evento e monta o card completo (imagem, data, igreja, título, local, vagas, botão).
// Depende de OrFeComponents.Button já estar carregado.

function EventCard({ image, month, day, church, title, location, vagas, vagasTotal }) {
    // Elemento raiz do card
    const card = document.createElement('div');
    card.className = 'event-card';

    // Estrutura visual do card — os dados variáveis (${...}) vêm dos parâmetros da função
    card.innerHTML = `
    <div class="event-card__image-wrap">
      <img src="${image}" alt="${title}" class="event-card__image">
      <div class="event-card__date-badge">
        <span class="event-card__date-month">${month}</span>
        <span class="event-card__date-day">${day}</span>
      </div>
    </div>
    <div class="event-card__body">
      <div>
        <span class="event-card__church">${church}</span>
        <h3 class="event-card__title">${title}</h3>
        <p class="event-card__location">📍 ${location}</p>
      </div>
      <div class="event-card__footer">
        <span class="event-card__vagas">🔥 ${vagas} / ${vagasTotal} vagas</span>
        <div class="event-card__btn-container"></div>
      </div>
    </div>
  `;

    // O botão "Participar" é montado via OrFeComponents.Button, não hardcoded no innerHTML,
    // pra reaproveitar o mesmo componente/CSS de botão do resto do site.
    const btnContainer = card.querySelector('.event-card__btn-container');
    btnContainer.appendChild(OrFeComponents.Button({ text: 'Participar', type: 'secondary', size: 'sm' }));

    return card;
}

window.OrFeComponents = window.OrFeComponents || {};
window.OrFeComponents.EventCard = EventCard;