WEBAPP_ROOT = "webapp_src"
WEBAPP_PUBLIC_URL = "/plugin/pipeline-timeline"

.PHONY: build
build:
	mvn install -e dependency:resolve-plugins dependency:go-offline

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

.PHONY: start_jenkins
start_jenkins:
	sh devResources/manageJenkins.sh start

.PHONY: stop_jenkins
stop_jenkins::
	sh devResources/manageJenkins.sh stop

.PHONY: clean_jenkins
clean_jenkins:
	sh devResources/manageJenkins.sh clean