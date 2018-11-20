.PHONY: build
build:
	mvn install -e

.PHONY: package
package:
	mvn package -e

.PHONY: test
test:
	mvn test

.PHONY: clean_install
clean_install:
	mvn clean install