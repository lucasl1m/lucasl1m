create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz default now()
);

alter table public.contact_submissions enable row level security;

create policy "Allow anonymous insert"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

create policy "No public read"
  on public.contact_submissions
  for select
  to anon
  using (false);
