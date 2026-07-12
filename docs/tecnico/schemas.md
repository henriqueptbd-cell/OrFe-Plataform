# 📋 Schemas - OrFe

Documentação técnica das coleções do Firestore.

---

## `igrejas`

| Campo              | Tipo           | Obrigatório | Descrição                               |
| ------------------ | -------------- | ----------- | --------------------------------------- |
| id                 | string (auto)  | ✅          | ID gerado pelo Firestore                |
| nome               | string         | ✅          | Nome da igreja                          |
| descricao          | string         | ✅          | Descrição da igreja                     |
| cor_primaria       | string (hex)   | ✅          | Cor primária (#000000)                  |
| logo_url           | string         | ❌          | URL da logo no Storage                  |
| capa_url           | string         | ❌          | URL da capa no Storage                  |
| slug               | string (único) | ✅          | URL amigável                            |
| publica            | boolean        | ✅          | Aparece no feed global? (default: true) |
| localizacao.cidade | string         | ❌          | Cidade                                  |
| localizacao.estado | string         | ❌          | Estado                                  |
| localizacao.lat    | number         | ❌          | Latitude                                |
| localizacao.lng    | number         | ❌          | Longitude                               |
| criado_em          | timestamp      | ✅          | Data de criação                         |

---

## `usuarios`

| Campo        | Tipo          | Obrigatório | Descrição                     |
| ------------ | ------------- | ----------- | ----------------------------- |
| id           | string (auto) | ✅          | ID = UID do Firebase Auth     |
| nome         | string        | ✅          | Nome completo                 |
| email        | string        | ✅          | Email principal               |
| google_id    | string        | ✅          | ID do Google OAuth            |
| foto_perfil  | string        | ❌          | URL da foto de perfil         |
| capa_perfil  | string        | ❌          | URL da capa do perfil         |
| sobre        | string        | ❌          | Bio (máx 300 caracteres)      |
| igrejas      | array[string] | ✅          | IDs das igrejas que participa |
| igreja_ativa | string        | ✅          | ID da igreja atual            |
| tipo_global  | enum          | ✅          | 'super_admin' \| 'usuario'    |
| ativo        | boolean       | ✅          | Usuário ativo?                |
| criado_em    | timestamp     | ✅          | Data de criação               |

---

## `membros_igreja`

| Campo        | Tipo          | Obrigatório | Descrição                            |
| ------------ | ------------- | ----------- | ------------------------------------ |
| id           | string (auto) | ✅          | `{usuario_id}_{igreja_id}`           |
| usuario_id   | string        | ✅          | ID do usuário                        |
| igreja_id    | string        | ✅          | ID da igreja                         |
| tipo         | enum          | ✅          | 'admin' \| 'membro'                  |
| status       | enum          | ✅          | 'pendente' \| 'aprovado' \| 'banido' |
| data_entrada | timestamp     | ✅          | Data de entrada                      |

---

## `posts`

| Campo              | Tipo          | Obrigatório | Descrição                               |
| ------------------ | ------------- | ----------- | --------------------------------------- |
| id                 | string (auto) | ✅          | ID gerado                               |
| igreja_id          | string        | ✅          | Igreja dona do post                     |
| autor_id           | string        | ✅          | Usuário autor                           |
| titulo             | string        | ✅          | Título                                  |
| conteudo           | string (HTML) | ✅          | Conteúdo sanitizado                     |
| imagem_url         | string        | ❌          | Imagem de capa                          |
| comentarios_ativos | boolean       | ✅          | Comentários liberados? (default: true)  |
| curtidas_count     | number        | ✅          | Contador (default: 0)                   |
| status             | enum          | ✅          | 'rascunho' \| 'publicado' \| 'agendado' |
| data_publicacao    | timestamp     | ❌          | Data agendada                           |
| criado_em          | timestamp     | ✅          | Data de criação                         |
| atualizado_em      | timestamp     | ✅          | Última atualização                      |

---

## `comentarios`

| Campo          | Tipo          | Obrigatório | Descrição             |
| -------------- | ------------- | ----------- | --------------------- |
| id             | string (auto) | ✅          | ID gerado             |
| post_id        | string        | ✅          | Post comentado        |
| usuario_id     | string        | ✅          | Autor                 |
| conteudo       | string        | ✅          | Texto do comentário   |
| curtidas_count | number        | ✅          | Contador (default: 0) |
| criado_em      | timestamp     | ✅          | Data                  |

---

## `eventos`

| Campo          | Tipo          | Obrigatório | Descrição                                |
| -------------- | ------------- | ----------- | ---------------------------------------- |
| id             | string (auto) | ✅          | ID gerado                                |
| igreja_id      | string        | ✅          | Igreja dona                              |
| titulo         | string        | ✅          | Título                                   |
| descricao      | string (HTML) | ✅          | Descrição                                |
| data           | timestamp     | ✅          | Data do evento                           |
| horario        | string        | ✅          | Horário                                  |
| local          | string        | ✅          | Local                                    |
| imagem_url     | string        | ❌          | Capa do evento                           |
| curtidas_count | number        | ✅          | Contador (default: 0)                    |
| tipo           | enum          | ✅          | 'aberto' \| 'fechado'                    |
| status         | enum          | ✅          | 'rascunho' \| 'publicado' \| 'cancelado' |
| criado_em      | timestamp     | ✅          | Data de criação                          |

---

## `campos_evento`

| Campo       | Tipo          | Obrigatório | Descrição                                                   |
| ----------- | ------------- | ----------- | ----------------------------------------------------------- |
| id          | string (auto) | ✅          | ID gerado                                                   |
| evento_id   | string        | ✅          | Evento dono                                                 |
| label       | string        | ✅          | Nome do campo                                               |
| tipo        | enum          | ✅          | 'texto' \| 'select' \| 'numero' \| 'checkbox' \| 'textarea' |
| obrigatorio | boolean       | ✅          | Campo obrigatório?                                          |
| opcoes      | array[string] | ❌          | Opções (para select)                                        |
| ordem       | number        | ✅          | Ordem no formulário                                         |

---

## `inscricoes`

| Campo          | Tipo          | Obrigatório | Descrição                        |
| -------------- | ------------- | ----------- | -------------------------------- |
| id             | string (auto) | ✅          | ID gerado                        |
| evento_id      | string        | ✅          | Evento                           |
| usuario_id     | string        | ✅          | Usuário inscrito                 |
| dados          | map           | ✅          | Respostas do formulário dinâmico |
| presente       | boolean       | ✅          | Check-in (default: false)        |
| data_inscricao | timestamp     | ✅          | Data da inscrição                |

---

## `curtidas`

| Campo      | Tipo          | Obrigatório | Descrição                          |
| ---------- | ------------- | ----------- | ---------------------------------- |
| id         | string (auto) | ✅          | ID gerado                          |
| usuario_id | string        | ✅          | Quem curtiu                        |
| tipo       | enum          | ✅          | 'post' \| 'evento' \| 'comentario' |
| item_id    | string        | ✅          | ID do item curtido                 |
| criado_em  | timestamp     | ✅          | Data                               |

---

## `atividades`

| Campo             | Tipo          | Obrigatório | Descrição                          |
| ----------------- | ------------- | ----------- | ---------------------------------- |
| id                | string (auto) | ✅          | ID gerado                          |
| igreja_id         | string        | ✅          | Igreja da atividade                |
| usuario_id        | string        | ✅          | Usuário que gerou                  |
| tipo              | enum          | ✅          | Tipo da atividade                  |
| item_id           | string        | ✅          | ID do item relacionado             |
| item_tipo         | enum          | ✅          | 'post' \| 'evento' \| 'comentario' |
| metadata.titulo   | string        | ❌          | Título do item                     |
| metadata.conteudo | string        | ❌          | Trecho do conteúdo                 |
| criado_em         | timestamp     | ✅          | Data                               |

---

## 🔗 Índices Compostos

| Coleção        | Campos                             | Ordem          |
| -------------- | ---------------------------------- | -------------- |
| posts          | igreja_id, status, data_publicacao | ASC, ASC, DESC |
| eventos        | igreja_id, status, data            | ASC, ASC, ASC  |
| inscricoes     | evento_id, data_inscricao          | ASC, DESC      |
| inscricoes     | usuario_id, data_inscricao         | ASC, DESC      |
| atividades     | igreja_id, criado_em               | ASC, DESC      |
| atividades     | usuario_id, criado_em              | ASC, DESC      |
| comentarios    | post_id, criado_em                 | ASC, ASC       |
| curtidas       | usuario_id, item_id                | ASC, ASC       |
| membros_igreja | usuario_id, igreja_id              | ASC, ASC       |
| membros_igreja | igreja_id, status                  | ASC, ASC       |

---

[← Voltar ao Índice](../README.md)
