FROM maven:3.8.3-openjdk-17 AS build
COPY src /src
COPY pom.xml pom.xml
COPY target/diabetes-0.0.1.jar diabetes.jar
ENTRYPOINT ["java","-jar","diabetes.jar"]