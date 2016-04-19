include node_modules/react-fatigue-dev/Makefile

test:
	mocha --require should --compilers js:babel-register test/*.test.js

.PHONY: test
