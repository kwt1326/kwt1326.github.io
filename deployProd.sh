#!bin/sh

rm -rf node_modules/.cache
next build
next export
touch out/.nojekyll
git add out/
git commit -m \"Deploy Next.js to gh-pages\"
git subtree push --prefix out origin gh-pages

# next.js official deploy example 