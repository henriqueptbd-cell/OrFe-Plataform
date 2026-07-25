// assets/js/componentes/Footer.js
// Rodapé padrão do site — mesmo conteúdo em toda página pública.

function Footer() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';

    // Ano dinâmico, pra não precisar atualizar o HTML todo ano
    const anoAtual = new Date().getFullYear();

    footer.innerHTML = `
    <div class="site-footer__brand">
      <span class="site-footer__brand-name">OrFe</span>
      <span class="site-footer__brand-tagline">© ${anoAtual} OrFe — Descubra e participe de eventos de igrejas</span>
    </div>
    <div class="site-footer__links">
      <a href="#">Termos</a>
      <a href="#">Privacidade</a>
      <a href="#" class="site-footer__link-highlight">Cadastrar minha igreja</a>
    </div>
  `;

    return footer;
}

window.OrFeComponents = window.OrFeComponents || {};
window.OrFeComponents.Footer = Footer;