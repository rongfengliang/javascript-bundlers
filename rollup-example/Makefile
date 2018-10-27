default:
	make direct-es

all:
	node scripts/all

es:
	npx rollup -c conf/es.conf.js

cjs:
	npx rollup -c conf/cjs.conf.js

es-source:
	npx rollup -c conf/es-source.conf.js

cjs-source:
	npx rollup -c conf/cjs-source.conf.js

es-gcc:
	npx rollup -c conf/es-gcc.conf.js

cjs-gcc:
	npx rollup -c conf/cjs-gcc.conf.js

es-source-gcc:
	npx rollup -c conf/es-source-gcc.conf.js

cjs-source-gcc:
	npx rollup -c conf/cjs-source-gcc.conf.js

pre:
	rm -rf dist dist-gzip && mkdir dist

post:
	cp -r dist dist-gzip && gzip dist-gzip/* && ls -lhS dist*
