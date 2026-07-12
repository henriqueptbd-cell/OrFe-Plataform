# ⛪ Configuração da Igreja & Página Pública

## Página Pública

### URL
`https://orfe.com.br/{slug-da-igreja}`

### Componentes
- Header com capa, logo e nome da igreja
- Menu: Início, Eventos, Sobre
- Feed de posts (últimos 10, paginado)
- Eventos próximos (destaque)
- Rodapé com informações

---

## Configurações (Admin)

### Personalização
| Campo | Tipo | Limite |
|-------|------|--------|
| Nome da igreja | Texto | Obrigatório |
| Descrição | Textarea | Máx 500 caracteres |
| Logo | Upload imagem | PNG/JPG, máx 2MB |
| Capa | Upload imagem | PNG/JPG, máx 5MB |
| Cor primária | Color picker | Hex |
| Slug | Texto | Único, URL amigável |

### Regras
- Slug não pode ser alterado após criação
- Imagens são redimensionadas automaticamente
- Logo: 200x200px
- Capa: 1200x400px

---

## Endpoints da API

| Método | Rota | Descrição | Permissão |
|--------|------|-----------|-----------|
| GET | /api/igrejas/:slug | Dados públicos da igreja | Pública |
| GET | /api/igrejas/:slug/posts | Posts públicos | Pública |
| GET | /api/igrejas/:slug/eventos | Eventos públicos | Pública |
| PUT | /api/admin/igreja | Atualizar configurações | Admin |
| POST | /api/admin/igreja/logo | Upload logo | Admin |
| POST | /api/admin/igreja/capa | Upload capa | Admin |

[📚 Voltar ao Índice](../README.md)