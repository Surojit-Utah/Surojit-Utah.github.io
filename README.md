# surojit-utah.github.io

Personal website of Surojit Saha: https://surojit-utah.github.io/

A plain static site (HTML + CSS + a little JavaScript), served by GitHub Pages with no build step (`.nojekyll`).

```
index.html            home: bio, experience, research, publications, teaching
projects/*.html       project pages (ARD-VAE, AVAE, AdaSemSeg, disentanglement)
assets/css/style.css  styles (light and dark themes)
assets/js/site.js     theme toggle, mobile menu, publication filter, BibTeX copy
assets/img/           profile photo, favicon, project figures
files/                CV and paper PDFs
cv/ publications/ teaching/ resume/   redirects from the old site's URLs
```

Preview locally:

```
python -m http.server 8000
```

then open http://localhost:8000.
