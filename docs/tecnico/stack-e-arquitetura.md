# 🧱 Stack Tecnológica & Arquitetura

## 📦 Stack Escolhida

| Camada | Tecnologia | Justificativa |
|--------|------------|---------------|
| Backend | Node.js + Express | JavaScript fullstack, ecossistema maduro |
| Frontend | HTML/CSS/JS puro | Simplicidade para MVP, sem curva de framework |
| Banco de Dados | Firebase Firestore | NoSQL, tempo real, sem gerenciar infra |
| Arquivos | Firebase Storage | Upload direto, URLs públicas, CDN |
| Autenticação | Firebase Auth (Google OAuth) | Integrado ao ecossistema Firebase |
| Hospedagem Backend | VPS / Railway | Flexibilidade e controle |
| Hospedagem Frontend | Firebase Hosting / Vercel | CDN global, deploy simples |

---

## 🏗️ Estrutura do Projeto
```
orfe-platform/
├── frontend/
│ ├── public/
│ │ ├── css/
│ │ │ ├── main.css
│ │ │ └── admin.css
│ │ ├── js/
│ │ │ ├── auth.js
│ │ │ ├── posts.js
│ │ │ ├── eventos.js
│ │ │ └── admin.js
│ │ └── assets/
│ │ ├── icons/
│ │ └── images/
│ ├── index.html
│ └── admin.html
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ │ ├── firebase.js
│ │ │ └── env.js
│ │ ├── middleware/
│ │ │ ├── auth.js
│ │ │ └── tenant.js
│ │ ├── routes/
│ │ │ ├── auth.js
│ │ │ ├── igrejas.js
│ │ │ ├── posts.js
│ │ │ └── eventos.js
│ │ ├── services/
│ │ │ ├── igrejaService.js
│ │ │ ├── postService.js
│ │ │ └── eventoService.js
│ │ └── utils/
│ │ └── validators.js
│ ├── package.json
│ └── .env.example
│
└── docs/
└── ...
```
---

## 🔄 Fluxo de Dados

```
[Cliente] → Firebase Hosting → Firebase Auth (Google)
↓
[Backend Node.js]
↓
[Firebase Firestore + Storage]

```

---

## 🎯 Padrões de Código

- **Idioma:** Código em português (variáveis, funções, comentários)
- **Rotas:** RESTful (GET, POST, PUT, DELETE)
- **Autenticação:** Token JWT via Firebase Auth
- **Multi-tenant:** Middleware de tenant em todas as rotas
- **Validação:** Sanitização em todas as entradas

[📚 Voltar ao Índice](../README.md)