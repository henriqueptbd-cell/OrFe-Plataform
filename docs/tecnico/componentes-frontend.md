# Frontend Architecture - Componentes Reutilizáveis

## Visão Geral

Este documento define a estratégia de desenvolvimento do frontend do OrFe Platform, baseada em **componentização com JavaScript puro**.

O objetivo é maximizar a reutilização de código, reduzir duplicação e garantir consistência visual em todas as telas.

> **Atualizado:** ajustado para refletir 3 decisões tomadas com o time — (1) tudo vive dentro de `public/`, porque é a única pasta que o `express.static` do `server.js` serve pro navegador; (2) nomenclatura de pastas em português (`componentes/`), consistente com o resto do projeto; (3) CSS de componente usa os tokens de `global.css` (`var(--color-primary)` etc.), nunca hex direto.

---

## Princípios

1. **Tudo que se repete vira componente**
   - Botões, cards, modais, headers, footers, etc.

2. **Separação por responsabilidade**
   - HTML: estrutura
   - CSS: estilo
   - JS: comportamento

3. **Arquivo único para cada componente**
   - `componentes/` → arquivos `.js` e `.css`

---

## Estrutura de Pastas

```
frontend/
└── public/
    ├── index.html
    ├── assets/
    │   ├── css/
    │   │   ├── global.css              # tokens de marca (cores, radius, fonte) + reset
    │   │   └── componentes/            # CSS específico de cada componente
    │   │       ├── button.css
    │   │       └── card.css
    │   └── js/
    │       ├── index.js                # orquestra a montagem dos componentes na index.html
    │       ├── auth.js
    │       ├── firebase-client.js
    │       └── componentes/            # 1 arquivo por componente
    │           ├── Button.js
    │           ├── Card.js
    │           ├── Header.js
    │           └── Footer.js
    └── pages/
        ├── login.html
        └── admin.html
```

---

## Padrão de Componente

### JavaScript

```javascript
// assets/js/componentes/Button.js

function Button({ text, type = "primary", onClick, size = "md" }) {
  const button = document.createElement("button");
  button.className = `btn btn-${type} btn-${size}`;
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

// Exporta para uso global
window.OrFeComponents = window.OrFeComponents || {};
window.OrFeComponents.Button = Button;
```

### CSS

```css
/* assets/css/componentes/button.css */
/* Sempre usa os tokens do global.css — nunca hex direto aqui */

.btn {
  padding: 10px 20px;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-family: var(--font-base);
}

.btn-primary {
  background-color: var(--color-primary);
  color: #fff;
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
}

.btn-lg {
  padding: 14px 28px;
  font-size: 18px;
}
.btn-md {
  padding: 10px 20px;
  font-size: 16px;
}
.btn-sm {
  padding: 6px 12px;
  font-size: 14px;
}
```

## Como Usar em uma Página

### HTML

```html
<!-- pages/admin.html -->
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="../assets/css/global.css" />
    <link rel="stylesheet" href="../assets/css/componentes/button.css" />
  </head>
  <body>
    <div id="app">
      <div id="header-container"></div>
      <div id="content">
        <h1>Painel Admin</h1>
        <div id="button-container"></div>
      </div>
      <div id="footer-container"></div>
    </div>

    <script src="../assets/js/componentes/Button.js"></script>
    <script src="../assets/js/componentes/Header.js"></script>
    <script src="../assets/js/componentes/Footer.js"></script>

    <script>
      // Renderiza componentes
      const header = OrFeComponents.Header({ title: "OrFe" });
      document.getElementById("header-container").appendChild(header);

      const button = OrFeComponents.Button({
        text: "Salvar",
        type: "primary",
        onClick: () => alert("Salvo!"),
      });
      document.getElementById("button-container").appendChild(button);

      const footer = OrFeComponents.Footer();
      document.getElementById("footer-container").appendChild(footer);
    </script>
  </body>
</html>
```

## Convenções de Nomenclatura

| Tipo             | Padrão       | Exemplo                                   |
| ---------------- | ------------ | ----------------------------------------- |
| Pasta            | Português    | `componentes/` (não `components/`)        |
| Componente JS    | PascalCase   | `Button.js`, `Card.js`, `Modal.js`        |
| CSS Componente   | kebab-case   | `button.css`, `card.css`                  |
| Classe CSS       | BEM          | `.btn-primary`, `.card-header`            |
| IDs de container | `-container` | `#header-container`, `#content-container` |

---

## Regras de Decisão

| Situação                      | Decisão                                                       |
| ----------------------------- | ------------------------------------------------------------- |
| Uso em 1 página               | Pode ser específico da página (`assets/js/meu_componente.js`) |
| Uso em 2+ páginas             | Vai para `assets/js/componentes/`                             |
| Estilo global                 | Vai para `assets/css/global.css`                              |
| Estilo específico de 1 página | Pode ficar no `<style>` da página                             |
| Cor, radius, sombra, fonte    | Sempre `var(--token)` de `global.css` — nunca hex direto      |
| Classe reutilizável           | Vai para `assets/css/utilities/` (se/quando existir)          |

---

## Fluxo de Criação de Novo Componente

1. **Identificar repetição** — vejo o mesmo padrão em várias telas?
2. **Criar JS** — `assets/js/componentes/MeuComponente.js`
3. **Criar CSS** — `assets/css/componentes/meu-componente.css`, usando `var(--token)` do `global.css`
4. **Importar** — adicionar `<link>` e `<script>` no HTML onde for usado
5. **Usar** — chamar a função com os parâmetros

---

## Vantagens

- ✅ Código mais limpo e legível
- ✅ Manutenção centralizada (muda 1 arquivo, reflete em tudo)
- ✅ Reutilização real de lógica e estilo
- ✅ Facilita testes futuros
- ✅ Onboarding de novos devs mais rápido
