# 🏃 Sprint 4 - Polimento e Validação

**Duração:** 1 semana  
**Objetivo:** MVP pronto para uso real  
**Entregável:** Sistema validado com usuários reais

---

## 📋 Histórias

| ID | História | Pontos | Responsável | Status |
|----|----------|--------|-------------|--------|
| H008 | Upload foto e capa do perfil | 3 | - | ⬜ |
| H009 | Editar bio | 2 | - | ⬜ |
| H012 | Seletor de igreja no header | 5 | - | ⬜ |
| H015 | Personalizar cores | 2 | - | ⬜ |
| H023 | Moderar comentários | 5 | - | ⬜ |
| H043 | Responsividade mobile-first | 8 | - | ⬜ |
| H046 | SEO (meta tags, sitemap) | 5 | - | ⬜ |
| H047 | Testes com usuários reais | 8 | - | ⬜ |
| H048 | Validação com igreja piloto | 5 | - | ⬜ |
| H049 | Deploy produção | 5 | - | ⬜ |
| H050 | Coleta de feedback | 3 | - | ⬜ |

**Total:** 51 pontos

---

## ✅ Tarefas Técnicas

### H008/H009 - Perfil Completo
- [ ] Upload foto perfil (Firebase Storage)
- [ ] Upload capa perfil
- [ ] Crop/redimensionamento
- [ ] Formulário bio

### H012 - Seletor de Igreja
- [ ] Dropdown no header
- [ ] Listar igrejas do usuário
- [ ] Trocar `igreja_ativa`
- [ ] Redirecionar para feed da igreja

### H015 - Cores
- [ ] Color picker no admin
- [ ] Aplicar cor primária na página pública
- [ ] CSS variável dinâmica

### H023 - Moderação
- [ ] Lista de comentários no admin
- [ ] Excluir comentário
- [ ] Ocultar comentário (v2)

### H043 - Mobile-first
- [ ] Revisar todas as páginas
- [ ] Menu hamburguer
- [ ] Tabelas responsivas
- [ ] Imagens adaptativas
- [ ] Testar em: 375px, 768px, 1920px

### H046 - SEO
- [ ] Meta tags dinâmicas (OpenGraph)
- [ ] Título e descrição por página
- [ ] Sitemap.xml
- [ ] Robots.txt

### H047/H048 - Testes e Validação
- [ ] Criar roteiro de testes
- [ ] Testar fluxo completo: login → post → evento → inscrição
- [ ] Esposa cria post sozinha?
- [ ] Esposa cria evento com formulário?
- [ ] Esposa vê inscritos?
- [ ] Esposa exporta lista?
- [ ] Membros se inscrevem sem ajuda?

### H049 - Deploy
- [ ] Configurar Firebase Hosting
- [ ] Configurar VPS/Railway para backend
- [ ] Variáveis de ambiente
- [ ] Domínio e HTTPS

### H050 - Feedback
- [ ] Coletar após 1 semana de uso
- [ ] Listar melhorias solicitadas
- [ ] Priorizar para v1.1

---

## 🔍 Critérios de Aceitação (Validação)

- [ ] Esposa consegue criar post sozinha
- [ ] Esposa consegue criar evento com formulário
- [ ] Esposa consegue ver inscritos
- [ ] Esposa consegue exportar lista
- [ ] Membros conseguem se inscrever sem ajuda
- [ ] Sistema funciona bem no celular
- [ ] Deploy produção estável
- [ ] Feedback coletado

---

[← Voltar ao Backlog](product-backlog.md)