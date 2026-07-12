# 🔐 Autenticação e Permissões

## Fluxo de Login


1. Usuário clica "Login com Google"
2. Firebase Auth processa OAuth
3. Backend recebe token → valida
4. Se primeiro acesso → cria usuário → pendente aprovação
5. Se já cadastrado → retorna JWT + dados do usuário

---

## Regras de Cadastro

### Primeiro Acesso (Admin)
- Se não existe igreja → usuário pode criar igreja
- Usuário vira admin automaticamente

### Primeiro Acesso (Membro)
- Usuário escolhe a igreja (via slug ou convite)
- Status: `pendente` até admin aprovar
- Admin pode definir aprovação automática

---

## Níveis de Permissão

### Super Admin
- Acesso total a todos os tenants
- Pode criar/remover igrejas
- Pode promover admins
- Dashboard global

### Admin da Igreja
- CRUD completo na sua igreja
- Gerenciar membros
- Criar posts e eventos
- Moderar comentários
- Exportar inscrições
- Personalizar página

### Membro
- Ver eventos da sua igreja
- Inscrever-se em eventos
- Comentar em posts
- Ver histórico de inscrições
- Editar perfil

### Visitante
- Ver página pública
- Ver posts e eventos
- Sem interação

---

## Endpoints da API

| Método | Rota | Descrição | Permissão |
|--------|------|-----------|-----------|
| POST | `/api/auth/login` | Login Google | Pública |
| GET | `/api/auth/me` | Dados do usuário logado | Autenticado |
| PUT | `/api/auth/perfil` | Atualizar perfil | Autenticado |
| GET | `/api/usuarios` | Listar membros | Admin |
| PUT | `/api/usuarios/:id/aprovar` | Aprovar membro | Admin |
| PUT | `/api/usuarios/:id/banir` | Banir membro | Admin |

[📚 Voltar ao Índice](../README.md)