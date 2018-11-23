WEBAPP_ROOT = "webapp_src"
WEBAPP_PUBLIC_URL = "/plugin/pipeline-timeline"

.PHONY: clean_webapp
clean_webapp:
	find ./src/main/webapp/* | grep -v "jenkins_assets*" | xargs rm -rf

.PHONY: build_all
build_all:
	make build_webapp && make build

.PHONY: build
build:
	mvn install -e

.PHONY: build_webapp
build_webapp:
	make clean_webapp && cd $(WEBAPP_ROOT) && npm install && PUBLIC_URL=$(WEBAPP_PUBLIC_URL) npm run build-to-plugin

.PHONY: test
test:
	mvn test

.PHONY: test_webapp
test_webapp:
	cd $(WEBAPP_ROOT) && npm install && npm run test

.PHONY: clean_install
clean_install:
	mvn clean install

.PHONY: lint_webapp
lint_webapp:
	cd $(WEBAPP_ROOT) && npm install && npm run lint

.PHONY: lintfix_webapp
lintfix_webapp:
	cd $(WEBAPP_ROOT) && npm install && npm run lint-fix