# Edit your published portfolio — without code

**This package is prepared for GitHub Pages + Pages CMS. It is not yet connected to your GitHub account or published.**

## First-time setup (one-time)

1. Sign in to **github.com** (use your existing GitHub account). Create a **public repository**, such as `dilshad-portfolio`.
2. Upload the **contents of this ZIP** to the repository root, including the hidden file named `.pages.yml`, the `.nojekyll` file, the `data` folder, and all website files. (If GitHub’s browser uploader skips hidden files, create `.pages.yml` in GitHub using **Add file → Create new file** and paste the contents from the downloaded file.) Do not upload the surrounding ZIP as a single file.
3. In that repository, open **Settings > Pages**, choose **Deploy from a branch**, then select branch **main**, folder **/(root)**, and **Save**. Your public website will get a GitHub Pages URL.
4. Go to **https://app.pagescms.org/** and sign in/connect GitHub. Allow access to this repository. Open the repository and you will see editor sections named **Profile & contact**, **Education & coursework**, **Research & engineering projects**, **Publications & manuscripts**, and more.
5. Click an editor section, change your content, and save it. Pages CMS writes the edited JSON to GitHub. GitHub Pages updates the live site after it rebuilds. You do not need to replace files manually each time.

## After setup: your editing workflow

- Open **https://app.pagescms.org/** and sign in.
- Choose your portfolio repository and select a section.
- Edit text, add or remove research entries, add training, upload images/PDFs, or update publication status.
- Save. The GitHub Pages deployment automatically publishes the updated content once completed.
- Open your public portfolio and refresh to confirm the content changed.

## What you can change without code

- Introduction, biography, email, professional links, CV PDF.
- Undergraduate education, grades and coursework.
- Research interests and research/engineering project entries.
- Project descriptions, outcomes, tools, optional project images, and document links.
- Conference submissions, manuscript statuses, and publications.
- Experience, leadership, training, technical skills and awards.

## What still requires design changes

The layout, fonts, section styling, and animations are deliberately fixed to preserve the cream/forest-green/lime design. Pages CMS edits **content**, not individual positions of page elements. Changing layouts like Google Sites is not offered by this CMS.

## Local/offline preview

Double-click `index.html` to view the portfolio without publishing. It uses the original built-in `content.js` as preview data. Once hosted, the website automatically uses the live data in `data/*.json`. **Do not use the old `editor.html` workflow.**

## Important precautions

- No live website has been published by ChatGPT. You must authorize GitHub access and enable GitHub Pages in your own account.
- Your portfolio repository is public, so do not store passwords, private academic records, your home address, or unpublished confidential papers.
- Confirm publication statuses before publishing. Do not label manuscripts as published until they actually are.
- If a GitHub Pages project URL has a `/repository-name/` suffix, uploaded relative media paths work with this package; do not manually turn relative media URLs into root-absolute URLs.

Sources: https://pagescms.org/docs/ and https://docs.github.com/en/pages
