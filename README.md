# Wang Zijun — Academic Homepage

A bilingual, static academic homepage for 王子君 at Chongqing Jiaotong University.

- `index.html`: Chinese and English content, publication links, course downloads, and the email feedback form.
- `styles.css`: typography, layout, responsive styles, and print styles.
- `wang_zijun.jpg`: profile photograph.
- `materials/`: the course files linked from the teaching section.

## Preview

Open `index.html` directly, or run `node scripts/preview.cjs` and visit <http://127.0.0.1:5510/index.html>. The preview server only serves the homepage and its listed assets.

## Content maintenance

Keep the Chinese (`.zh`) and English (`.en`) text in sync. The homepage starts in Chinese and remembers the visitor's language choice when browser storage is available.

Publications are grouped by year. Projects use separate columns for title, role, period, and funding; missing dates and funding are left empty. Advanced Gas Dynamics is a graduate course; the other three courses are undergraduate courses. The masthead scrolls normally with the page; section links and the desktop sidebar use ordinary top spacing.

The feedback form prepares a `mailto:` draft for the visitor to send through their email application. It does not store or send messages on a server.

## Deployment

The site has no build step and remains compatible with the existing GitHub Pages setup. Publish `index.html`, `styles.css`, `wang_zijun.jpg`, and the linked `materials/` files together. Keep UTF-8 encoding when editing Chinese text.
