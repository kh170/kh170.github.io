# Sadia Rahman | Complete HTML Website

This package is the consolidated **static HTML** website. It contains no Google Scholar statistics panel or automated Scholar sync.

## Install

1. Save a backup of your existing `kh170.github.io` repository before changing anything.
2. Unzip this archive.
3. Copy the **contents** of the `Sadia_Complete_Website_No_Scholar` folder (not the folder itself) into the root of your GitHub repository.
4. To avoid old pages sticking around, remove obsolete old paths such as `/write/`, old sample blog posts, and any previous Scholar metric scripts/data. Make sure the website root has `index.html`, `assets/`, `publications/`, `projects/`, `blog/`, and `experience/`.
5. Double-click the root `index.html` to preview locally. Changes will not be deployed until *you* commit/push.

## Included

- Homepage `index.html`: original hero/headshot, education, work experience, expanded recent highlights, all navigation links.
- `publications/index.html`: 14 items with category filters, including thesis, encyclopedia, policy note, economic report, and academic papers.
- `publications/<slug>/index.html`: 14 simple detail pages, each with “Details coming soon”, original At a glance author/venue data, external links and GitHub buttons where they were previously provided. Full coauthor listings remain intact.
- `projects/index.html`: three research projects plus six separate short projects, matching your requested order.
- `projects/<slug>/index.html`: nine project detail pages with editable placeholders and related-publication links when known.
- `blog/index.html`: clean empty Blog landing page (“New notes coming soon”), without a web editor or sample post.
- `experience/index.html`: dedicated experience page with editable notes for three positions.
- `assets/`: styles, navigation/filter JavaScript, favicon, your uploaded headshot and supporting assets.

## How to edit

- Homepage, recent highlights, and experience snapshot: `index.html`
- Your longer experience descriptions: `experience/index.html`
- Publications list: `publications/index.html` (short summaries are blank until you add them)
- Publication details: `publications/<slug>/index.html`
- Projects list: `projects/index.html`; project detail pages live in each slug subfolder.
- Blog placeholder: `blog/index.html`

Open HTML files in TextEdit **as plain text** or use VS Code. Please preserve the HTML tags when editing.

## Scholar panel deliberately omitted

No `assets/css/scholar-metrics.css`, `data/scholar-metrics.json`, `.github/workflows` Scholar updater, or SerpAPI setup is included.

## Reminder

The ZIP is a local backup. It does **not** modify or deploy your GitHub site.
