cwd=$(pwd)

cd /Applications/WhatsApp.app/Contents/Resources
npm install -g asar
rm -rf extracted
asar extract app.asar extracted

cd extracted
current=$(pwd)

cp ${cwd}/dist/refined.js ./
FILE=index_old.html
if test -f "$FILE"; then
  echo ''
else
  mv index.html index_old.html
fi

awk '{sub(/\<script src=\"renderer\.js\"\>\<\/script\>/,"\<script src=\"renderer\.js\"\>\<\/script\>\<script src=\"refined\.js\"\>\<\/script\>")}1' index_old.html > index.html

cd ..
asar pack extracted app.asar
rm -rf extracted
open /Applications/WhatsApp.app
cd ${cwd}