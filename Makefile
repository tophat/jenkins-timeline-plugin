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
	npm --prefix $(WEBAPP_ROOT) install && npm --prefix $(WEBAPP_ROOT) run test

.PHONY: clean_install
clean_install:
	mvn clean install

.PHONY: lint_webapp
lint_webapp:
	npm --prefix $(WEBAPP_ROOT) install && npm --prefix $(WEBAPP_ROOT) run lint

.PHONY: lintfix_webapp
lintfix_webapp:
	npm --prefix $(WEBAPP_ROOT) install && npm --prefix $(WEBAPP_ROOT) run lint-fix

.PHONY: start_jenkins
start_jenkins:
	bash ./devResources/manageJenkins.sh start

.PHONY: stop_jenkins
stop_jenkins::
	bash devResources/manageJenkins.sh stop

.PHONY: clean_jenkins
clean_jenkins:
	bash devResources/manageJenkins.sh clean

.PHONY: start_env
start_env:
	bash devResources/manageBuildEnvironment.sh start

.PHONY: stop_env
stop_env::
	bash devResources/manageBuildEnvironment.sh stop

.PHONY: clean_env
clean_env:
	bash devResources/manageBuildEnvironment.sh clean

.PHONY: exec_env
exec_env:
	bash devResources/manageBuildEnvironment.sh exec

.PHONY: build_and_export
build_and_export:
	bash devResources/manageBuildEnvironment.sh build_plugin