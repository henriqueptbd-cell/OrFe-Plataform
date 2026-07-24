# prompt inicial

- Crie um design de interface para uma plataforma web de gestão para igrejas chamada "OrFe". O estilo deve ser moderno, acolhedor e clean, com tons neutros e espaço para cores personalizadas por igreja.

## Páginas necessárias:

### 1. Landing Page (/)
- Header com logo, menu (Início, Eventos) e botão "Login com Google"
- Seção hero com título "Sua igreja online" e subtítulo "Página pública, eventos e interação com membros"
- Cards com 3 funcionalidades: Feed de Notícias, Eventos com Inscrições, Interação Social
- Call to action "Crie sua igreja grátis"
- Footer simples

### 2. Login (/login)
- Card centralizado com logo OrFe
- Botão "Entrar com Google" com ícone do Google
- Texto "Ao entrar, você concorda com nossos termos"
- Fundo clean com gradiente suave

### 3. Página Pública da Igreja (/igreja/nome-da-igreja)
- Header com capa da igreja (imagem de fundo) e logo sobreposta
- Nome da igreja e descrição curta
- Menu: Início, Eventos, Sobre
- Feed de posts em cards (imagem, título, resumo, data, autor)
- Sidebar com próximos eventos (data, título, link)
- Cores customizadas da igreja (cor primária)

### 4. Dashboard Admin (/admin)
- Sidebar lateral com menu: Dashboard, Posts, Eventos, Membros, Configurações
- Topo com avatar do usuário e seletor de igreja
- Cards de métricas: Total Membros, Eventos Ativos, Posts Publicados, Inscrições na Semana
- Gráfico simples de inscrições (últimos 7 dias)
- Lista de próximos eventos
- Lista de últimos posts

### 5. Perfil do Usuário (/perfil)
- Capa do perfil com foto circular sobreposta
- Nome, email, bio ("Sobre mim")
- Cards das igrejas que participa (logo, nome, papel: admin/membro)
- Feed de atividades: "Inscreveu-se em...", "Curtiu...", "Comentou em..."
- Botão editar perfil (lápis)

### 6. Página de Evento (/evento/id)
- Imagem de capa do evento
- Título, data, horário, local
- Descrição completa
- Botão "Inscrever-se" (destaque)
- Contador de curtidas com ícone de coração
- Se houver formulário dinâmico, campos aparecem abaixo

### 7. Painel de Inscritos - Admin (/admin/evento/id/inscritos)
- Tabela com colunas: Nome, Email, Data Inscrição, Presença (checkbox)
- Botão "Exportar CSV" no topo
- Campo de busca "Buscar inscrito..."
- Badge com total de inscritos

## Estilo Visual:
- Paleta base: branco, cinza claro, texto escuro
- Cores de destaque: azul #4A90D9 (confiança) e verde #5CB85C (ações positivas)
- Tipografia: Inter (títulos) e Inter (corpo)
- Bordas arredondadas (8px)
- Sombras suaves nos cards
- Ícones: Feather Icons (simples e lineares)
- Mobile-first: pensar primeiro na versão mobile (375px) e depois desktop

## Componentes reutilizáveis:
- Botão primário (cor da igreja)
- Botão "Login com Google" (branco com borda cinza)
- Card de post (imagem topo, conteúdo abaixo)
- Card de evento (data em destaque, título, local)
- Avatar circular com dropdown
- Modal de confirmação
- Tabela responsiva
- Badge de status (publicado, rascunho, cancelado)

# prompt v2

Crie um design para uma plataforma chamada "OrFe" onde pessoas descobrem e participam de eventos de igrejas. O foco é atrair USUÁRIOS (pessoas), não igrejas. O estilo deve ser moderno, jovem, acolhedor e social.

## Páginas necessárias:

### 1. Landing Page (/)
- Hero: "Descubra eventos que alimentam sua fé" com imagem de pessoas reunidas
- Subtítulo: "Encontre eventos de igrejas perto de você, inscreva-se e participe"
- Barra de busca: "Buscar eventos ou igrejas..."
- Seção "Eventos em destaque" - cards com eventos de diferentes igrejas (imagem, título, data, igreja, botão "Quero participar")
- Seção "Igrejas na plataforma" - cards com logo, nome e descrição curta das igrejas
- Call to action: "Crie seu perfil grátis e comece a participar"
- Footer

### 2. Login/Cadastro (/login)
- Card centralizado
- Botão "Entrar com Google" (principal, bem destacado)
- Texto: "Crie seu perfil e participe de eventos de igrejas"
- Nada de "criar igreja" aqui - isso fica para depois

### 3. Feed do Usuário (home logado) (/home)
- Header com logo, seletor de igreja (dropdown: "Todas as igrejas" + lista das que participa)
- Avatar do usuário com menu: Perfil, Minhas Inscrições, Sair
- Feed de atividades das igrejas que segue/participa:
  - "Igreja X publicou novo evento: Retiro Espiritual"
  - "Maria inscreveu-se em Curso de Liderança na Igreja Y"
  - "João curtiu o evento Acampamento na Igreja Z"
- Cada item do feed com: avatar, texto, tempo, curtir/comentar

### 4. Explorar Eventos (/eventos)
- Filtros no topo: data, localização, igreja
- Grid de cards de eventos (3 colunas desktop, 1 coluna mobile)
- Cada card: imagem, data em destaque, título, nome da igreja com logo, curtidas, botão "Inscrever-se"
- Paginação infinita (scroll)

### 5. Página do Evento (/evento/:id)
- Capa do evento (imagem grande)
- Título, data, horário, local com ícone de mapa
- Logo e nome da igreja (clicável)
- Descrição completa
- Botão grande "Inscrever-se" (se aberto)
- Formulário de inscrição (campos dinâmicos definidos pela igreja)
- Seção de comentários/discussão
- Contador de curtidas e inscritos
- Sidebar: "Outros eventos desta igreja"

### 6. Página da Igreja (/igreja/:slug)
- Capa e logo da igreja
- Nome, descrição, localização
- Botão "Seguir/Participar" (vira membro)
- Abas: Eventos, Feed, Membros
  - Eventos: próximos e passados
  - Feed: posts e avisos da igreja
  - Membros: grid com fotos, nomes e cargos

### 7. Perfil do Usuário (/perfil)
- Capa e foto do perfil
- Nome, bio ("Sobre mim")
- Estatísticas: eventos participados, igrejas que segue
- Grid de badges/conquistas (ex: "Participou de 5 eventos", "Membro há 6 meses")
- Feed de atividades do usuário (eventos inscritos, curtidas, comentários)
- Lista de igrejas que participa (cards pequenos com logo, nome, badge do cargo)

### 8. Minhas Inscrições (/minhas-inscricoes)
- Lista de eventos que se inscreveu
- Status: Confirmado, Pendente, Cancelado
- Cada item: data, título do evento, igreja, botão "Ver detalhes"
- Filtro: Próximos, Passados

### 9. Criar Página da Igreja (/criar-igreja)
- Fluxo para quem quer CADASTRAR uma igreja (não é o foco principal)
- Formulário: nome da igreja, slug, descrição, localização
- Upload de logo e capa
- Escolher cor primária
- Criar cargos personalizados:
  - "Adicionar cargo" (ex: Pastor, Líder de Jovens, Diácono, Membro)
  - Cada cargo: nome, nível hierárquico, cor do badge
- Convite: "Convide membros por email"
- Ao criar, o criador vira Admin automaticamente

### 10. Painel Admin da Igreja (/igreja/:slug/admin)
- Sidebar: Dashboard, Eventos, Posts, Membros, Configurações
- Gerenciar cargos: criar, editar, excluir, reordenar hierarquia
- Atribuir cargos aos membros
- Árvore hierárquica visual dos membros (organograma simples)
- CRUD de eventos com formulários dinâmicos
- CRUD de posts
- Lista de membros com busca, filtro por cargo, ações (promover, rebaixar, remover)

## Estilo Visual:
- Nome da plataforma: OrFe (com ícone de chama/fogo sutil - representando fé)
- Paleta: background claro (#FAFAFA), cards brancos, texto escuro
- Cor primária: #FF6B35 (laranja acolhedor - remete a comunidade, calor)
- Cor secundária: #4A90D9 (azul confiança)
- Tipografia: Inter (moderna, limpa)
- Bordas arredondadas (12px nos cards, 8px nos botões)
- Sombras suaves
- Ícones: Phosphor Icons (mais amigáveis e modernos)

## Componentes:
- Card de evento (com data em badge colorido, nome da igreja, curtidas)
- Card de igreja (logo, nome, membros, eventos)
- Badge de cargo (com cor personalizada)
- Organograma hierárquico (visual tree)
- Botão "Inscrever-se" (laranja, grande, com efeito hover)
- Avatar com indicador de cargo (bordinha colorida)