set -e

rm -rf build/

mkdir -p build/viewer-request

cd build/viewer-request

cp ../../lambda/viewer-request/package.json .
cp ../../lambda/viewer-request/package-lock.json .

npm ci --only=prod

cp -R ../../lambda/viewer-request/src .
