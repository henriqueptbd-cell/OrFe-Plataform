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
  "foto_url": "string",
  "igreja_id": "string (referência)",
  "tipo": "enum ['super_admin', 'admin', 'membro']",
  "ativo": "boolean",
  "criado_em": "timestamp"
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
  "comentarios_ativos": "boolean",
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
  "presente": "boolean",
  "data_inscricao": "timestamp"
}
```

---

## 🔐 Regras de Isolamento Multi-tenant

- Toda query contém filtro `igreja_id`
- Middleware valida se usuário pertence à igreja
- Super admin tem acesso global

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
/logos/{igreja_id}/logo.png
/capas/{igreja_id}/capa.jpg
/posts/{igreja_id}/{post_id}.jpg
/eventos/{igreja_id}/{evento_id}.jpg
```

[📚 Voltar ao Índice](../README.md)
