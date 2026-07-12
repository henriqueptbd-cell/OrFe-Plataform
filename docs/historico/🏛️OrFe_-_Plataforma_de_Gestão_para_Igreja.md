# 🏛️ OrFe - Plataforma de Gestão para Igrejas

## 📌 Visão do Produto

Uma plataforma web que permite que igrejas tenham sua própria presença digital com:
- Página pública personalizável
- Sistema de eventos com inscrições
- Mural de notícias e interação social
- Painel administrativo completo

**Diferencial:** Arquitetura multi-tenant desde o dia 1, permitindo que o sistema atenda múltiplas igrejas com dados completamente isolados.

## 🎯 Público-alvo inicial

Igreja da minha esposa (foco total no MVP), mas com estrutura pronta para escalar.

## 🧱 Stack Tecnológica

- **Backend:** Node.js + Express
- **Frontend:** JS puro (HTML/CSS)
- **Banco de Dados:** Firebase Firestore (com opção de Neon/PostgreSQL para dados mais complexos)
- **Armazenamento de Arquivos:** Firebase Storage
- **Autenticação:** Firebase Auth (Google OAuth)
- **Infra:** Firebase Hosting / Vercel (para frontend estático) / VPS (para backend Node.js)

## 🗄️ Estrutura de Dados (Core)

Para o armazenamento de fotos e outros arquivos, utilizaremos o **Firebase Storage**. Ele permite o upload direto do cliente e fornece URLs públicas para acesso. No banco de dados (Firestore ou PostgreSQL), armazenaremos apenas esses URLs.

### Limites do Firebase (Plano Spark - Gratuito):
- **Cloud Storage:** 5 GB de armazenamento total. Para fotos otimizadas (ex: 500KB cada), isso permite aproximadamente 10.000 imagens.
- **Firestore:** 1 GB de dados armazenados. Suficiente para milhões de registros textuais.
- **Transferência de Dados:** 1 GB de download de arquivos por dia. Este é o limite mais provável de ser atingido em casos de alto tráfego, mas é adequado para um MVP e uso inicial.

```sql
-- Tabela principal de tenants
igrejas (id, nome, descricao, cor_primaria, logo_url, capa_url, slug)

-- Usuários com vínculo à igreja
usuarios (id, nome, email, google_id, igreja_id, tipo, ativo)

-- Eventos com inscrição
eventos (id, igreja_id, titulo, descricao, data, horario, imagem, status)

-- Campos dinâmicos por evento
campos_evento (id, evento_id, label, tipo, obrigatorio, opcoes)

-- Inscrições com dados flexíveis
inscricoes (id, evento_id, usuario_id, dados_json, data_inscricao)

-- Posts/Artigos
posts (id, igreja_id, autor_id, titulo, conteudo, imagem, created_at)

-- Comentários
comentarios (id, post_id, usuario_id, conteudo, created_at)
```

## 📋 MVP - Funcionalidades (v1.0)

### 🔓 Página Pública

- Capa e logo editáveis via painel admin
- Feed de notícias com posts
- Lista de eventos (ativos e passados)

### 🔐 Painel Administrativo

- Login com Google
- Dashboard com métricas básicas
- CRUD de posts (criar, editar, excluir, agendar)
- CRUD de eventos com formulário dinâmico
- Visualização de inscrições por evento
- Exportar inscrições (CSV/Excel)
- Moderar comentários
- Gerenciar membros (aprovar/banir)
- Personalizar página da igreja

### 👥 Área do Membro

- Login com Google
- Ver eventos disponíveis
- Inscrever-se em eventos (preencher formulário)
- Comentar em posts
- Ver minhas inscrições

### 🚀 Arquitetura Multi-tenant

```
Cada igreja = tenant independente
- Dados separados por igreja_id
- Isolamento total entre tenants
- Escalável: adicionar nova igreja = criar novo registro
```

## 📅 Roadmap (Sprints Iniciais)

### Sprint 0 - Setup & Fundação

- Configurar projeto base
- Modelagem do banco de dados
- Autenticação Google OAuth
- Estrutura multi-tenant básica

### Sprint 1 - Painel Administrativo

- CRUD de igreja (configurações)
- CRUD de posts
- CRUD de eventos

### Sprint 2 - Área Pública

- Página pública da igreja
- Feed de posts
- Lista de eventos

### Sprint 3 - Inscrições

- Formulário dinâmico por evento
- Sistema de inscrição
- Painel de visualização de inscritos
- Exportação

### Sprint 4 - Interação

- Comentários em posts
- Área do membro (minhas inscrições)
- Moderação de comentários

### Sprint 5 - Polimento

- UX/UI refinado
- Mobile-first
- Testes e validação com a igreja da esposa

## 🏗️ Como Executar (Definir depois)

```
# Clone o repositório
git clone [url]

# Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Frontend
cd frontend
npm install
npm start
```

## 📝 Contribuição

Projeto privado - desenvolvimento focado na igreja da minha esposa como cliente piloto.

## 🎨 Próximos Passos Imediatos

1. Escolher Stack - Definir tecnologias
2. Criar estrutura de projeto - Organizar pastas
3. Implementar autenticação - Google OAuth funcional
4. Criar primeira interface - Dashboard do admin
5. Entregar para validação - Mostrar para a esposa

## Status

🚧 Em desenvolvimento - MVP em construção
Cliente piloto: Igreja da minha esposa
Objetivo: Validar com usuários reais antes de escalar

---

# 📋 Requisitos Detalhados - IgrejaConnect MVP

## 1. AUTENTICAÇÃO E SEGURANÇA

### 1.1 Login Social
- [ ] Login com Google OAuth 2.0
- [ ] Registrar: nome, email, google_id, foto
- [ ] Associar usuário a uma igreja (igreja_id)
- [ ] Se for o primeiro admin, permitir criar igreja

### 1.2 Permissões
- **Super Admin (Você):** Acesso total a todos os dados de todas as igrejas (CRUD completo em todos os tenants).
- **Admin da Igreja:** Acesso total (CRUD completo) apenas aos dados da sua igreja. Pode excluir posts e comentários de sua igreja.
- **Membro:** Ver eventos, se inscrever, comentar em posts da sua igreja.
- **Visitante:** Ver página pública da igreja apenas.

### 1.3 Segurança
- [ ] Middleware de autenticação em todas as rotas protegidas
- [ ] Validação de igreja_id (usuário só vê dados da sua igreja)
- [ ] Sanitização de inputs
- [ ] Proteção CSRF

## 2. PÁGINA PÚBLICA DA IGREJA

### 2.1 Configurações (Admin)
- [ ] Upload de logo (PNG/JPG, max 2MB)
- [ ] Upload de capa (PNG/JPG, max 5MB)
- [ ] Editar nome da igreja
- [ ] Editar descrição (textarea)
- [ ] Selecionar cor primária (color picker)

### 2.2 Exibição
- [ ] Header com logo, nome e capa
- [ ] Feed de posts (últimos 10, com paginação)
- [ ] Eventos próximos (em destaque)
- [ ] Menu: Início, Eventos, Sobre

## 3. POSTS / NOTÍCIAS

### 3.1 Admin - CRUD
- [ ] Criar post: título, conteúdo (rich text), imagem (opcional)
- [ ] Editar post
- [ ] Excluir post (soft delete)
- [ ] Agendar post (data futura)

### 3.2 Membro - Interação
- [ ] Ver lista de posts no feed público
- [ ] Clicar no post para ver completo
- [ ] Comentar no post (se logado)
- [ ] Ver comentários de outros membros

### 3.3 Moderação
- [ ] Admin pode excluir qualquer comentário
- [ ] Admin pode desativar comentários em post específico

## 4. EVENTOS E INSCRIÇÕES (CORAÇÃO DO MVP)

### 4.1 Admin - Criação do Evento
- [ ] Título do evento
- [ ] Descrição (rich text)
- [ ] Data e horário
- [ ] Local (texto)
- [ ] Imagem de capa (opcional)
- [ ] Tipo: Aberto (qualquer membro) / Fechado (apenas convidados)
- [ ] Status: Rascunho / Publicado / Cancelado

### 4.2 Admin - Formulário Dinâmico
- [ ] Adicionar campos personalizados:
  - Tipo: Texto, Select, Número, Checkbox, Textarea
  - Label: "Nome completo", "Tamanho camiseta", etc.
  - Obrigatório ou opcional
  - Opções (para Select): "P, M, G, GG"
- [ ] Reordenar campos (drag and drop)
- [ ] Editar ou remover campos

### 4.3 Membro - Inscrição
- [ ] Ver lista de eventos abertos
- [ ] Clicar em "Inscrever-se"
- [ ] Preencher formulário dinâmico
- [ ] Receber confirmação na tela
- [ ] Receber e-mail de confirmação (opcional)

### 4.4 Admin - Gestão de Inscrições
- [ ] Ver lista de inscritos (tabela)
- [ ] Ver respostas individuais de cada campo
- [ ] Exportar para CSV/Excel
- [ ] Marcar presença (check-in)
- [ ] Cancelar inscrição de membro
- [ ] Enviar e-mail em massa para inscritos (opcional)

## 5. PAINEL ADMINISTRATIVO

### 5.1 Dashboard
- [ ] Total de membros
- [ ] Próximos eventos (3)
- [ ] Últimos posts publicados
- [ ] Inscrições nos últimos 7 dias (gráfico)
- [ ] Notificações rápidas

### 5.2 Gerenciar Membros
- [ ] Listar todos os membros (com busca)
- [ ] Ver perfil do membro (histórico de inscrições)
- [ ] Aprovar novo membro (se aprovação manual)
- [ ] Banir/Desativar membro
- [ ] Promover a Admin

### 5.3 Configurações
- [ ] Adicionar outros Admins (por email)
- [ ] Definir regras de cadastro (aprovado automático ou manual)
- [ ] Personalizar cores e logo
- [ ] Configurar domínio personalizado (futuro)

## 6. ÁREA DO MEMBRO (Logado)

### 6.1 Perfil
- [ ] Ver meus dados (nome, email, foto)
- [ ] Histórico de inscrições em eventos
- [ ] Meus comentários

### 6.2 Atividades
- [ ] Ver eventos que me inscrevi
- [ ] Ver próximos eventos
- [ ] Comentar em posts

## 7. REQUISITOS TÉCNICOS

### 7.1 Performance
- [ ] Tempo de carregamento < 2s
- [ ] Lazy loading de imagens
- [ ] Cache de dados públicos

### 7.2 Responsividade
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x812) - prioridade

### 7.3 SEO
- [ ] Meta tags dinâmicas (OpenGraph)
- [ ] Sitemap.xml
- [ ] Robots.txt

### 7.4 Segurança
- [ ] HTTPS
- [ ] Rate limiting
- [ ] Sanitização de HTML (nos posts)
- [ ] Proteção contra XSS e SQL Injection

## 8. MULTI-TENANT (PILAR DO FUTURO)

### 8.1 Isolamento
- [ ] Todas as queries com filtro de igreja_id
- [ ] Usuário só vê dados da sua igreja
- [ ] Admin só gerencia sua própria igreja

### 8.2 Escalabilidade
- [ ] Adicionar nova igreja = criar registro
- [ ] Cada igreja com seu próprio branding
- [ ] Possibilidade de subdomínio no futuro (igreja.igrejaconnect.com)

## 9. NÃO-FUNCIONAIS (MVP)

- [ ] Código limpo e comentado (em português)
- [ ] Testes manuais antes de cada entrega
- [ ] Documentação da API (Swagger/Postman)
- [ ] Deploy automatizado (CI/CD)
- [ ] Backup diário do banco de dados

## 10. VALIDAÇÃO COM A IGREJA DA ESPOSA

### 10.1 Critérios de Sucesso
- [ ] Ela consegue criar um post sozinha?
- [ ] Ela consegue criar um evento com formulário?
- [ ] Ela consegue ver os inscritos?
- [ ] Ela consegue exportar a lista?
- [ ] Os membros conseguem se inscrever sem ajuda?

### 10.2 Feedback
- [ ] Coletar feedback após 1 semana de uso
- [ ] Priorizar melhorias mais pedidas
- [ ] Fazer ajustes antes de escalar

---

# 📦 Backlog do Produto - IgrejaConnect

## Epic 1: Fundação 🏗️
- [ ] Configurar ambiente de desenvolvimento
- [ ] Definir stack final
- [ ] Criar estrutura de banco de dados
- [ ] Implementar autenticação Google

## Epic 2: Admin - Configuração da Igreja ⚙️
- [ ] CRUD de igreja (nome, logo, capa, cores)
- [ ] Dashboard inicial
- [ ] Gerenciar admins

## Epic 3: Posts e Conteúdo 📝
- [ ] CRUD de posts
- [ ] Feed público
- [ ] Comentários
- [ ] Moderação

## Epic 4: Eventos e Inscrições 🎫
- [ ] CRUD de eventos
- [ ] Formulário dinâmico (admin)
- [ ] Página pública de eventos
- [ ] Sistema de inscrição
- [ ] Painel de inscritos
- [ ] Exportação CSV

## Epic 5: Área do Membro 👤
- [ ] Login/Logout
- [ ] Perfil
- [ ] Minhas inscrições
- [ ] Histórico

## Epic 6: Polimento e Validação ✨
- [ ] UI/UX refinado
- [ ] Mobile-first
- [ ] Testes com usuários reais
- [ ] Validação com a igreja da esposa

---

# 🎯 Sprints Iniciais - IgrejaConnect

## Sprint 1 (Semana 1) - A Base

**Objetivo:** Ter autenticação funcionando e a estrutura inicial do admin.

### Tarefas:
1. [ ] Escolher stack final (vamos decidir juntos)
2. [ ] Criar projeto (backend + frontend)
3. [ ] Modelar banco de dados (migrations)
4. [ ] Implementar autenticação Google OAuth
5. [ ] Criar página de login
6. [ ] Criar estrutura básica do admin (layout)
7. [ ] Implementar CRUD de igreja (apenas admin)
8. [ ] Deploy em ambiente de teste

**Entregável:** Admin consegue logar e editar os dados da igreja.

---

## Sprint 2 (Semana 2) - Conteúdo

**Objetivo:** Admin gerenciar posts e eventos.

### Tarefas:
1. [ ] CRUD de posts (com imagem)
2. [ ] Feed público de posts
3. [ ] CRUD de eventos
4. [ ] Página pública de eventos
5. [ ] Dashboard com métricas básicas

**Entregável:** Igreja tem página pública com posts e eventos.

---

## Sprint 3 (Semana 3) - Inscrições

**Objetivo:** Sistema de inscrição funcionando.

### Tarefas:
1. [ ] Formulário dinâmico (admin cria campos)
2. [ ] Página de inscrição (membro)
3. [ ] Salvar inscrições no banco
4. [ ] Painel admin: ver inscritos
5. [ ] Exportar para CSV

**Entregável:** Membros podem se inscrever em eventos.

---

## Sprint 4 (Semana 4) - Interação e Validação

**Objetivo:** Sistema completo e validação com usuários.

### Tarefas:
1. [ ] Comentários em posts
2. [ ] Moderação de comentários
3. [ ] Área do membro (perfil, histórico)
4. [ ] Ajustes de UI/UX
5. [ ] Deploy final
6. [ ] Apresentar para a igreja da esposa

**Entregável:** MVP completo validado com usuários reais.

---


