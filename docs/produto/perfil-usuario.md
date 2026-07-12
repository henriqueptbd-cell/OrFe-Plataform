# 👤 Perfil do Usuário

## Visão Geral

Cada usuário possui um perfil global único, independente das igrejas que participa. O perfil contém informações pessoais e um feed com todas as suas interações no sistema.

---

## Dados do Perfil

| Campo | Tipo | Editável | Descrição |
|-------|------|----------|-----------|
| Nome | Texto | ❌ (vem do Google) | Nome completo |
| Email | Email | ❌ (vem do Google) | Email principal |
| Foto | Upload | ✅ | Foto de perfil (máx 2MB) |
| Capa | Upload | ✅ | Imagem de capa (máx 5MB) |
| Sobre | Textarea | ✅ | Bio, máx 300 caracteres |
| Igrejas | Lista | ❌ (automático) | Igrejas que participa |

---

## 📄 Página de Perfil (`/perfil`)

### Seções

1. **Capa e Foto**
   - Imagem de capa no topo
   - Foto circular sobreposta
   - Nome e email

2. **Sobre Mim**
   - Texto bio
   - Botão editar (lápis)

3. **Minhas Igrejas**
   - Cards das igrejas que participa
   - Nome, logo, papel (admin/membro)
   - Link para página da igreja

4. **Feed de Atividades**
   - Últimas interações do usuário:
     - Eventos inscritos
     - Comentários feitos
     - Posts/E ventos curtidos
   - Filtro por tipo de atividade
   - Paginação

---

## 🔄 Fluxo de Cadastro
```
Login Google
↓

Usuário novo?
├─ Sim → Criar perfil básico → Escolher igreja
└─ Não → Carregar perfil existente
↓

Perfil ativo → Acessar sistema
````

### Primeiro Acesso
- Nome e email preenchidos automaticamente
- Foto do Google usada como padrão
- Bio vazia (usuário preenche depois)
- Escolhe uma igreja para participar

---

## 🎨 UI do Perfil
````
┌─────────────────────────────────────┐
│ ┌─────────────────────────────┐     │
│ │ Capa do Perfil              │     │
│ │ ┌────┐                      │     │
│ │ │Foto│ Nome                 │     │
│ │ └────┘ @email               │     │
│ └─────────────────────────────┘     │
│                                     │
│ ✏️ Sobre mim:                       │
│ "Membro ativo, participo..."        │
│                                     │
│ ⛪ Minhas Igrejas:                  │
│ ┌──────┐ ┌──────┐                   │
│ │Igreja│ │Igreja│                   │
│ │  A   │ │  B   │                   │
│ │admin │ │membro│                   │
│ └──────┘ └──────┘                   │
│                                     │
│ 📋 Atividades Recentes:             │
│ ├ ❤️ Curtiu "Retiro Espiritual"     │
│ ├ 📝 Comentou em "Notícias"         │
│ └ 🎫 Inscreveu-se em "Curso"        │
└─────────────────────────────────────┘
````
---

## 🔗 Relacionamentos

| Entidade | Relação | Descrição |
|----------|---------|-----------|
| `usuarios` → `membros_igreja` | 1:N | Igrejas que participa |
| `usuarios` → `inscricoes` | 1:N | Eventos inscritos |
| `usuarios` → `comentarios` | 1:N | Comentários feitos |
| `usuarios` → `curtidas` | 1:N | Itens curtidos |
| `usuarios` → `atividades` | 1:N | Feed de atividades |

---

## 📊 Feed de Atividades (Perfil)

### Tipos Exibidos

| Atividade | Exibição |
|-----------|----------|
| `evento_inscrito` | "Inscreveu-se em {evento}" |
| `evento_curtido` | "Curtiu o evento {evento}" |
| `post_curtido` | "Curtiu o post {post}" |
| `comentario_feito` | "Comentou em {post}: {trecho}" |
| `comentario_curtido` | "Curtiu um comentário em {post}" |

### Filtros
- Todas as atividades
- Apenas inscrições
- Apenas comentários
- Apenas curtidas

---

## 🚀 Funcionalidades Futuras (v2+)

- Selos/conquistas por engajamento
- Seguir outros usuários
- Mensagens diretas
- Compartilhar perfil
- Estatísticas de participação

---

## 📡 Endpoints da API

| Método | Rota | Descrição | Permissão |
|--------|------|-----------|-----------|
| GET | `/api/perfil` | Dados do perfil logado | Autenticado |
| PUT | `/api/perfil` | Atualizar perfil | Autenticado |
| POST | `/api/perfil/foto` | Upload foto perfil | Autenticado |
| POST | `/api/perfil/capa` | Upload capa perfil | Autenticado |
| GET | `/api/perfil/atividades` | Feed de atividades | Autenticado |
| GET | `/api/perfil/igrejas` | Igrejas do usuário | Autenticado |
| GET | `/api/perfil/inscricoes` | Histórico de inscrições | Autenticado |

---

[← Voltar ao Índice](../README.md)