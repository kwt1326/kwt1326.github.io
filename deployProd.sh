#!bin/sh

rm -rf node_modules/.cache
npm run build
npm run deploy
touch out/.nojekyll
git add out/
git commit -m 'Deploy Next.js to gh-pages'
git subtree push --prefix out gh-pages

# next.js official deploy example 