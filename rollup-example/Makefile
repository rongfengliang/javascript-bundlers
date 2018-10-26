default:
	make build

build-closure:
	make pre && npx rollup -c rollup.gcc.config.js && make post

build-cjs:
	make pre && npx rollup -c rollup.cjs.config.js && make post

build:
	make pre && npx rollup -c rollup.config.js && make post

pre:
	rm -rf dist dist-gzip && mkdir dist

post:
	cp -r dist dist-gzip && gzip dist-gzip/* && ls -lhS dist*
