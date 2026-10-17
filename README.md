# Astro World of Darshan

A Next.js starter for a public-facing astrology workspace with Supabase authentication, private saved-chart database, PDF export, and a compatibility workflow.

## Important honesty about chart calculations

This package is **not yet production-ready for real Vedic kundli calculations**. It deliberately labels the chart as a preview and does not fabricate planetary placements, houses, nakshatras, dashas, guna scores, or dosha results. Before publishing as a real astrology service, integrate and test the exact Prokerala endpoints enabled for your account, including timezone/place geocoding, error handling, rate limits and provider terms. The current `/api/chart` endpoint is a safe integration placeholder. The compatibility endpoint is also a placeholder and does not produce a fake score.

## Local setup

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and the Supabase URL is prefilled for project `uvogmyvicwwrjbypnysp`; paste your project publishable key into `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Keep provider client secrets server-side only; never add them to `NEXT_PUBLIC_*` variables or commit `.env.local`.
4. In Supabase Dashboard > SQL Editor, run `supabase/schema.sql`.
5. In Supabase Authentication settings, configure site URL and redirect URLs for localhost and your eventual production domain. Set email confirmation as desired.
6. Run `npm run dev` and open http://localhost:3000.

## Deploy

- Push this project to a private or public GitHub repository (never commit `.env.local`).
- Create a Render Web Service connected to the repository. Build command: `npm install && npm run build`; start command: `npm start`; runtime: Node.
- Add `NEXT_PUBLIC_SUPABASE_URL=https://uvogmyvicwwrjbypnysp.supabase.co` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (your publishable key) in Render Environment.
- Add `PROKERALA_CLIENT_ID` and `PROKERALA_CLIENT_SECRET` only after implementing and testing the provider adapter. These are server-only secrets.
- Add your Render domain to Supabase Auth's allowed redirect URLs.
- Test sign-up, email confirmation, sign-in, row-level data isolation, save/reopen, PDF download, API failures, mobile layout, and real chart calculations before announcing public launch.

## Current features

- Responsive branded landing page.
- Birth-detail form and explicitly labeled Sun-sign preview.
- Supabase email/password sign-up and sign-in.
- Private chart storage and saved-chart list (RLS protected).
- Client-generated PDF download.
- Compatibility intake UI with transparent placeholder response.
- Server API route that does not expose provider credentials.

## Security

Only use the Supabase anon/publishable key in the browser, protected by Row Level Security. Never put the Supabase service-role key, Prokerala secret, or other private credentials in client code, public commits, screenshots, or `NEXT_PUBLIC_*` variables. Rotate any secret that has already been published.

## Before public launch

Implement the exact supported astrology provider API, proper location coordinates/timezone validation, verified chart and matching logic, robust schema validation/rate limiting, account deletion/data export, privacy policy and terms. Astrology content should not be presented as guaranteed predictions or professional medical/legal/financial advice.
