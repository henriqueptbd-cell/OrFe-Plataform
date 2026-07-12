# 🔒 Segurança & Performance

## 🛡️ Segurança

### Autenticação
- [ ] Firebase Auth (Google OAuth 2.0)
- [ ] JWT validado em todas as rotas protegidas
- [ ] Middleware de verificação de token

### Autorização (RBAC)

| Papel | Acesso |
|-------|--------|
| Super Admin | Todas as igrejas, todos os dados |
| Admin | CRUD completo apenas na sua igreja |
| Membro | Apenas sua igreja: eventos, comentários, perfil |
| Visitante | Página pública apenas |

### Proteções Implementadas
- [ ] Sanitização de HTML (DOMPurify)
- [ ] Rate limiting em rotas críticas
- [ ] CORS configurado
- [ ] Headers de segurança (Helmet)
- [ ] Validação de inputs (express-validator)
- [ ] Proteção contra XSS
- [ ] HTTPS obrigatório

### Isolamento Multi-tenant
```javascript
// Exemplo de middleware
function tenantMiddleware(req, res, next) {
  const userIgrejaId = req.user.igreja_id;
  
  // Super admin tem acesso total
  if (req.user.tipo === 'super_admin') return next();
  
  // Demais usuários: filtra por igreja
  req.query.igreja_id = userIgrejaId;
  next();
}
```
---

## ⚡ Performance

### Metas

| Métrica | Alvo |
|---------|------|
| Tempo de carregamento | < 2s |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |

### Estratégias
- [ ] Lazy loading de imagens
- [ ] Cache de dados públicos (15min)
- [ ] Paginação em listas (10 itens)
- [ ] Compressão de imagens (máx 500KB)
- [ ] Minificação de CSS/JS
- [ ] CDN para assets estáticos

### Responsividade

| Dispositivo | Resolução | Prioridade |
|-------------|-----------|------------|
| Mobile | 375x812 | ⭐⭐⭐ |
| Tablet | 768x1024 | ⭐⭐ |
| Desktop | 1920x1080 | ⭐ |

### SEO
- [ ] Meta tags dinâmicas (OpenGraph)
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] URLs amigáveis (slug)

[📚 Voltar ao Índice](../README.md)