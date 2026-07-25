// assets/js/componentes/Header.js
// Navbar da aplicação: logo, links de navegação e ações de usuário (Entrar / Criar perfil).
// Depende de OrFeComponents.Button já estar carregado (via <script> antes deste arquivo).

function Header() {
    // Cria o elemento <header> que envolve toda a navbar
    const header = document.createElement('header');
    header.className = 'site-header';

    // Estrutura fixa (logo + nav) via innerHTML — não muda de página pra página
    header.innerHTML = `
    <div class="site-header__left">
      <div class="site-header__logo">
        <div class="site-header__logo-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span>OrFe</span>
      </div>
      <nav class="site-header__nav">
        <a href="#">Eventos</a>
        <a href="#">Igrejas</a>
      </nav>
    </div>
    <div class="site-header__actions" id="header-actions"></div>
  `;

    // As ações (Entrar / Criar perfil) são botões de verdade, montados via OrFeComponents.Button
    // pra reaproveitar o mesmo componente e não duplicar markup de botão aqui.
    const actions = header.querySelector('#header-actions');
    const loginLink = OrFeComponents.Button({ text: 'Entrar', type: 'ghost', size: 'sm', href: '/login' });
    const signupBtn = OrFeComponents.Button({ text: 'Criar perfil grátis', type: 'primary', size: 'md', href: '#' });
    actions.appendChild(loginLink);
    actions.appendChild(signupBtn);

    return header;
}

window.OrFeComponents = window.OrFeComponents || {};
window.OrFeComponents.Header = Header;