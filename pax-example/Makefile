default:
	make pre && make watch

watch:
	px -w --external-core -E ./src/main.js dist/bundle.js

no-watch:
	px --external-core -E -M ./src/main.js dist/bundle.js

pre:
	rm -rf dist

