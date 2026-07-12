# 🏛️ Visão do Produto & MVP

## 📌 Visão Geral

Plataforma web que permite que igrejas tenham sua própria presença digital com:
- Página pública personalizável
- Sistema de eventos com inscrições
- Mural de notícias e interação social
- Painel administrativo completo

**Diferencial:** Arquitetura multi-tenant desde o dia 1, permitindo que o sistema atenda múltiplas igrejas com dados completamente isolados.

---

## 🎯 Público-Alvo

### MVP (Fase 1)
- Igreja da esposa (cliente piloto)
- Membros da igreja
- Visitantes

### Escala Futura
- Pequenas e médias igrejas
- Pastores e líderes
- Administradores de igreja

---

## 🚀 Arquitetura Multi-tenant
- Cada igreja = tenant independente
- Dados separados por igreja_id
- Isolamento total entre tenants
- Escalável: adicionar nova igreja = criar novo registro


---

## ✅ Escopo do MVP (v1.0)

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

---

## ❌ Fora do Escopo (MVP)

- Domínio personalizado por igreja
- E-mails automáticos em massa
- Aplicativo mobile
- Pagamentos online
- Transmissão ao vivo
- Loja virtual
- API pública para terceiros

---

## 📏 Critérios de Sucesso

- [ ] Esposa consegue criar um post sozinha
- [ ] Esposa consegue criar um evento com formulário
- [ ] Esposa consegue ver os inscritos
- [ ] Esposa consegue exportar a lista
- [ ] Membros conseguem se inscrever sem ajuda
- [ ] Coletar feedback após 1 semana de uso
- [ ] Priorizar melhorias baseadas no feedback real

[📚 Voltar ao Índice](../README.md)