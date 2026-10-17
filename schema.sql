-- Run this in Supabase Dashboard > SQL Editor.
create table if not exists public.birth_charts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  birth_name text not null,
  birth_date date not null,
  birth_time time not null,
  birth_place text not null,
  timezone text not null default 'Asia/Kolkata',
  chart_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists birth_charts_user_created_idx on public.birth_charts(user_id, created_at desc);
alter table public.birth_charts enable row level security;
drop policy if exists "Users can read their own birth charts" on public.birth_charts;
create policy "Users can read their own birth charts" on public.birth_charts for select to authenticated using (auth.uid() = user_id);
drop policy if exists "Users can insert their own birth charts" on public.birth_charts;
create policy "Users can insert their own birth charts" on public.birth_charts for insert to authenticated with check (auth.uid() = user_id);
drop policy if exists "Users can update their own birth charts" on public.birth_charts;
create policy "Users can update their own birth charts" on public.birth_charts for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
drop policy if exists "Users can delete their own birth charts" on public.birth_charts;
create policy "Users can delete their own birth charts" on public.birth_charts for delete to authenticated using (auth.uid() = user_id);
