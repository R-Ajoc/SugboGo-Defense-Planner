# SugboGo Defense Planner

A simple, standalone planner for November 11–23, 2026. Includes the complete preparation schedule, detailed November 11–12 checklists, later-stage tasks, daily notes, progress tracking, backup import/export, and a printable full plan.

## Open it

Open `index.html` in a modern browser. No installation, account, build step, or backend is required. For the most reliable saved progress, use the same browser at the hosted GitHub Pages address.

## Publish free on GitHub Pages

1. Create a **new public repository**, for example `sugbogo-defense-planner`.
2. Upload the **contents of this folder** to the repository root: `index.html`, `style.css`, `data.js`, `app.js`, `favicon.svg`, and `.nojekyll`. You can also include this README. If you downloaded the ZIP, extract it first and upload the extracted files, not the ZIP itself.
3. Commit the uploaded files to the `main` branch.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment → Source**, select **Deploy from a branch**.
6. Choose **main**, choose **/ (root)**, and click **Save**.
7. Wait for GitHub to finish deployment. The Pages settings will show the published link, usually `https://YOUR-USERNAME.github.io/sugbogo-defense-planner/`.

Only upload this standalone planner folder; the main SugboGo app and backend are not needed.

GitHub documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Using the planner

- Select a schedule stage, then a day if the stage has separate daily checklists.
- Tick completed tasks; the day, stage, and overall totals update immediately.
- Add owners, blockers, and next actions under **Notes & handoff**.
- Use **Hide completed** to focus on remaining tasks.
- Use **Export backup** regularly. **Import backup** restores a snapshot and replaces this browser's existing progress after confirmation.
- **Print plan** prints the complete schedule and every checklist, including checked tasks and notes, regardless of the current stage or filter. You can choose Save as PDF in your browser's print dialog.

## Where progress is saved

Progress stays in this browser's local storage. Each teammate and device has separate progress; there is no automatic synchronization. Imported backups replace progress rather than merging it. Clearing browser data can remove progress. Private browsing may discard it on exit. Moving from a local file or preview address to GitHub Pages does not transfer progress automatically: export before moving, then import at the new address.

The site sends no checklist data to a server and uses no external fonts, analytics, or third-party scripts.

## Adjusting the plan

Edit `data.js` to change task wording or add stages. Task IDs are derived from day IDs and group/task positions; keep those stable if existing saved progress must remain compatible. The dates are explicitly for **2026**. The current stage is initially selected using the date in Asia/Manila; selecting a stage updates its link so you can bookmark it.

Styling follows the existing SugboGo orange, neutral colors, spacing, and rounded cards. All asset paths are relative so the planner also works under a GitHub project subpath.
