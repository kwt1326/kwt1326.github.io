#!bin/sh

cd apps/web/

rm -rf node_modules/.cache
yarn build
yarn deploy
touch ./out/.nojekyll
git add ./out/
git commit -m 'Deploy Next.js to gh-pages'
git subtree push --prefix ./out origin gh-pages

cd ../../

# deploy branch : gh-pages