# Dilshad Sultana — Clean Academic Portfolio

This is a **working website, not a PNG or a mockup**. It implements the supplied coral/cream/deep-green homepage reference in HTML/CSS and adds your real, naturally cropped photograph. The original, unaltered-looking photograph is also included as `assets/dilshad-original.jpg` (converted from the submitted PNG only for web size).

## View it immediately

1. Extract this whole ZIP to a folder. Do **not** double-click `index.html` from inside WinRAR's temporary folder.
2. Open `index.html` in Chrome, Edge, or Firefox.
3. Scroll to research, projects, publications, education, experience, skills and achievements. Project cards open full details.

## Publish

- **Manus**: Upload this ZIP as the *source files for a website*, and publish it as a working website. The homepage is **already coded**; you don't need a generated preview image.
- **GitHub Pages (best option for ongoing editing)**: Create a new public repository, upload the extracted files into the **repository root**, choose **Settings → Pages → Deploy from a branch**, select `main` / root, and save. Pages will provide a live address.

## Edit your website through a browser

This project includes `.pages.yml` and `data/*.json`, ready for **Pages CMS**. Once hosted in GitHub:

1. Open https://app.pagescms.org/ and sign in through GitHub.
2. Select the repository that hosts your portfolio.
3. Under **Profile & contact**, you can change the name, cover description, and **Homepage portrait** using an upload field. The old photograph is not required for future edits.
4. Open Research, Projects, Publications, Experience, Education, Skills or Achievements to modify their entries.
5. Save; your changes go to GitHub and the public site will republish when GitHub Pages completes its next build.

The visible **Edit portfolio** link on the homepage points to Pages CMS. It works as an editor only **after** you connect the GitHub repository. If you publish on Manus alone, its publishing/editing workflow is different and the Pages CMS integration does not automatically work.

## Photos and publications

- Current homepage photo: `assets/dilshad-portrait.webp`, a natural crop for the tall cover area; there is **no AI-modified face or artificial background**.
- Original photo copy: `assets/dilshad-original.jpg`.
- To use another picture in Pages CMS, upload it through **Profile & contact → Homepage portrait**.
- Research project images may be uploaded to **Project images**, then selected in the relevant project entry.
- Research submissions are intentionally labelled **submitted / under review / abstract submitted**, not published. Check and update statuses periodically.
- LinkedIn/GitHub/CV links are empty if not verified. Add these in the editor when ready.

## Simple files

- `index.html` — website page and sections.
- `clean-theme.css` — your screenshot-matched colors, fonts, mobile layout, and homepage.
- `styles.css` — existing portfolio component styles (layered underneath the new theme).
- `script.js` — working project cards, publication lists, mobile navigation and content rendering.
- `data/*.json` — editable site content used when hosted online.
- `content.js` — fallback content for opening `index.html` directly on your computer.
- `.pages.yml` — visual content editor settings.

**Important:** This website is not yet published to your account. Do not delete the old site until you approve the live version.
