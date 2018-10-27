default:
	make direct-es

all:
	node scripts/all

req:
	node fuse-req

direct-cjs:
	node fuse-cjs

direct-es:
	node fuse-es

named:
	node fuse

pre:
	rm -rf dist dist-gzip && mkdir dist

post:
	cp -r dist dist-gzip && gzip dist-gzip/* && ls -lhS dist*
