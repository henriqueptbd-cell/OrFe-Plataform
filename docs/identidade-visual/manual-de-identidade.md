# 🔥 OrFe — Manual de Identidade Visual

> Documento gerado a partir da engenharia reversa das 10 telas HTML/Tailwind existentes do produto, cruzadas com a Visão do Produto (MVP multi-tenant para igrejas).
> ⚠️ Sempre que uma regra abaixo foi **inferida** (não está 100% consistente entre as telas), ela vem marcada com 🟡 **A padronizar** e uma recomendação.

---

## 1. Essência da Marca

**Nome:** OrFe (referência a "Oração" + "Fé")
**Propósito:** Conectar igrejas e membros através de eventos, feed de comunidade e gestão simples para líderes.
**Tom:** Acolhedor, caloroso, comunitário — nem corporativo demais, nem "gospel água com açúcar". Visual clean, com toques de calor humano (emoji, cantos bem arredondados, cores quentes).

**Público:** Pastores/administradores de igreja (painel), membros (área logada), visitantes (landing pública).

---

## 2. Logotipo

- **Símbolo atual:** ícone de raio/relâmpago estilizado (SVG `M13 10V3L4 14h7v7l9-11h-7z`), em algumas telas substituído por emoji 🔥 (chama) dentro de um quadrado laranja `rounded-xl`/`rounded-2xl`.
- **Wordmark:** "OrFe" em `font-black` ou `font-extrabold`, sem espaçamento entre as sílabas, primeira letra maiúscula seguida de "Fe" (não é "OrFé" com acento).

🟡 **A padronizar:** o símbolo aparece ora como **SVG de raio**, ora como **emoji 🔥**. São dois conceitos visuais diferentes (energia/velocidade vs. fé/paixão). É preciso escolher **um único símbolo oficial** (recomendo vetorizar a chama em SVG, já que reforça melhor o significado do nome e evita depender do emoji do sistema operacional do usuário, que renderiza diferente em Android/iOS/Windows).

**Área de proteção mínima:** não definida nas telas — recomenda-se especificar ao vetorizar o símbolo final.

**Uso em fundo escuro:** não testado em nenhuma tela (todas as telas são sobre fundo claro). Precisa ser criada uma versão do logo para fundos escuros/imagens (ex: sobre banners de capa).

---

## 3. Paleta de Cores

### 3.1 Cor primária (marca)

| Token           | Hex       | Uso                                                                                                        |
| --------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| `Laranja OrFe`  | `#FF6B35` | Cor de marca. Botões primários, links ativos, ícones de destaque, badges de status "ativo", bordas de foco |
| `Laranja Hover` | `#e05a2b` | Estado hover/pressed de botões e links laranja                                                             |

### 3.2 Fundos (neutros)

| Token               | Hex/Classe                           | Uso                                                                                |
| ------------------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| Fundo base (quente) | `#FFFDFB`                            | Fundo de quase todas as telas (login, dashboard, feed de eventos, perfis, landing) |
| Fundo base (frio)   | `#F8F9FA` (Tailwind `bg-[#F8F9FA]`)  | Usado **somente** na tela de Feed                                                  |
| Texto principal     | `#1A1A1A`                            | Títulos e corpo de texto de alta ênfase                                            |
| Cinzas de apoio     | `gray-400` / `gray-500` / `gray-600` | Texto secundário, legendas, placeholders                                           |
| Bordas              | `gray-50` / `gray-100` / `gray-200`  | Divisores, bordas de card, bordas de input                                         |

🟡 **A padronizar:** há **dois tons de fundo diferentes** para telas internas (`#FFFDFB` "creme" vs `#F8F9FA` "cinza frio" só no Feed). Recomendo unificar em `#FFFDFB` em todo o produto, para manter a identidade "quente" da marca — o `#F8F9FA` foge da paleta e parece ter sido copiado de outro template.

### 3.3 Cores semânticas (estados e categorias)

Usadas como "tags" de papel/função (hierarquia da igreja, status de inscrição, categorias):

| Cor                | Fundo claro               | Texto                       | Uso observado                                              |
| ------------------ | ------------------------- | --------------------------- | ---------------------------------------------------------- |
| 🟠 Laranja         | `orange-50`               | `#FF6B35`                   | Papel "Pastor", destaque de igreja, badge de crescimento   |
| 🔵 Azul            | `blue-50`/`blue-100`      | `blue-500`/`600`            | Papel "Líder de Jovens", notificações, categoria "eventos" |
| 🟣 Roxo            | `purple-50`/`100`         | `purple-600`                | Papel "Diácono", posts publicados                          |
| 🟢 Verde/Esmeralda | `emerald-50` / `green-50` | `emerald-600` / `green-600` | Crescimento positivo (+12 este mês), status "Confirmado"   |
| 🟡 Âmbar           | `amber-50`                | `amber-600`                 | Status "Pendente"                                          |
| 🔴 Vermelho        | (sem fundo definido)      | `red-500`                   | Ação destrutiva ("Remover"), ícone de curtir/like          |

🟡 **A padronizar:** essas cores estão sendo usadas **ao mesmo tempo** para (a) papéis hierárquicos da igreja, (b) categorias de conteúdo e (c) status de sistema (confirmado/pendente). Isso é arriscado: se um "Diácono" (roxo) e um "post publicado" (roxo) aparecerem na mesma tela, fica ambíguo. Recomendo separar em **duas escalas**:

- **Escala de papéis/hierarquia** (Pastor, Líder, Diácono, Secretária, Membro) — cores fixas por papel.
- **Escala de status de sistema** (Confirmado=verde, Pendente=âmbar, Cancelado=vermelho) — reservada exclusivamente para status.

---

## 4. Tipografia

**Fonte:** [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts), pesos 400 a 900.

🟡 **Bug técnico encontrado:** em várias telas (Dashboard, Criar Igreja, Perfil da Igreja, Login, Perfil do Usuário) o import da fonte está com erro de sintaxe:

```css
/* ❌ Errado (encontrado em 5 das 10 telas) */
@import url("...family=Inter:wght=400;500;600;700;800&display=swap");

/* ✅ Correto (usado nas outras telas) */
@import url("...family=Inter:wght@400;500;600;700;800&display=swap");
```

O `=` no lugar do `@` faz o Google Fonts ignorar os pesos especificados e carregar só o peso padrão (400), quebrando toda a hierarquia visual de `font-bold`/`font-extrabold`/`font-black` nessas telas. **Corrigir em todas as páginas antes de seguir para produção.**

Além disso, a tela "Minhas Inscrições" nem importa a fonte via `<style>` — referencia um `style.css` externo que não foi enviado. **A padronizar:** decidir se a fonte deve vir de um arquivo CSS global único (recomendado, para não repetir o `@import` em cada HTML) em vez de inline em cada página.

### 4.1 Escala tipográfica

| Uso                            | Classe Tailwind               | Peso                                      |
| ------------------------------ | ----------------------------- | ----------------------------------------- |
| Título hero (landing)          | `text-5xl md:text-6xl`        | `font-extrabold`                          |
| Título de página               | `text-2xl` a `text-3xl`       | `font-extrabold`                          |
| Título de card/seção           | `text-xl`                     | `font-extrabold` / `font-bold`            |
| Corpo                          | `text-sm` / `text-base`       | `font-medium` / `font-normal`             |
| Legenda / metadado             | `text-xs`                     | `font-semibold`                           |
| Micro-label (badges, tags)     | `text-[10px]` / `text-[11px]` | `font-bold`, `uppercase`, `tracking-wide` |
| Números de destaque (métricas) | `text-3xl`                    | `font-black` / `font-extrabold`           |

🟡 **A padronizar:** `font-bold` e `font-extrabold` são usados de forma intercambiável para o mesmo nível hierárquico em telas diferentes (ex: título de card às vezes é `font-bold`, às vezes `font-extrabold`). Recomendo fixar uma tabela única peso→nível e aplicar via componente, não caso a caso.

---

## 5. Formas, Espaçamento e Elevação

### 5.1 Border radius — assinatura visual forte do produto

O raio de borda **muito generoso** é a marca registrada visual do OrFe (nada de cantos quase retos). Escala observada:

| Token            | Valor   | Uso                                                                        |
| ---------------- | ------- | -------------------------------------------------------------------------- |
| `rounded-xl`     | 0.75rem | Ícones pequenos, botões de ação secundários, inputs em contextos compactos |
| `rounded-2xl`    | 1rem    | Botões primários, inputs, avatares quadrados menores                       |
| `rounded-3xl`    | 1.5rem  | Cards de conteúdo (landing, perfil de igreja)                              |
| `rounded-[2rem]` | 2rem    | Cards de conteúdo (dashboard, evento, inscrições)                          |
| `rounded-full`   | 100%    | Avatares circulares, pills de filtro, badges de status                     |

🟡 **A padronizar:** `rounded-3xl` (1.5rem) e `rounded-[2rem]` (2rem) são usados **para o mesmo tipo de componente (card branco de seção)** em telas diferentes, sem critério aparente. Recomendo fixar: **cards de conteúdo = `rounded-[2rem]`** em todo o produto, e reservar `rounded-3xl` para elementos de mídia (imagens, banners).

### 5.2 Sombras

- `shadow-sm` — padrão para cards em repouso.
- `shadow-md` — hover de card, botões primários, elementos "flutuantes" (dropdown de igreja ativa).
- `shadow-xl` — apenas na barra de busca da landing page (destaque máximo).

### 5.3 Grid e espaçamento

- Container padrão: `max-w-4xl` a `max-w-7xl` conforme densidade da tela (formulários estreitos = `max-w-2xl`/`max-w-4xl`; feeds/grids = `max-w-6xl`/`max-w-7xl`).
- Espaçamento vertical entre blocos: `space-y-6` / `space-y-8`.
- Padding interno de card: `p-6` (compacto) ou `p-8` (destaque).
- Grid de cards: `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3` ou `lg:grid-cols-4`.

---

## 6. Iconografia

🟡 **Inconsistência importante:** o produto mistura dois sistemas de ícone diferentes:

1. **Emoji nativos** (🔥📅👥⭐🔍👑❤️💬🔄🏅) — maioria das telas.
2. **SVG (estilo Heroicons outline)** — usados pontualmente em Explorar Eventos, Feed e Perfil da Igreja (seta voltar, busca, sino, filtro, coração).

Isso gera inconsistência visual (peso de traço, tamanho, alinhamento óptico) e problemas de acessibilidade/i18n (emoji renderiza diferente por SO). **Recomendação:** migrar 100% para um único set de ícones SVG (ex: Heroicons ou Lucide), mantendo emoji **apenas** em conteúdo gerado pelo usuário (ex: dentro de posts), nunca em elementos de interface.

---

## 7. Componentes

### 7.1 Botões

| Variante      | Estilo                                                                                            | Uso                                                   |
| ------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Primário      | `bg-[#FF6B35] text-white rounded-2xl font-bold hover:bg-[#e05a2b] shadow-sm/md shadow-orange-100` | Ações principais (Entrar, Inscrever-se, Criar Igreja) |
| Secundário    | `bg-gray-100 text-[#1A1A1A] rounded-xl hover:bg-[#FF6B35] hover:text-white`                       | Ações contextuais (Participar em cards de evento)     |
| Ghost/Outline | `border border-gray-200 bg-white hover:bg-gray-50`                                                | Ações neutras (Cancelar, Filtros, Editar)             |
| Texto/Link    | `text-[#FF6B35] font-bold hover:underline`                                                        | Ações terciárias (Ver detalhes, Explorar mais)        |
| Pill (filtro) | `rounded-full` + cor sólida (ativo) ou outline (inativo)                                          | Filtros de categoria/data                             |

🟡 **A padronizar:** o padding vertical de botão "primário" varia entre `py-2.5`, `py-3`, `py-3.5` e `py-4` sem regra clara de quando usar cada um. Recomendo fixar **3 tamanhos** (sm/md/lg) documentados.

### 7.2 Inputs e Formulários

- `bg-white border border-gray-200 rounded-2xl px-4 py-3.5 outline-none focus:border-[#FF6B35] text-sm transition`
- Label: `text-sm font-semibold text-gray-700`, sempre acima do campo.
- Upload de imagem: área tracejada `border-2 border-dashed border-gray-200 rounded-[2rem]` com hover `border-[#FF6B35]`.
- Radio button: `accent-[#FF6B35]` (só aparece **uma vez**, no formulário de inscrição em evento).

🟡 **Faltando:** não há padrão definido para: estado de **erro de validação** (borda vermelha + mensagem), estado **disabled**, **checkbox** (só radio foi usado), campo de **upload com preview** da imagem selecionada, nem **select customizado** (usa `<select>` nativo do navegador, com estilo aplicado só parcialmente).

### 7.3 Cards

- Card padrão: `bg-white rounded-[2rem] border border-gray-100 shadow-sm p-6/p-8`.
- Card de métrica (dashboard): ícone em caixa colorida `rounded-xl` + número grande `font-black` + label + badge de variação.
- Card de evento: imagem `h-56` + badge de data flutuante (canto superior esquerdo, formato calendário) + botão de "salvar" (coração) no canto superior direito.

### 7.4 Avatares

- **Usuário:** círculo (`rounded-full`), iniciais brancas sobre fundo laranja, `font-bold`.
- **Igreja:** quadrado arredondado (`rounded-xl`/`rounded-2xl`/`rounded-[1.5rem]`), iniciais brancas ou coloridas.

🟡 **Inconsistência encontrada:** no header do Dashboard Admin, o avatar do usuário "João Silva" está **quadrado** (`rounded-lg`), quebrando a regra "usuário = círculo" usada em Feed, Perfil do Usuário e Explorar Eventos. **Corrigir para `rounded-full`** nesse componente.

### 7.5 Badges / Pills / Tags

- Status/categoria: `text-[11px] font-bold px-2.5 py-1 rounded-full` + par de cores claro/escuro da mesma família (ex: `bg-blue-50 text-blue-600`).
- Contador com destaque: `text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full` (crescimento no dashboard).

### 7.6 Navegação

- **Sidebar** (só existe no Dashboard Admin): fundo branco, item ativo com fundo `orange-50` + texto laranja + sombra sutil; itens inativos em `gray-500`.
- **Header/Navbar** (telas públicas e de membro): logo à esquerda, ações (notificação/avatar) à direita, `sticky top-0` só no Feed.
- **Tabs internas:** aparecem em **dois estilos diferentes**:
  - Perfil da Igreja → estilo **underline** (`border-b-2`).
  - Explorar Eventos → estilo **pill** (`rounded-full` preenchido).

🟡 **A padronizar:** escolher **um único padrão de abas** para o produto inteiro. Sugestão: `pill` para filtros de conteúdo (busca/descoberta) e `underline` reservado só para navegação dentro de um perfil (igreja/usuário) — documentando a regra para não repetir a ambiguidade.

🟡 **Faltando:** não existe **navegação mobile** (bottom tab bar ou menu hambúrguer) em nenhuma tela — todas assumem viewport desktop/tablet com sidebar ou header horizontal. Como o produto é para membros de igreja (uso majoritariamente mobile), isso é uma lacuna crítica de design a resolver antes do MVP.

### 7.7 Tabela (uso único — Dashboard Admin)

- Cabeçalho: `text-[11px] font-bold text-gray-400 uppercase tracking-wider`.
- Linhas: `divide-y divide-gray-50`, hover `bg-gray-50/50`.
- Só existe uma tabela no protótipo (Membros); não há padrão para tabelas com paginação, ordenação ou seleção múltipla — necessários para "Exportar inscrições (CSV/Excel)" e "Gerenciar membros (aprovar/banir)" citados na Visão do Produto.

### 7.8 Barra de progresso

- `bg-gray-100 h-2.5 rounded-full` + preenchimento `bg-[#FF6B35] h-full rounded-full` — usada para vagas de evento. Pode ser reaproveitada para outras métricas de progresso.

### 7.9 Comentários / Feed social

- Avatar circular pequeno (`w-7 h-7` a `w-9 h-9`) + nome em `font-bold` + timestamp relativo (`há 2h`) em `text-gray-400`.
- Card de post no feed: avatar + texto narrativo + rodapé com ações (curtir/comentar/repostar) separado por `border-t`.

---

## 8. Voz e Linguagem na Interface

- 100% em **português do Brasil**, tom direto e caloroso.
- Uso de **primeira pessoa do plural implícita** em CTAs de ação ("Criar Igreja", "Inscrever-se", "Seguir / Participar").
- Timestamps relativos e informais ("há 2h", "2d atrás").
- Emojis usados livremente como reforço visual em textos de sistema (ex.: "🔥 Mais de 1.200 eventos cadastrados").
- Mensagens de estado vazio, erro e confirmação **não foram encontradas em nenhuma tela** — precisam ser escritas (ver seção 9).

---

## 9. Lacunas de Design a Resolver (fora do que já está inconsistente acima)

Com base na Visão do Produto, estes componentes são necessários para o MVP mas **não existem em nenhuma das 10 telas enviadas**:

- [ ] Estados vazios (ex: "nenhum evento ainda", "nenhuma inscrição")
- [ ] Estados de erro/validação de formulário
- [ ] Toast/notificação de sucesso (ex: "Post publicado com sucesso")
- [ ] Modal/dialog (confirmar exclusão de post, confirmar cancelamento de inscrição)
- [ ] Tela de moderação de comentários (citada no escopo do admin)
- [ ] Tela de aprovar/banir membros (citada no escopo do admin)
- [ ] Tela de exportação de inscrições (CSV/Excel)
- [ ] CRUD de posts (criar/editar/agendar) — só existe o _feed de leitura_
- [ ] Personalização da página da igreja (upload de capa/logo, cores) — só existe upload no "Criar Igreja"
- [ ] Navegação mobile (bottom bar ou drawer)
- [ ] Paginação real de listas (só existe botão "Carregar mais")
- [ ] Loading/skeleton states
- [ ] Página 404 / erro genérico

---

## 10. Resumo Rápido (cola para handoff com devs/designers)

```
Cor primária:     #FF6B35 (hover #e05a2b)
Fundo padrão:      #FFFDFB
Texto principal:   #1A1A1A
Fonte:             Inter (400–900), @import correto: wght@400;500;600;700;800
Radius padrão:     rounded-2xl (botões/inputs) · rounded-[2rem] (cards)
Sombra padrão:     shadow-sm (repouso) · shadow-md (hover/destaque)
Avatar usuário:    círculo, iniciais, fundo laranja
Avatar igreja:     quadrado arredondado, iniciais
Ícones:            padronizar em um único set SVG (recomendado: substituir emoji de UI)
```

---

_Documento gerado por engenharia reversa das telas HTML do protótipo OrFe. Atualize este manual conforme decisões de padronização forem tomadas — ele deve ser a fonte única de verdade para qualquer parceiro técnico que entrar no projeto._
