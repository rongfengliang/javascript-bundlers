default:
	make direct-cjs

all:
	node scripts/all

es:
	node compile-es

cjs:
	node compile-cjs

es-source:
	node compile-es-source

cjs-source:
	node compile-cjs-source

pre:
	rm -rf dist dist-gzip && mkdir dist

post:
	cp -r dist dist-gzip && gzip dist-gzip/* && ls -lhS dist*
