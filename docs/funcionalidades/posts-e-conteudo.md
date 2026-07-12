# 📝 Posts, Conteúdo e Interação

## CRUD de Posts (Admin)

### Criar Post
- Título (obrigatório)
- Conteúdo rich text (obrigatório)
- Imagem de capa (opcional, máx 2MB)
- Status: Rascunho / Publicado / Agendado
- Data de publicação (para agendados)

### Editar Post
- Todos os campos editáveis
- Histórico de alterações (v2)

### Excluir Post
- Soft delete (marcar como excluído)
- Não aparece no feed público
- Admin pode restaurar

---

## Feed Público

- Últimos 10 posts publicados
- Paginação (carregar mais)
- Cards: imagem, título, resumo, data
- Ordem: data de publicação (mais recente)

---

## Comentários

### Membro
- Comentar em posts publicados
- Máximo 1000 caracteres
- Ver comentários de outros membros

### Admin
- Desativar comentários em post específico
- Excluir qualquer comentário
- Ver todos os comentários

---

## Moderação (Admin)

- Lista de comentários recentes
- Filtrar por post
- Ações: Excluir, Ocultar
- Notificação ao membro? (v2)

---

## Endpoints da API

| Método | Rota | Descrição | Permissão |
|--------|------|-----------|-----------|
| GET | /api/posts/:igreja_id | Listar posts | Pública |
| GET | /api/posts/:id | Ver post completo | Pública |
| POST | /api/admin/posts | Criar post | Admin |
| PUT | /api/admin/posts/:id | Editar post | Admin |
| DELETE | /api/admin/posts/:id | Excluir post | Admin |
| GET | /api/posts/:id/comentarios | Listar comentários | Pública |
| POST | /api/posts/:id/comentarios | Comentar | Membro+ |
| DELETE | /api/admin/comentarios/:id | Excluir comentário | Admin |

[📚 Voltar ao Índice](../README.md)