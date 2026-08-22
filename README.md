# Little Poetry Machine

A tiny, minimalist magnetic-poetry-style web app designed for GitHub Pages.

## Features

- Drag words from the bottom word bank onto the canvas.
- Drag words around the canvas to arrange a poem.
- Double-click or right-click a placed word to return it to the bank.
- Add your own words or phrases.
- Custom words persist in the browser with `localStorage`.
- The current poem persists in the browser.
- No backend or database.
- No build step required.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any simple local web server.

## GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, `app.js`, and this README.
3. Go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.

The site will be available at:

`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

GitHub Pages supports publishing directly from a branch for a static site like this.

## Customize

Edit `DEFAULT_WORDS` near the top of `app.js` to change the built-in vocabulary.

The font imports are in `style.css`. Remove the Google Fonts import if you want the project to make no external network requests.
