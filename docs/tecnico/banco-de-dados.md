# 🗄️ Estrutura de Dados

## 📊 Modelagem (Firestore)

### Coleção: `igrejas`
```json
{
  "id": "string (auto)",
  "nome": "string",
  "descricao": "string",
  "cor_primaria": "string (hex)",
  "logo_url": "string",
  "capa_url": "string",
  "slug": "string (único)",
  "publica": "boolean (padrão: true)",
  "localizacao": {
    "cidade": "string | null",
    "estado": "string | null",
    "lat": "number | null",
    "lng": "number | null"
  },
  "criado_em": "timestamp"
}
```

### Coleção: `usuarios`
```json
{
  "id": "string (auto)",
  "nome": "string",
  "email": "string",
  "google_id": "string",
  "foto_perfil": "string (URL)",
  "capa_perfil": "string (URL)",
  "sobre": "string (bio, máx 300 caracteres)",
  "igrejas": ["igreja_id"],
  "igreja_ativa": "igreja_id",
  "tipo_global": "enum ['super_admin', 'usuario']",
  "ativo": "boolean",
  "criado_em": "timestamp"
}
```

### Coleção: `membros_igreja`
```json
{
  "id": "string (auto)",
  "usuario_id": "string",
  "igreja_id": "string",
  "tipo": "enum ['admin', 'membro']",
  "status": "enum ['pendente', 'aprovado', 'banido']",
  "data_entrada": "timestamp"
}
```

### Coleção: `posts`
```json
{
  "id": "string (auto)",
  "igreja_id": "string",
  "autor_id": "string",
  "titulo": "string",
  "conteudo": "string (HTML sanitizado)",
  "imagem_url": "string | null",
  "comentarios_ativos": "boolean (padrão: true)",
  "curtidas_count": "number (padrão: 0)",
  "status": "enum ['rascunho', 'publicado', 'agendado']",
  "data_publicacao": "timestamp",
  "criado_em": "timestamp",
  "atualizado_em": "timestamp"
}
```

### Coleção: `comentarios`
```json
{
  "id": "string (auto)",
  "post_id": "string",
  "usuario_id": "string",
  "conteudo": "string",
  "curtidas_count": "number (padrão: 0)",
  "criado_em": "timestamp"
}
```

### Coleção: `eventos`
```json
{
  "id": "string (auto)",
  "igreja_id": "string",
  "titulo": "string",
  "descricao": "string (HTML sanitizado)",
  "data": "timestamp",
  "horario": "string",
  "local": "string",
  "imagem_url": "string | null",
  "curtidas_count": "number (padrão: 0)",
  "tipo": "enum ['aberto', 'fechado']",
  "status": "enum ['rascunho', 'publicado', 'cancelado']",
  "criado_em": "timestamp"
}
```

### Coleção: `campos_evento`
```json
{
  "id": "string (auto)",
  "evento_id": "string",
  "label": "string",
  "tipo": "enum ['texto', 'select', 'numero', 'checkbox', 'textarea']",
  "obrigatorio": "boolean",
  "opcoes": ["string"] | null,
  "ordem": "number"
}
```

### Coleção: `inscricoes`
```json
{
  "id": "string (auto)",
  "evento_id": "string",
  "usuario_id": "string",
  "dados": "map (dinâmico)",
  "presente": "boolean (padrão: false)",
  "data_inscricao": "timestamp"
}
```

### Coleção: `curtidas`
```json
{
  "id": "string (auto)",
  "usuario_id": "string",
  "tipo": "enum ['post', 'evento', 'comentario']",
  "item_id": "string",
  "criado_em": "timestamp"
}
```

### Coleção: `atividades`
```json
{
  "id": "string (auto)",
  "igreja_id": "string",
  "usuario_id": "string",
  "tipo": "enum ['post_criado', 'evento_criado', 'evento_inscrito', 'post_curtido', 'evento_curtido', 'comentario_feito', 'comentario_curtido']",
  "item_id": "string",
  "item_tipo": "enum ['post', 'evento', 'comentario']",
  "metadata": {
    "titulo": "string",
    "conteudo": "string | null"
  },
  "criado_em": "timestamp"
}
```

---

## 🔗 Resumo de Relacionamentos

| Entidade | Relacionamento | Descrição |
|----------|---------------|-----------|
| `usuarios` → `igrejas` | N:N | via `membros_igreja` |
| `usuarios` → `posts` | 1:N | Autor dos posts |
| `usuarios` → `comentarios` | 1:N | Autor dos comentários |
| `usuarios` → `inscricoes` | 1:N | Inscrições em eventos |
| `usuarios` → `curtidas` | 1:N | Curtidas em itens |
| `igrejas` → `posts` | 1:N | Posts da igreja |
| `igrejas` → `eventos` | 1:N | Eventos da igreja |
| `igrejas` → `atividades` | 1:N | Feed de atividades |
| `posts` → `comentarios` | 1:N | Comentários no post |
| `posts` → `curtidas` | 1:N | Curtidas no post |
| `eventos` → `campos_evento` | 1:N | Campos do formulário |
| `eventos` → `inscricoes` | 1:N | Inscrições no evento |
| `eventos` → `curtidas` | 1:N | Curtidas no evento |
| `comentarios` → `curtidas` | 1:N | Curtidas no comentário |

---

## 🔐 Regras de Isolamento Multi-tenant

- Toda query contém filtro `igreja_id` (exceto dados globais do perfil)
- Middleware valida se usuário pertence à igreja (`membros_igreja`)
- Super admin tem acesso global
- Feed global (v2): mostra apenas igrejas com `publica: true`

---

## 📦 Firebase Storage

### Limites (Plano Gratuito)

| Recurso | Limite |
|---------|--------|
| Armazenamento | 5 GB |
| Download diário | 1 GB |
| Upload por arquivo | Variável |

### Estrutura de Pastas

```
/usuarios/{usuario_id}/perfil.jpg
/usuarios/{usuario_id}/capa.jpg
/igrejas/{igreja_id}/logo.png
/igrejas/{igreja_id}/capa.jpg
/posts/{post_id}/imagem.jpg
/eventos/{evento_id}/imagem.jpg
```

---

[← Voltar ao Índice](../README.md)
