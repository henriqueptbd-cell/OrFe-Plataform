# 🏛️ OrFe - Plataforma de Gestão para Igrejas

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Versão](https://img.shields.io/badge/versão-1.0%20MVP-blue)

Plataforma web multi-tenant para igrejas criarem sua presença digital com página pública personalizável, sistema de eventos com inscrições e interação social entre membros.

---

## 🎯 O que é o OrFe?

Uma plataforma que permite que igrejas tenham:
- 🌐 **Página pública personalizável** - Feed de notícias, eventos, informações
- 🎫 **Sistema de eventos** - Formulários dinâmicos, inscrições, exportação
- 💬 **Interação social** - Posts, comentários, curtidas, feed de atividades
- 🔐 **Painel administrativo** - Dashboard, gestão de membros, moderação

**Diferencial:** Arquitetura multi-tenant desde o dia 1, permitindo que o sistema atenda múltiplas igrejas com dados completamente isolados.

---

## 🚀 MVP - Cliente Piloto

**Igreja:** Igreja da esposa  
**Objetivo:** Validar com usuários reais antes de escalar

---

## 🧱 Stack

| Camada | Tecnologia |
|--------|------------|
| Frontend | HTML/CSS/JS puro |
| Backend | Node.js + Express |
| Banco | Firebase Firestore |
| Arquivos | Firebase Storage |
| Auth | Firebase Auth (Google OAuth) |

---

## 📂 Estrutura do Projeto
```
orfe-platform/
├── frontend/ # Interface do usuário
├── backend/ # API REST
├── docs/ # Documentação completa
│ ├── produto/ # Visão, MVP, roadmap
│ ├── scrum/ # Backlog e sprints
│ ├── tecnico/ # Stack, banco, segurança
│ └── funcionalidades/ # Detalhamento por módulo
└── README.md
```

---

## ⚡ Início Rápido

```bash
# Clone o repositório
git clone [url]

# Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Frontend
cd frontend
# Servir arquivos estáticos
npx serve public

````

---
## 📋 Funcionalidades (MVP)

### 🌐 Página Pública
- Feed de notícias
- Lista de eventos
- Personalização de cores, logo e capa

### 🔐 Painel Admin
- Dashboard com métricas
- CRUD de posts e eventos
- Formulários dinâmicos
- Gestão de inscritos com exportação CSV
- Moderação de comentários
- Gerenciar membros

### 👤 Área do Membro
- Perfil global com foto e bio
- Inscrever-se em eventos
- Comentar e curtir posts
- Feed de atividades
- Histórico de inscrições

### 🏢 Multi-tenant
- Isolamento total por igreja
- Usuário pode participar de múltiplas igrejas
- Seletor de igreja no header

---

## 📚 Documentação

A documentação completa está em [/docs](./docs/README.md)

| Seção | Conteúdo |
|-------|----------|
| [Produto](./docs/produto/) | Visão, MVP, roadmap |
| [Scrum](./docs/scrum/) | Backlog, sprints |
| [Técnico](./docs/tecnico/) | Stack, banco de dados, segurança |
| [Funcionalidades](./docs/funcionalidades/) | Detalhamento por módulo |

---

## 📅 Status Atual

- [x] Documentação do produto
- [x] Estrutura do banco de dados
- [x] Planejamento das sprints
- [ ] Sprint 0 - Setup & Fundação
- [ ] Sprint 1 - Painel Admin
- [ ] Sprint 2 - Área Pública
- [ ] Sprint 3 - Feed Social
- [ ] Sprint 4 - Polimento e Validação

---

## 👥 Perfis de Acesso

| Perfil | Acesso |
|--------|--------|
| Super Admin | Todas as igrejas, todos os dados |
| Admin | CRUD completo na sua igreja |
| Membro | Interage na igreja: eventos, comentários, curtidas |
| Visitante | Página pública apenas |

---

## 📝 Licença

Projeto privado - desenvolvimento focado no MVP com cliente piloto.