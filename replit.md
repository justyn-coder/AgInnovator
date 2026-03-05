# Canadian Ag Innovation Navigator

## Overview
A React web app that maps 99 Canadian agtech programs (funding, accelerators, pilot sites, events) and provides personalized pathway recommendations. Two modes: Entrepreneur mode and Ecosystem Intelligence mode. Built/powered by BestInShow (bestinshow.ag).

## Architecture
- **Frontend**: React + Vite, wouter for routing, Tailwind CSS + inline styles
- **Backend**: Express.js server
- **Database**: PostgreSQL with Drizzle ORM (neon-serverless driver)
- **Fonts**: Source Serif 4 (body), DM Sans (UI) via Google Fonts

## Pages
- `/` - Home/landing page with mode selection cards
- `/navigator` - Main Navigator chat interface (Entrepreneur or Ecosystem mode)
- `/admin` - Admin dashboard to review program submissions

## Database Tables
- `programs` - 99 seeded ag innovation programs (name, category, region, stage, bestFor, trigger, productionSystems, techDomains)
- `submissions` - User-submitted program entries pending review

## Key Files
- `shared/schema.ts` - Drizzle schema definitions
- `server/seed.ts` - Seeds 96 programs on first startup
- `server/routes.ts` - API routes (/api/programs, /api/submissions)
- `server/storage.ts` - Database storage interface
- `client/src/pages/Navigator.tsx` - Main navigator with pre-baked demo responses
- `client/src/pages/Home.tsx` - Landing page
- `client/src/pages/Admin.tsx` - Admin dashboard

## API Routes
- `GET /api/programs` - All programs
- `GET /api/programs/count` - Program count
- `POST /api/submissions` - Create new submission
- `GET /api/submissions` - List all submissions

## Design System
- Entrepreneur: dark green #1a3a0a, gold #c5a55a, cream #f7f5f0
- Ecosystem: navy #1e3a5f, teal #2e86ab, light gray #f0f2f5
- Mode persisted via localStorage key "ag_nav_mode"

## Assets
- `client/src/assets/images/logo-wordmark.png` - Header logo
- `client/src/assets/images/bestinshow-tagline-logo.png` - BestInShow branding (Navigator footer only)
