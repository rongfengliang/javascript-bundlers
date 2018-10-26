default:
	make clean && make build && make gzip && make stat

build:
	npx parcel build ./src/main.js --experimental-scope-hoisting -o dist/bundle.js

gzip:
	cp -r dist dist-gzip && gzip dist-gzip/*

stat:
	ls -lhS dist*

clean:
	rm -rf dist dist-gzip
