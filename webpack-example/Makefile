default:
	make direct-es

all:
	node scripts/all

direct-cjs:
	npx webpack --entry ./src/main-cjs.js -o dist/bundle-cjs.js --mode production

direct-es:
	npx webpack --entry ./src/main-es.js -o dist/bundle-es.js --mode production

named:
	npx webpack --entry ./src/main.js -o dist/bundle.js --mode production

pre:
	rm -rf dist dist-gzip && mkdir dist

post:
	cp -r dist dist-gzip && gzip dist-gzip/* && ls -lhS dist*
