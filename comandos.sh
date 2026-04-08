# git init
# git branch -M main
# git remote add origin https://github.com/MatiTobi/React-Native.git

git pull -X theirs
git add .
git commit -m "."
git push

npm install git+https://github.com/MatiTobi/React-Native.git --legacy-peer-deps
