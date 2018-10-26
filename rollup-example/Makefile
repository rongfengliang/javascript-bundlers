default:
	make clean && make build && make gzip && make stat

build:
	npx rollup -c rollup.config.js

gzip:
	cp -r dist dist-gzip && gzip dist-gzip/*

stat:
	ls -lhS dist*

clean:
	rm -rf dist dist-gzip
