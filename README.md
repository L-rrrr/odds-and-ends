# odds and ends

A one-page site. Everything is in `index.html`. There's no build step, framework or dependencies.

## Adding a note

1. Open `index.html` and find the comment that starts with `to add a note`.
2. Copy the `<details class="note" ...>` block from that comment and paste it above the other notes, so the newest note is first.
3. Fill it in:
   - `id`: a short name with no spaces, like `how-wifi-works`. It becomes the note's link: `yoursite/#how-wifi-works`.
   - `data-kind`: `tech` for the "tech, explained" filter, `anything` for "anything else". Use the same label in the `n-meta` line.
   - The title, the month, and the paragraphs. The `analogy` and `prompt` parts are optional, so delete them if you don't want them.
4. Open `index.html` in a browser to check it.

## Hosting

### Option A: GitHub Pages (free, updates when you push)

Create the repo and turn on Pages once:

```bash
git init
git add index.html README.md
git commit -m "first version"
gh repo create odds-and-ends --public --source . --push
gh api -X POST repos/{owner}/odds-and-ends/pages -f "source[branch]=main" -f "source[path]=/"
```

After a minute or two the site is live at `https://<your-username>.github.io/odds-and-ends/`.

To publish a new note later:

```bash
git commit -am "new note"
git push
```

If the branch is called `master` instead of `main`, change `main` in the `gh api` line to `master`. You can also turn on Pages in the browser instead: the repo's **Settings → Pages**, then choose **Deploy from a branch**, the branch, and `/ (root)`.

### Option B: Netlify Drop (no git, drag and drop)

1. Go to https://app.netlify.com/drop.
2. Drag the folder that contains `index.html` onto the page.
3. You get a live URL straight away. Sign up (free) to keep the site and rename it.

To update it, drag the folder onto the site's **Deploys** tab again.

### Custom domain (optional)

If you buy a domain (around $10 a year), both options can use it. On GitHub it's under **Settings → Pages → Custom domain**, and on Netlify it's under **Domain management**. Each one shows you the DNS records to add at your domain registrar.
