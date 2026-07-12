# 🏃 Sprint 1 - Painel Administrativo

**Duração:** 1 semana  
**Objetivo:** Admin gerencia igreja, posts e eventos  
**Entregável:** Igreja configurada com posts e eventos

---

## 📋 Histórias

| ID | História | Pontos | Responsável | Status |
|----|----------|--------|-------------|--------|
| H007 | Criar perfil global do usuário | 8 | - | ⬜ |
| H010 | Sistema de papéis | 5 | - | ⬜ |
| H013 | CRUD de igreja (admin) | 8 | - | ⬜ |
| H014 | Upload de logo e capa | 3 | - | ⬜ |
| H018 | CRUD de posts | 8 | - | ⬜ |
| H025 | CRUD de eventos | 8 | - | ⬜ |

**Total:** 40 pontos

---

## ✅ Tarefas Técnicas

### H007 - Perfil Global
- [ ] Criar coleção `usuarios` com campos de perfil
- [ ] Criar página `/perfil`
- [ ] Exibir nome, email, foto
- [ ] Formulário "Sobre mim"
- [ ] Upload foto perfil e capa (H008 + H009)

### H010 - Sistema de Papéis
- [ ] Criar coleção `membros_igreja`
- [ ] Definir papéis no cadastro
- [ ] Middleware de autorização por papel
- [ ] Primeiro admin consegue criar igreja

### H013 - CRUD Igreja
- [ ] Formulário: nome, descrição, slug
- [ ] Color picker (cor primária)
- [ ] Salvar no Firestore
- [ ] Gerar slug automaticamente

### H014 - Upload Logo/Capa
- [ ] Upload para Firebase Storage
- [ ] Redimensionar imagens
- [ ] Salvar URL no Firestore
- [ ] Preview antes de salvar

### H018 - CRUD Posts
- [ ] Formulário: título, conteúdo, imagem
- [ ] Editor rich text simples
- [ ] Status: rascunho/publicado/agendado
- [ ] Lista de posts no admin
- [ ] Editar e excluir

### H025 - CRUD Eventos
- [ ] Formulário: título, descrição, data, horário, local
- [ ] Upload imagem de capa
- [ ] Tipo: aberto/fechado
- [ ] Status: rascunho/publicado/cancelado
- [ ] Lista de eventos no admin

---

## 🔍 Critérios de Aceitação

- [ ] Admin consegue editar dados da igreja
- [ ] Logo e capa aparecem na página pública
- [ ] Admin cria post que aparece no feed
- [ ] Admin cria evento que aparece na lista
- [ ] Perfil do usuário é exibido corretamente

---

[← Voltar ao Backlog](product-backlog.md)