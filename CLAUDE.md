# CLAUDE.md — temple-path (OMG Devotee)

Guidance for Claude Code when working in this repository.

## What this app is

A devotee-facing React SPA for Hindu temple visits: live crowd and parking status,
AI-flavoured "best time to visit" guidance, darshan booking, poojas and sevas,
donations, a temple store, a trip planner, a crowd heatmap, and the 14 km
Girivalam circuit at Tiruvannamalai.

It is a **front-end demo with no backend**. Every number comes from
`src/data/*.ts`, and "live" values are produced by `setInterval` drift in the
components. Treat the data files as the product's source of truth and keep them
factually accurate — the app's credibility rests on them.

`temple-path` is one of four sibling projects under `Projects/temple/`
(`omg-devotee`, `temple-admin`, `temple-super-admin` are the others). They are
separate apps; changes here do not propagate.

## Commands

```bash
npm run dev        # vite dev server
npm run build      # production build (also the fastest full typecheck in practice)
npm run lint       # eslint
npm run format     # prettier --write .
npx tsc --noEmit   # typecheck only
```

Node/npm. There is also a `bun.lock`, but `package-lock.json` is the one that is
kept current.

## Stack

- **React 19** + **TypeScript** + **Vite 7**
- **TanStack Router** — file-based routes in `src/routes/`, generated route tree
- **Tailwind CSS v4** (via `@tailwindcss/vite`) + **shadcn/ui** on Radix primitives
- **i18next** / react-i18next — 6 languages
- **Recharts** for charts, **Leaflet** for maps, **lucide-react** for icons
- `@/` is aliased to `src/`

## Layout

```
src/
  routes/        TanStack file routes. `_app.*` sit inside the AppShell layout.
                 `_app.temple.$slug.tsx` is the temple detail page.
  data/          All content. temples.ts is the master list; one module per
                 temple that has rich content (tiruvannamalai, trimbakeshwar,
                 batu-caves); girivalam, store, poojas, events, operations.
  features/      Feature folders, each with its own components/ (+ hooks/, utils/).
                 temple-details, booking, planner, heatmap, donations, store,
                 girivalam, membership, chat, dashboard, admin.
  components/
    layout/      AppShell, TopBar, nav-config.ts (single source for all nav)
    shared/      CrowdBadge, TempleCard, LazyPanel
    ui/          shadcn primitives
  locales/       en, ta, hi, kn, gu, mr
  i18n/config.ts Only `en` is bundled; the other five lazy-load on selection.
public/
  temples/<slug>/   Per-temple photography
  deities/, store/, images/
```

## How a temple is modelled

`src/data/temples.ts` exports `temples: Temple[]`. Everything else derives from
it — the explore list, search, state filters, the detail route loader, booking,
the sidebar, the dashboard. **Adding an entry to this array is enough to make a
temple exist across the whole app.**

Key conventions:

- `slug` is the URL key (`/temple/<slug>`, `/booking/<slug>`) and the key every
  per-temple branch in the UI switches on. Pick it once; changing it later means
  touching every branch.
- `id` must be unique. Some older code still branches on `t.id` (see
  `useHeatmapZones`) — prefer `t.slug` for anything new.
- `crowdPct`, `waitMin`, `parking.{lotA,lotB,overflow}` are percentages/minutes
  and should be internally consistent with `crowd` / `capacity`.
- `color` / `gradientFrom` / `gradientTo` drive the card gradient and act as the
  fallback when a photo fails to load (`templeThumb()`).
- `image` is the wide/banner photo, `thumb` the square-friendly card photo.
- **`state` holds a *country* for temples outside India** (`"USA"`,
  `"Malaysia"`), and `district` then holds the state/region. This is load-bearing
  in several places — see "International temples" below.

### Adding a new temple

1. Put photos in `public/temples/<slug>/`. Prefer Wikimedia Commons; record the
   author, licence and source URL for every one.
2. Add the record to `temples.ts`.
3. If it deserves rich content, create `src/data/<slug>.ts` with facts, shrines,
   festivals, offerings, travel options, guidelines and a credited gallery.
   Follow `batu-caves.ts` — it is the most complete example.
4. Wire the per-temple branches that are *not* data-driven:
   - `features/temple-details/components/TempleHero.tsx` — `bgImages` +
     `bgPositions` (the banner and its crop)
   - `features/temple-details/components/TempleTabs.tsx` — the About-tab block,
     and `facilities` / `nearbyPlaces` if the generic Indian defaults are wrong
   - `features/temple-details/components/AnnadhanamDetails.tsx` — meal service
   - `features/heatmap/hooks/useHeatmapZones.ts` — named zones for the site
   - `features/planner/components/{TempleVisitPlanCard,SampleItineraryCard,RecommendedStaysCard}.tsx`
   - `features/dashboard/utils.ts` — `ZONE_BY_STATE` if it is in a new time zone
5. `npm run build` and open `/temple/<slug>`.

Without step 4 the temple still works everywhere, falling back to generic
copy — so ship step 4 or the page reads like a template.

## International temples

The `Temple` model was built for Indian temples and reuses `state` for the
country abroad. Consequences worth knowing:

- `TempleHero` only appends the word "District" for Indian temples; it keys off
  `OVERSEAS_STATES`. **Add a new country there** or the header will read
  "Selangor District".
- `features/dashboard/utils.ts` resolves the display time zone. Everything
  defaults to `Asia/Kolkata`; non-Indian entries must be listed in `US_CENTRAL`
  or `ZONE_BY_STATE`, or open/closed status will be wrong by hours.
- `OtherTemples` in `SidebarWidgets.tsx` only pads from other regions once the
  temple's own country is exhausted, and relabels the heading when it does.

## Known limitations (deliberate, don't "fix" by accident)

- **Single currency.** `src/lib/currency.ts` formats everything as INR with
  Indian digit grouping, including the US and Malaysian temples. Real tariffs
  abroad are in USD/MYR. Changing this means a per-temple currency on the model
  plus every booking, store, donation and admin surface — not a local edit.
- **`src/data/operations.ts`** (admin command centre) is modelled on
  Tiruvannamalai alone and is not per-temple.
- **`src/data/poojas-data.ts`** is likewise Tiruvannamalai-specific.
- A pre-existing `(e.target as HTMLElement).src` cast in six `onError` handlers
  fails `tsc --noEmit`. `HTMLImageElement` is the correct cast. The Vite build
  does not typecheck, so it ships.
- `src/routes/sitemap[.]xml.ts` imports `@tanstack/react-start`, which is not a
  dependency, and does not typecheck.

## i18n

Translation keys **are the English strings**. Components call
`const { t: tStr } = useTranslation()` and then `tStr("Some English sentence")`.

- New user-visible copy should be wrapped in `tStr(...)`. It renders correctly in
  English immediately (i18next falls back to the key) and becomes translatable
  once the string is added to the catalogues.
- `src/locales/en/translation.json` has ~1,900 keys; the other languages lag
  behind (Tamil ~1,625). Untranslated keys fall back to English — acceptable.
- Do **not** pass interpolated runtime values through `tStr`; the catalogues are
  keyed on exact literals.
- The loose `*.cjs` scripts at the repo root and in `scripts/locales/` are
  one-off catalogue-maintenance scripts from earlier work. Treat them as history,
  not as a supported toolchain.

## Images and licensing

Temple photography is sourced from Wikimedia Commons. Most of it is CC BY or
CC BY-SA, which **requires visible attribution**.

- The `CreditedImage` type lives in `src/data/temples.ts`. Galleries render
  `author`, `license` and a link to `sourceUrl` under every photo — keep that
  rendering when you touch a gallery.
- Download at a sensible width (≈1100 px for gallery, ≈1600–1800 px for banners)
  rather than committing 12 MP originals. The `src/assets/*.png` files are legacy
  3 MB imports; do not add more of those — put new photos in `public/temples/`.
- Banners are cropped to a 240–260 px band. Set `bgPositions[slug]` so the
  subject survives the crop and the overlaid title has something dark to sit on.

## Conventions

- Comments explain *why*, not what. Several existing comments record the reason
  behind a non-obvious decision (chunk splitting, lazy locales, sticky sidebar
  maths) — match that style.
- Per-temple variation is expressed as `t.slug === '…' ? … : default` branches in
  components, with the content itself in `src/data/`. Keep prose out of
  components where there is a data module for it.
- Heavy panels are code-split with `lazy()` + `LazyPanel`.
- Many temple-detail components take `{ t }: any`. That is existing debt; new
  components should type their props.
