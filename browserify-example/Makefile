default:
	make direct-cjs

all:
	node scripts/all

direct-cjs:
	node compile-cjs

direct-es:
	node compile-es

named:
	node compile

pre:
	rm -rf dist dist-gzip && mkdir dist

post:
	cp -r dist dist-gzip && gzip dist-gzip/* && ls -lhS dist*
