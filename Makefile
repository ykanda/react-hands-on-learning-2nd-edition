.PHONY: build-dev
build-dev:
	npm run build-dev


.PHONY: build
build:
	npm run build

.PHONY: serve
serve:
	npx serve

.PHONY: setup
setup:
	npm install --save-dev webpack webpack-cli
	npm install --save-dev @babel/preset-env @babel/preset-react