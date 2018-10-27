default:
	make direct-es

all:
	node scripts/all

es:
	npx parcel build ./src/es.js --experimental-scope-hoisting -o dist/es.js

cjs:
	npx parcel build ./src/cjs.js --experimental-scope-hoisting -o dist/cjs.js

es-source:
	npx parcel build ./src/es-source.js --experimental-scope-hoisting -o dist/es-source.js

cjs-source:
	npx parcel build ./src/cjs-source.js --experimental-scope-hoisting -o dist/cjs-source.js

pre:
	rm -rf dist dist-gzip && mkdir dist

post:
	cp -r dist dist-gzip && gzip dist-gzip/* && ls -lhS dist*
