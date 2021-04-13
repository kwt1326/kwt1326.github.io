#!bin/sh

rm -rf node_modules/.cache
npm run build
next export
touch out/.nojekyll
git add out/
git commit -m \"Deploy Next.js to master\"
git subtree push --prefix out origin master

# next.js official deploy example 