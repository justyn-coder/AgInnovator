# Deploy Ag Innovation Navigator to Replit

## What you need
- A Replit account (free tier works)
- The `ag-innovation-navigator.jsx` file from this conversation
- 5 minutes

---

## Step-by-step

### 1. Create a Replit account
Go to **replit.com** and sign up (Google sign-in is fastest).

### 2. Create a new React project
- Click **+ Create Repl** (top left)
- Search for **React** in the template list
- Select **React (JavaScript)**
- Name it something like `ag-navigator`
- Click **Create Repl**

### 3. Wait for it to load
Replit will scaffold a basic React app. You'll see a file tree on the left with `src/App.jsx` and other files.

### 4. Replace the app code
- In the left file tree, click **src/App.jsx**
- Select all the code in that file (Ctrl+A / Cmd+A)
- Delete it
- Open the `ag-innovation-navigator.jsx` file I gave you in a text editor
- Copy the ENTIRE contents
- Paste it into the now-empty `src/App.jsx` in Replit

### 5. Clean up the CSS file
- In the file tree, click **src/App.css**
- Select all and delete everything in it (our styles are inline, we don't need this file)
- You can also clear out `src/index.css` the same way

### 6. Hit Run
- Click the green **Run** button at the top
- Wait 15-30 seconds for it to build
- A preview pane will appear showing your app
- If you see the green header with "Canadian Ag Innovation Navigator" — you're live

### 7. Get your public URL
- In the preview pane (top right), you'll see a URL like: `https://ag-navigator.your-username.repl.co`
- Click the "open in new tab" icon to see it full-screen
- **This URL works on any phone, any browser, no login needed**

### 8. Test on your phone
- Text yourself the URL
- Open it on your phone
- Tap an example query
- Confirm the API call works and recommendations appear

---

## If something goes wrong

**"Module not found" error**: Make sure you pasted into `src/App.jsx`, not a different file.

**Blank screen**: Open browser console (right-click > Inspect > Console tab) and look for red errors. Most likely a copy-paste issue where the code got truncated.

**API calls fail**: The Anthropic API call happens client-side. This works in the Claude.ai artifact sandbox because Anthropic proxies it. On Replit, you may need to add your own API key. If so:
1. Get an API key from console.anthropic.com
2. In the fetch call in the code, add this header: `"x-api-key": "your-key-here"`
3. Find the line that says `headers: {"Content-Type":"application/json"}` 
4. Change it to: `headers: {"Content-Type":"application/json", "x-api-key": "sk-ant-your-key-here", "anthropic-version": "2023-06-01"}`
5. **Important**: Use Replit's Secrets feature (lock icon in left sidebar) to store the key instead of hardcoding it

**CORS error**: If you see "blocked by CORS policy", you'll need a small backend proxy. Replit makes this easy — ask me and I'll write the proxy code.

---

## Conference day checklist

- [ ] App loads on your phone
- [ ] Tap an example query, get results in under 30 seconds
- [ ] Toggle to Ecosystem mode, confirm dark theme loads
- [ ] Browse All shows 99 entries
- [ ] Submit form opens and closes cleanly
- [ ] Bookmark the URL on your phone's home screen for quick access
- [ ] Charge your phone

---

## Quick pitch when showing people

> "Bioenterprise Canada's 2024 roundtable said the #1 thing missing for ag entrepreneurs is a clear roadmap of who to go to. So I built one. 99 programs in Alberta — funding, pilot sites, accelerators — with an AI layer that tells you what to do first based on your specific situation. Try it."

Then hand them your phone or have them pull up the URL on theirs.
