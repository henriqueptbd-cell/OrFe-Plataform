// assets/js/componentes/Button.js
// Componente de botão reutilizável.
// Suporta 3 variantes visuais (type) e 3 tamanhos (size), definidos em componentes/button.css.
// Se `href` for passado, renderiza como <a> estilizado (navegação);
// senão, renderiza como <button> real (ação via onClick).

function Button({ text, type = 'primary', size = 'md', onClick = null, href = null }) {
    // Escolhe a tag do elemento: <a> se for navegação, <button> se for ação JS
    const el = document.createElement(href ? 'a' : 'button');

    // Classe base ".btn" + variante ".btn-{type}" + tamanho ".btn-{size}" — estilos em button.css
    el.className = `btn btn-${type} btn-${size}`;

    // Texto visível dentro do botão
    el.textContent = text;

    if (href) {
        // Caso seja link: define o destino da navegação
        el.href = href;
    } else if (onClick) {
        // Caso seja botão de ação: registra o callback de clique
        el.addEventListener('click', onClick);
    }

    // Retorna o elemento DOM pronto pra ser inserido em qualquer container
    return el;
}

// Registra o componente no namespace global OrFeComponents,
// pra poder ser chamado em qualquer página como OrFeComponents.Button({...})
window.OrFeComponents = window.OrFeComponents || {};
window.OrFeComponents.Button = Button;