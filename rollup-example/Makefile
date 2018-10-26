default:
	make direct-es

all:
	node scripts/all

direct-cjs-gcc:
	npx rollup -c rollup.cjs.gcc.config.js

direct-cjs:
	npx rollup -c rollup.cjs.config.js

direct-es:
	npx rollup -c rollup.es.config.js

direct-es-gcc:
	npx rollup -c rollup.gcc.config.js

named:
	npx rollup -c rollup.config.js

named-gcc:
	npx rollup -c rollup.named.gcc.config.js

pre:
	rm -rf dist dist-gzip && mkdir dist

post:
	cp -r dist dist-gzip && gzip dist-gzip/* && ls -lhS dist*
