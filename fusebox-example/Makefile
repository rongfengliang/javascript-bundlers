default:
	make direct-es

all:
	node scripts/all

es:
	node fuse-es

cjs:
	node fuse-cjs

es-source:
	node fuse-es-source

cjs-source:
	node fuse-cjs-source

pre:
	rm -rf dist dist-gzip && mkdir dist

post:
	cp -r dist dist-gzip && gzip dist-gzip/* && ls -lhS dist*
