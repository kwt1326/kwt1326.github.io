#!bin/sh

cd apps/web/

rm -rf node_modules/.cache
yarn build
yarn export
touch out/.nojekyll
git add .
git add out/
git commit -m 'Deploy Next.js to gh-pages'
git subtree push --prefix out origin gh-pages

cd ../../

# deploy branch : gh-pages