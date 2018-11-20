.PHONY: clean_webapp
clean_webapp:
	find ./src/main/webapp -not -name '*jenkins*' -delete

.PHONY: build_all
build_all:
	make build_webapp && make build

.PHONY: build
build:
	mvn install -e

.PHONY: build_webapp
build_webapp:
	cd jenkinstl && PUBLIC_URL=/plugin/jenkins-timeline npm run build-to-plugin

.PHONY: package
package:
	mvn package -e

.PHONY: test
test:
	mvn test

.PHONY: clean_install
clean_install:
	mvn clean install