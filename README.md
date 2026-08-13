# Farah & Mahmoud — Engagement Invitation Site

A single-page invitation for the engagement on the Nile — navy & pearl theme, 
an animated yacht drifting on illuminated water, a glowing moon, falling 
stars, warm words from the couple, a countdown, and a QR code guests use to 
send photos straight into a Google Drive folder.
nile-engagement/
├── index.html          ← the invitation itself
├── upload.html          ← the page the QR code opens, for guest photo uploads
├── assets/
│   └── cover.jpg        ← your portrait illustration (also the WhatsApp preview image)
│   └── music.mp4         ← ADD YOUR MUSIC FILE HERE (see step 2)
├── apps-script/
│   └── Code.gs           ← Google Apps Script backend that saves uploads to Drive
└── README.md

## 1. Put it on GitHub Pages (free hosting)

1. Create a new GitHub repository (e.g. engagement).
2. Upload everything in this folder to it (keep the folder structure).
Go to **Settings → Pages**, set "Deploy from a branch," branch main, 
1. folder /root, and save.
GitHub gives you a live URL that looks like: 
1. https://YOUR-USERNAME.github.io/engagement/

That URL is your invitation — send it to guests directly, or wrap it in a 
link-in-bio / WhatsApp message.

## 2. Add your music

You mentioned you'll upload a music file to GitHub. Add it to the assets 
folder and name it music.mp4 (or music.mp3 — both are already wired 
up in index.html). No code changes needed.

Note on autoplay: phones and browsers block audio from starting on page 
load without a tap. That's why the invitation opens behind a soft "Open the 
invitation" curtain — the tap that reveals the site is also what starts the 
music, so it still feels automatic to your guests. There's also a small 
music note button in the bottom-right corner if anyone wants to mute it.

## 3. Make the WhatsApp preview show your photo

WhatsApp needs a full public URL (not a relative path) to fetch the preview 
image. Once your site is live on GitHub Pages:
Open index.html, find the four lines containing 
https://YOUR-USERNAME.github.io/YOUR-REPO/... (near the top, in the 
1. <meta property="og:..."> tags).
Replace them with your real published URL, e.g. 
1. https://faramahmoud.github.io/engagement/assets/cover.jpg.
Push the change, then test it with Facebook's 
[Sharing Debugger](https://developers.facebook.com/tools/debug/) or 
WhatsApp's own preview (send the link to yourself first) — WhatsApp 
1. caches previews, so if it looks stale, re-scrape it in the debugger.

## 4. Connect the QR code to the bride's Google Drive

The QR code on the site already works out of the box — it always points to 
your site's own upload.html, wherever it's hosted. What still needs a 
one-time setup is where those uploaded photos actually _land_. Google 
requires uploads to go through a verified script running under a real 
Google account, so:
Go to [script.google.com](https://script.google.com), sign in as the 
1. **bride** (uploads will land in whichever account deploys this).
**New project** → delete the placeholder code → paste in the contents 
1. of apps-script/Code.gs.
2. Click **Deploy → New deployment**.
3. Type: **Web app**
4. Execute as: **Me**
5. Who has access: **Anyone**
Click **Deploy**, authorize the permissions it asks for (it needs Drive 
1. access to create the folder and save files), and copy the **Web app** **URL** it gives you.
2. Open upload.html, find this line near the bottom:
const SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
1. 
2. and paste your URL in between the quotes.
3. Push the change to GitHub.

From then on, every photo or video a guest uploads is saved into a folder 
named **"my engagement"** in the bride's Drive — the script creates that 
folder automatically the first time someone uploads.

Until step 5 is done, guests who try to upload will see a friendly notice 
instead of a silent failure, so nothing looks broken in the meantime.

## 5. The location button

Already wired to your Google Maps link: 
https://maps.app.goo.gl/WJKt9VPi8GZ446KL8?g_st=ic 
— guests tap **"View Location"** in the Details section and it opens 
directly in Google Maps or their browser.

## 6. Editing the text

**Welcome message**: open index.html, search for Together with our families — that's the short welcome line guests see near the top of the 

– site. Swap in your own wording any time.
– **Date/time details**: search for Doors open at sunset to adjust.
**Countdown target**: search for 2026-09-23T18:00:00+02:00 if the 
– exact start time changes (currently set to 6:00 PM Cairo time on the day).

That's it — everything else (the yacht's motion, the falling stars, the 
moon's glow, the water reflections) is self-contained animation and needs 
no editing.
