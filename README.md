# odds and ends

A small notes site built with [Astro](https://astro.build). Every note is a Markdown file. When you push to `main`, GitHub builds the site and publishes it to https://l-rrrr.github.io/odds-and-ends/.

## Writing a note

1. Create a new file in `src/content/notes/`. The file name becomes the note's link, so use lowercase words joined by dashes, for example `how-wifi-works.md` → `/notes/how-wifi-works/`.
2. Start the file with this header, then write the note below it in plain Markdown:

   ```markdown
   ---
   title: How Wi-Fi actually works
   date: 2026-10-21
   kind: tech          # tech = "tech, explained", anything = "anything else"
   prompt: explain how wifi works simply   # optional
   draft: true         # optional: keeps it off the site while you're writing
   ---

   First paragraph.

   > A line starting with ">" shows as an analogy.
   ```

3. Preview it on your computer (see below), then push:

   ```bash
   git add .
   git commit -m "new note"
   git push
   ```

   The site updates a minute or two later. You can watch the build in the repo's **Actions** tab.

Notes are listed newest first, by `date`. Remove `draft: true` (or set it to `false`) when a note is ready.

## Previewing on your computer

Do this once:

```bash
npm install
```

Then, whenever you want to preview:

```bash
npm run dev
```

and open http://localhost:4321/odds-and-ends/. The page reloads as you save changes.

## Where things are

| File | What it is |
|---|---|
| `src/content/notes/*.md` | The notes |
| `src/pages/index.astro` | The home page: title, intro and list of notes |
| `src/pages/notes/[id].astro` | The page for a single note |
| `src/layouts/Base.astro` | The parts every page shares: page head, fonts, footer |
| `src/styles/global.css` | All the styles, including dark mode |
| `src/content.config.ts` | Which fields a note's header can have |
| `.github/workflows/deploy.yml` | Builds and publishes the site on every push |
