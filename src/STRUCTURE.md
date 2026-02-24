# Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis
│   ├── layout/      # Header, Footer (export em index)
│   ├── Logo/        # Logo SVG (dark/light)
│   ├── ui/          # Primitivos (button, select, card, etc.)
│   └── ...          # Annotation, IconBox, TitleSection, etc.
├── pages/           # Páginas e seções
│   ├── home.tsx     # Página principal
│   ├── not-found.tsx
│   └── home/
│       └── components/  # Intro, Experience, Skills, Projects, Contact
├── data/            # Dados (experiences, profile)
├── hooks/           # useGithubBio, useGithubStats
├── lib/             # utils, supabase, axios
├── locales/         # i18n (pt-BR, en)
├── routes/          # React Router
├── schemas/         # Validação (Zod)
├── stores/          # Zustand (theme, ui)
├── types/            # constants, interfaces
└── utils/            # format, motion
```
