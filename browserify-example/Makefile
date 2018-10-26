default:
	make build-cjs

build-cjs:
	make pre && node compile-cjs && make post

build:
	make pre && node compile && make post

pre:
	rm -rf dist dist-gzip && mkdir dist

post:
	cp -r dist dist-gzip && gzip dist-gzip/* && ls -lhS dist*
