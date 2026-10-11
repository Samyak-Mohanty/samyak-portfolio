# Samyak Mohanty — Portfolio

Personal portfolio built with Next.js (static export), React and Tailwind CSS.
Pages: Home, Projects, Posts, About.

## Run locally

Requires Node.js 18.18+ (20 or newer recommended).

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build for production

```bash
npm run build      # static site is written to the out/ folder
```

Upload the contents of `out/` to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages...).

## Put it online (free)

The site is a static export, so any static host works. Easiest path is Vercel:

1. Create a GitHub repository and upload this project folder to it (do not upload `node_modules` or `.next`; `.gitignore` already excludes them).
2. Go to vercel.com, sign in with GitHub, click **Add New... > Project** and import the repository. Vercel detects Next.js automatically; just click **Deploy**.
3. After the first deploy you get an address like `https://your-name.vercel.app`.
4. Optional: add a custom domain under **Settings > Domains**.

Netlify works the same way (build command `npm run build`, publish directory `out`).

After it is live, click through every link once: GitHub, LinkedIn, email and the resume download.

## Where to edit content

All text lives in `src/config/`:

| File | Controls |
| --- | --- |
| `home.ts` | Home page greeting, role, intro |
| `about.ts` | Bio, skills, education |
| `projects.ts` | Projects list |
| `contact.ts` / `global.ts` | Email, GitHub, LinkedIn, footer, navigation |

The "Open to internships" badge text is `openTo` in `home.ts`; delete that line's usage or change the text when it no longer applies.

### Add the Project EG repo link and screenshot
In `src/config/projects.ts`:
1. Set `href` to your GitHub repository URL (the "View on GitHub" button appears automatically).
2. Copy your screenshot into `public/assets/images/projects/` and set `imageUrl`, e.g. `"/assets/images/projects/project-eg.png"`.

### Add more projects
Copy the Project EG object inside `items` and change the fields.

### Update the resume
Replace `public/Samyak-Mohanty-Resume.pdf` with a new PDF (keep the file name). The "Download Resume" buttons on Home and About use it.

### Change the profile photo
Replace `public/assets/images/about/profile.jpg` with a new photo (same file name), or point `image` in `about.ts` to a new file.

### Show the Posts page in the menu
The Posts link is hidden for now. In `src/config/global.ts`, delete `hidden: true` on the Posts item to show it again (the page itself still works at `/posts`).

### Publish a post
Create `src/posts/my-post.md` with front matter:

```md
---
title: My first post
description: One-line summary
date: 2026-10-10
image: /assets/images/posts/post1.jpg
readTime: 5
---
Post content in Markdown...
```

Then run `npm run generate-posts` and rebuild. Put the cover image in `public/assets/images/posts/`.
While there are no posts, the Posts page shows "Coming Soon".
