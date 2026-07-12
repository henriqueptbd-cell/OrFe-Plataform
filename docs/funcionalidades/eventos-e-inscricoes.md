markdown
# 🎫 Eventos e Inscrições

## CRUD de Eventos (Admin)

### Criar Evento
| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Título | Texto | ✅ |
| Descrição | Rich text | ✅ |
| Data | Date | ✅ |
| Horário | Time | ✅ |
| Local | Texto | ✅ |
| Imagem | Upload | ❌ |
| Tipo | Aberto/Fechado | ✅ |
| Status | Rascunho/Publicado/Cancelado | ✅ |

---

## Formulário Dinâmico (Admin)

### Criar Campos Personalizados

**Tipos disponíveis:**
- Texto curto
- Texto longo (textarea)
- Número
- Select (dropdown)
- Checkbox

**Configuração por campo:**
- Label (ex: "Tamanho camiseta")
- Tipo
- Obrigatório: Sim/Não
- Opções (para Select): Lista separada por vírgula
- Ordem (drag and drop)

**Regras:**
- Máximo 20 campos por evento
- Pode editar campos mesmo após inscrições
- Excluir campo = perde dados daquele campo

---

## Fluxo de Inscrição (Membro)
- Membro vê evento aberto
- Clica "Inscrever-se"
- Preenche formulário dinâmico
- Confirma inscrição
- Vê mensagem de sucesso

---

## Gestão de Inscritos (Admin)

### Visualização
- Tabela com todos os inscritos
- Colunas: Nome, Email, Data inscrição, Campos dinâmicos
- Busca por nome/email
- Filtro por data

### Ações
- Marcar presença (check-in)
- Cancelar inscrição
- Exportar para CSV/Excel
- Enviar e-mail (v2)

### Exportação
- Formato: CSV
- Colunas: campos do formulário + data inscrição
- Nome do arquivo: `inscritos_{evento}_{data}.csv`

---

## Página Pública de Eventos

- Lista de eventos publicados
- Cards: imagem, título, data, local
- Filtro: Próximos / Passados
- Botão "Inscrever-se" (se logado)

---

## Endpoints da API

| Método | Rota | Descrição | Permissão |
|--------|------|-----------|-----------|
| GET | /api/eventos/:igreja_id | Listar eventos públicos | Pública |
| GET | /api/eventos/:id | Ver evento completo | Pública |
| POST | /api/admin/eventos | Criar evento | Admin |
| PUT | /api/admin/eventos/:id | Editar evento | Admin |
| DELETE | /api/admin/eventos/:id | Cancelar evento | Admin |
| POST | /api/admin/eventos/:id/campos | Adicionar campo | Admin |
| PUT | /api/admin/campos/:id | Editar campo | Admin |
| DELETE | /api/admin/campos/:id | Remover campo | Admin |
| POST | /api/eventos/:id/inscrever | Inscrever-se | Membro+ |
| GET | /api/admin/eventos/:id/inscritos | Listar inscritos | Admin |
| GET | /api/admin/eventos/:id/exportar | Exportar CSV | Admin |
| PUT | /api/admin/inscricoes/:id/presenca | Marcar presença | Admin |
| DELETE | /api/admin/inscricoes/:id | Cancelar inscrição | Admin |

[📚 Voltar ao Índice](../README.md)