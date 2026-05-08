# Tharwa — The Digital Home of Family Wealth

Bilingual (Arabic/English) Next.js + Tailwind website for **Tharwa**, a Saudi family financial planning platform.

Built from the BUSE 644 Final Business Plan Report.

## Quick start

```powershell
cd C:\Users\rayan.alahmadi\Desktop\my-app
npm install
npm run dev
```

Open http://localhost:3000

## What's inside

### Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, four pillars, 10 family problems, market stats, CTA |
| `/services` | All four pillars + detailed feature grid |
| `/wallet` | Interactive Wallet Demo (10 screens) |
| `/junior` | Tharwa Junior — age tabs, Avatar stages, parental controls |
| `/marketplace` | Educational courses + advisory + reports e-commerce |
| `/cart` | 3-step checkout — cart → details → payment |
| `/order-confirm` | Order success page |
| `/pricing` | Free / Family (49) / Family Pro (99) — monthly/annual toggle |
| `/about` | Story, mission, Vision 2030 alignment, founding team |
| `/trust` | Six security dimensions, payments, PDPL/SAMA/AAOIFI |
| `/demo` | Full interactive walkthrough (same component as `/wallet`) |
| `/login` | Sign-in with Nafath + biometric options |
| `/signup` | 3-step onboarding (account → Nafath → bank connect) |
| `/early-access` | Waitlist form with family-needs intake |

### Design system — "Saudi Lavender Carpet"

Configured in `tailwind.config.ts`:

| Token | Hex |
| --- | --- |
| `lavender.500` (primary) | `#7F67B2` |
| `lavender.700` (deep) | `#553F84` |
| `lavender.900` (deepest) | `#2A1F44` |
| `navy` (text) | `#0A2540` |
| `gold` (CTA accent) | `#D4AF37` |
| `cream` (background) | `#F8F7FF` |

Custom utilities:
- `.glass` / `.glass-dark` — glassmorphism
- `.carpet-pattern` — radial-gradient carpet motif
- `.mesh-bg` — soft mesh background for hero
- `.btn-primary` / `.btn-gold` / `.btn-ghost` / `.btn-outline`
- `.card` / `.card-hover`
- `.heading-1` / `.heading-2` / `.heading-3`
- `.chip` / `.chip-gold`

### Bilingual logic

- `lib/i18n.tsx` — React context provider with `lang`, `dir`, `t`, `toggle()`.
- `lib/translations.ts` — full EN + AR dictionary.
- Sets `document.documentElement.lang` + `dir` on language change.
- Persists choice in `localStorage`.
- Fonts: **Inter** (Latin) + **IBM Plex Sans Arabic** (Arabic) loaded via `next/font/google`.
- `LanguageToggle` component in the navbar — one click flips the entire app.

### The Wallet Demo (10 screens)

`components/WalletDemo.tsx` is the centerpiece. Sidebar nav lets you jump to any screen, and Parent ↔ Child view toggles render different perspectives.

1. **Overview** — Total Family Net Worth, AI nudges, recent activity
2. **Three Buckets** — Assets / Liabilities / Expenses breakdown
3. **Sub-Wallets** — every family member with privacy flags
4. **Allocate** — interactive sliders for salary distribution
5. **Goals** — Hajj, university, travel, emergency pots with shared participation
6. **Bills** — upcoming bills + subscription bloat detector
7. **Maid Payroll** — monthly tracking + electronic acknowledgement
8. **Smart Zakat** — AAOIFI Standard 35 with hawl tracking
9. **Junior Academy** — Avatar growth, streak, daily tasks
10. **Tadawul Game** — virtual investing with live-style price tickers

### E-commerce flow

- `lib/cart.tsx` — React Context cart store, persisted to `localStorage`.
- `lib/marketplace.ts` — 8 product fixtures (courses / advisory / reports / kids).
- Cart → Details → Payment with **Mada / Apple Pay / STC Pay** selector and tokenisation messaging.
- Order confirmation page generates a TH-XXXXXX order ID.

### Compliance markers in the UI

Visible throughout: **PDPL · SDAIA · NCA · AAOIFI Standard 35 · SAMA Open Banking · PCI-DSS Level 1**.

### Cookie banner

`components/CookieBanner.tsx` — appears once, persists choice in `localStorage`. Three actions: Accept All / Reject Non-Essential / Manage.

## Tech stack

- **Next.js 14** (App Router)
- **React 18** + TypeScript
- **Tailwind CSS** (custom palette + utilities)
- **lucide-react** for icons
- **next/font** for self-hosted Inter + IBM Plex Sans Arabic

## Project structure

```
my-app/
├── app/
│   ├── layout.tsx          # Root with I18n + Cart providers
│   ├── globals.css         # Design system tokens + utilities
│   ├── page.tsx            # Home
│   ├── about/, services/, pricing/, trust/, junior/
│   ├── wallet/, demo/      # Both render <WalletDemo />
│   ├── marketplace/, cart/, order-confirm/
│   ├── login/, signup/, early-access/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── LanguageToggle.tsx
│   ├── CookieBanner.tsx
│   ├── Logo.tsx
│   └── WalletDemo.tsx      # The 10-screen interactive demo
├── lib/
│   ├── i18n.tsx            # Bilingual context
│   ├── translations.ts     # EN + AR dictionary
│   ├── cart.tsx            # Cart context
│   └── marketplace.ts      # Product fixtures
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Notes

- All financial figures are illustrative.
- Bank connection / Nafath / payment forms are UI-only — wire to your APIs later.
- Designed for `lg:` and up; mobile responsive at `md:` and below.
