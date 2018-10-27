default:
	make direct-es

all:
	node scripts/all

es:
	npx webpack --entry ./src/es.js -o dist/es.js --mode production

cjs:
	npx webpack --entry ./src/cjs.js -o dist/cjs.js --mode production

es-source:
	npx webpack --entry ./src/es-source.js -o dist/es-source.js --mode production

cjs-source:
	npx webpack --entry ./src/cjs-source.js -o dist/cjs-source.js --mode production

pre:
	rm -rf dist dist-gzip && mkdir dist

post:
	cp -r dist dist-gzip && gzip dist-gzip/* && ls -lhS dist*
