<h1 align="left">Hello 👋</h1>

<img align="right" src="./src/assets/static/react1.png" width="150"/>
<p align="left">Here is a little summary about me </p>

<ul>
  <li><p align="left">🎓 Graduated in <strong>Computer Science</strong> at UFCG.</p></li>
  <li><p align="left">👨‍💻 I am a Front-End Developer & Design Enthusiast</p></li>
  <li><p align="left">⚡️ Skills: ReactJS, React Native, Angular, NextJS</p></li>
  <li><p align="left">🔩 Tools: Figma, Git and Github</p></li>
  <li><p align="left">🧪 Test: Cypress e Jest</p></li>
</ul>

---

## Tech stack

- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS** – estilos
- **Framer Motion** – animações nas seções
- **TanStack Query** – dados remotos (bio do GitHub)
- **Zustand** – estado de UI
- **React Hook Form** + **Zod** – formulário de contato com validação
- **Supabase** – persistência das mensagens de contato
- **EmailJS** – envio de e-mail (fallback)
- Componentes base em **Tailwind** + **class-variance-authority** e **tailwind-merge** (estilo shadcn/ui)

## Setup

1. `npm install`
2. Crie um arquivo `.env` a partir de `.env.example` e preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` para o formulário de contato.
3. No Supabase, execute o SQL em `supabase-contact-table.sql` para criar a tabela `contact_submissions`.
4. `npm run dev` para desenvolvimento ou `npm run build` para produção.

## Deploy na Vercel

1. Conecte o repositório ao projeto na Vercel.
2. Em **Settings > Environment Variables**, adicione:
   - `VITE_SUPABASE_URL` – URL do projeto no Supabase (ex.: `https://xxxx.supabase.co`)
   - `VITE_SUPABASE_ANON_KEY` – chave anon/public do Supabase (Project Settings > API)
3. Faça um novo deploy (ou redeploy) para as variáveis serem aplicadas no build.
