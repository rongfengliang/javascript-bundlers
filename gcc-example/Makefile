default:
	make clean && make es5 && make es6 && make gzip && make stats

es5:
	java -jar gcc/closure-compiler-v20181008.jar --flagfile conf/es5.conf

es6:
	java -jar gcc/closure-compiler-v20181008.jar --flagfile conf/es6.conf

gzip:
	cp -r dist dist-gzip && gzip dist-gzip/*

stats:
	ls -lhS dist*

clean:
	rm -rf dist dist-gzip
