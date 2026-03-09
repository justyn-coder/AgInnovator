# Ag Innovation Navigator — Deployment Guide
## Stack: Vercel (frontend + API) + Supabase (database)

---

## Step 1: Set Up Supabase (5 minutes)

1. Go to [supabase.com](https://supabase.com) → Sign up (free)
2. Click **New Project** → name it `ag-innovation-navigator`
3. Set a database password — **save this somewhere**
4. Wait ~2 minutes for the project to spin up
5. Go to **Settings → Database → Connection string**
6. Select **Transaction** mode pooler (port 6543)
7. Copy the full URI — it looks like:
   `postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres`

---

## Step 2: Deploy to Vercel (5 minutes)

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **Add New Project**
3. Select your `AgInnovator` GitHub repo
4. Vercel will auto-detect the config from `vercel.json`
5. Before clicking Deploy, click **Environment Variables** and add:
   - `DATABASE_URL` → paste your Supabase connection string
   - `SEED_SECRET` → type any password you want (e.g. `ag-seed-2026`)
6. Click **Deploy**

---

## Step 3: Create Database Tables (2 minutes)

After deploy, you need to push the schema to Supabase:

1. On your local machine (or in Replit terminal), run:
```bash
DATABASE_URL="your-supabase-url-here" npm run db:push
```
This creates the `programs` and `submissions` tables in Supabase.

---

## Step 4: Seed the Database (1 minute)

Call the seed endpoint once to load all 90+ programs:

```bash
curl -X POST https://your-app.vercel.app/api/seed \
  -H "x-seed-secret: ag-seed-2026"
```

Replace `your-app.vercel.app` with your actual Vercel URL and `ag-seed-2026` with whatever you set as `SEED_SECRET`.

You should see: `{"message":"Seeded 93 programs successfully."}`

---

## Done. Your app is live.

Future deploys are automatic — every push to GitHub triggers a new Vercel deploy.

---

## Adding the Claude LLM Chat Feature (next phase)

Add one more environment variable in Vercel:
- `ANTHROPIC_API_KEY` → your Anthropic API key

Then add a new API route at `api/chat.ts` using the Anthropic SDK.
