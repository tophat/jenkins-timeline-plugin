# Jenkins Timeline

## Contributing

### Setting up a development environment

To work on the project, you will need ...

- [Maven 3.1.0+](https://maven.apache.org/download.cgi);
- [A Java development environment](https://www.oracle.com/technetwork/java/javase/downloads/index.html);
- [A local instance of Jenkins](https://jenkins.io/doc/book/installing/);

### Building

The makefile is set up with a few useful commands to abstract away `mvn` calls. Call `make build` to build the `hpi` file that you can import in your Jenkins instance to install the plugin.