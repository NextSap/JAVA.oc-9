FROM maven:3.8.3-openjdk-17 AS build
COPY src /src
COPY pom.xml pom.xml
COPY target/patient-0.0.1.jar patient.jar
COPY database.sql /docker-entrypoint-initdb.d
ENTRYPOINT ["java","-jar","patient.jar"]