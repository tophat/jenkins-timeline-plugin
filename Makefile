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
	make clean_webapp && cd jenkinstl && npm install && PUBLIC_URL=/plugin/jenkins-timeline npm run build-to-plugin

.PHONY: package
package:
	mvn package -e

.PHONY: test
test:
	mvn test

.PHONY: test_webapp
test_webapp:
	cd jenkinstl && npm run test

.PHONY: clean_install
clean_install:
	mvn clean install