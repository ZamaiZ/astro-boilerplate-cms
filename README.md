# astro-boilerplate

Template Astro estático para sites institucionais gerados pelo **Monolith SEO**. O contrato de dados é **`src/data/site.json`** (sobrescrito em build pelo gerador Python).

## Contrato `site.json`

```json
{
  "company": {
    "name": "",
    "category": "",
    "city": "",
    "state": "",
    "phone": "",
    "whatsapp": "",
    "description": "",
    "services": [],
    "primary_color": "#2563EB"
  },
  "domain": "exemplo.com.br",
  "theme": { "id": "institutional-v1" }
}
```

`theme` é opcional e reservado para futuras variações de layout.

## Comandos

| Comando | Descrição |
|--------|-----------|
| `pnpm install` | Dependências |
| `pnpm dev` | Dev em `localhost:4321` |
| `pnpm build` | Saída em `dist/` |
| `pnpm preview` | Preview da build |
| `pnpm check` | `astro check` (tipos) |

## Estrutura principal

- `src/layouts/InstitutionalLayout.astro` — SEO, OG/Twitter, JSON-LD LocalBusiness
- `src/components/layout/` — cabeçalho e rodapé
- `src/components/sections/` — hero, serviços, sobre, CTA
- `src/styles/` — tokens e estilos globais
- `src/lib/palette.ts` — variáveis CSS derivadas da cor primária

## Integração Monolith SEO

O serviço Python copia esta pasta para `generated/<domínio>/`, grava `site.json` e executa `pnpm install` + `astro build`. O caminho do template resolve assim:

1. Variável de ambiente **`ASTRO_TEMPLATE_PATH`** (caminho absoluto para esta pasta), ou
2. Pasta irmã `../astro-boilerplate` em relação ao repositório `monolith-seo`, ou
3. Legado `packages/astro-base` dentro do monorepo.
