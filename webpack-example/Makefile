default:
	make clean && make build && make gzip && make stat

build:
	npx webpack --entry ./src/main.js -o dist/bundle.js --mode production

gzip:
	cp -r dist dist-gzip && gzip dist-gzip/*

stat:
	ls -lhS dist*

clean:
	rm -rf dist dist-gzip
