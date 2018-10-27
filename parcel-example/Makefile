default:
	make direct-es

all:
	node scripts/all

direct-cjs:
	npx parcel build ./src/main-cjs.js --experimental-scope-hoisting -o dist/bundle-cjs.js

req:
	npx parcel build ./src/main-req.js --experimental-scope-hoisting -o dist/bundle-req.js

direct-es:
	npx parcel build ./src/main-es.js --experimental-scope-hoisting -o dist/bundle-es.js

named:
	npx parcel build ./src/main.js --experimental-scope-hoisting -o dist/bundle.js

pre:
	rm -rf dist dist-gzip && mkdir dist

post:
	cp -r dist dist-gzip && gzip dist-gzip/* && ls -lhS dist*
