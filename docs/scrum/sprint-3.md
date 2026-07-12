# 🏃 Sprint 3 - Gestão e Feed Social

**Duração:** 1 semana  
**Objetivo:** Admin gere inscrições, feed de atividades funcionando  
**Entregável:** Sistema completo de eventos e engajamento

---

## 📋 Histórias

| ID | História | Pontos | Responsável | Status |
|----|----------|--------|-------------|--------|
| H011 | Aprovação de membros | 5 | - | ⬜ |
| H029 | Ver minhas inscrições | 5 | - | ⬜ |
| H030 | Painel de inscritos (admin) | 8 | - | ⬜ |
| H031 | Exportar inscritos CSV | 5 | - | ⬜ |
| H035 | Feed de atividades da igreja | 8 | - | ⬜ |
| H036 | Feed de atividades no perfil | 5 | - | ⬜ |
| H039 | Dashboard admin com métricas | 8 | - | ⬜ |

**Total:** 44 pontos

---

## ✅ Tarefas Técnicas

### H011 - Aprovação de Membros
- [ ] Lista de membros pendentes
- [ ] Botão aprovar/rejeitar
- [ ] Atualizar status em `membros_igreja`
- [ ] Configuração: aprovação automática

### H029 - Minhas Inscrições
- [ ] Página no perfil do membro
- [ ] Lista de eventos inscritos
- [ ] Status: confirmado, presente, cancelado
- [ ] Link para detalhes do evento

### H030 - Painel de Inscritos
- [ ] Tabela com todos os inscritos
- [ ] Colunas dinâmicas (campos do formulário)
- [ ] Busca por nome/email
- [ ] Filtro por data

### H031 - Exportar CSV
- [ ] Botão exportar no painel de inscritos
- [ ] Gerar arquivo CSV
- [ ] Colunas: dados do formulário + data
- [ ] Nome: `inscritos_{evento}_{data}.csv`

### H035 - Feed da Igreja
- [ ] Criar coleção `atividades`
- [ ] Registrar atividades automaticamente
- [ ] Exibir feed na página da igreja
- [ ] Ordenar por data (mais recente)

### H036 - Feed no Perfil
- [ ] Exibir atividades do usuário
- [ ] Filtrar por tipo (comentários, inscrições, curtidas)
- [ ] Links para itens originais

### H039 - Dashboard Admin
- [ ] Cards: total membros, eventos, posts
- [ ] Gráfico: inscrições nos últimos 7 dias
- [ ] Lista: próximos eventos
- [ ] Lista: últimos posts

---

## 🔍 Critérios de Aceitação

- [ ] Admin vê lista de inscritos por evento
- [ ] Exportação CSV funciona
- [ ] Feed de atividades mostra interações
- [ ] Dashboard exibe métricas corretas
- [ ] Membro vê seu histórico

---

[← Voltar ao Backlog](product-backlog.md)