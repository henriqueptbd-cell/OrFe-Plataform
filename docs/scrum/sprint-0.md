# 🏃 Sprint 0 - Setup & Fundação

**Duração:** 1 semana  
**Objetivo:** Ambiente configurado, auth funcionando, estrutura base pronta  
**Entregável:** Admin consegue logar e editar dados da igreja

---

## 📋 Histórias

| ID   | História                               | Pontos | Responsável | Status |
| ---- | -------------------------------------- | ------ | ----------- | ------ |
| H001 | Configurar ambiente de desenvolvimento | 3      | -           | ⬜     |
| H002 | Modelar banco de dados no Firestore    | 5      | -           | ⬜     |
| H003 | Implementar autenticação Google OAuth  | 8      | -           | ⬜     |
| H004 | Criar middleware de tenant             | 5      | -           | ⬜     |
| H005 | Criar estrutura base do frontend       | 5      | -           | ⬜     |
| H006 | Login com Google                       | 5      | -           | ⬜     |

**Total:** 31 pontos

---

## ✅ Tarefas Técnicas

### H001 - Configurar Ambiente

- [✅] Inicializar projeto Node.js
- [✅] Configurar ESLint/Prettier
- [✅] Criar `.env.example`
- [✅] Configurar Firebase Admin SDK
- [✅] Estrutura de pastas

### H002 - Modelar Banco

- [✅] Criar coleções no Firestore
- [✅] Definir índices necessários
- [✅] Criar regras de segurança iniciais
- [✅] Documentar schemas

### H003 - Firebase Auth

- [✅] Configurar Firebase Auth no console
- [✅] Habilitar Google OAuth
- [ ] Criar endpoint `/api/auth/login`
- [ ] Criar middleware de verificação de token
- [ ] Testar fluxo completo

### H004 - Middleware Tenant

- [ ] Criar `tenantMiddleware.js`
- [ ] Validar `igreja_id` nas requisições
- [ ] Tratar super_admin (acesso global)
- [ ] Testar isolamento

### H005 - Estrutura Frontend

- [ ] Criar `index.html` (página pública)
- [ ] Criar `admin.html` (painel)
- [ ] Criar `login.html`
- [ ] Configurar CSS base (variáveis, reset)
- [ ] Estruturar pastas JS

### H006 - Login com Google

- [ ] Botão "Login com Google"
- [ ] Chamar Firebase Auth
- [ ] Enviar token para backend
- [ ] Redirecionar após login
- [ ] Tratar primeiro acesso (criar usuário)

---

## 🔍 Critérios de Aceitação

- [ ] Projeto sobe localmente sem erros
- [ ] Login com Google funciona
- [ ] Usuário é criado no Firestore
- [ ] Token JWT é validado
- [ ] Middleware bloqueia acesso sem token
- [ ] Estrutura multi-tenant básica funciona

---

## 🚧 Riscos

| Risco                          | Mitigação                         |
| ------------------------------ | --------------------------------- |
| Configuração Firebase complexa | Seguir documentação oficial       |
| Curva de aprendizado Firestore | Usar console Firebase para testes |

---

[← Voltar ao Backlog](product-backlog.md)
