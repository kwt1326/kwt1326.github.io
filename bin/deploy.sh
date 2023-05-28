#!bin/sh

cd apps/web/

rm -rf node_modules/.cache
yarn build
yarn export
touch out/.nojekyll
git add .
git add -f out/
git commit -m 'Deploy Next.js to gh-pages'

cd ../../

git add -f apps/blog-cms/public/uploads/
git restore apps/blog-cms/public/uploads/.gitkeep
git subtree push --prefix apps/blog-cms/public/uploads/ origin resources
git subtree push --prefix apps/web/out origin gh-pages
git push

# deploy branch : gh-pages