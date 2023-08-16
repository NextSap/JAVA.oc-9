package com.medilabo.patient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class MedilaboPatientApplication {

    public static void main(String[] args) {
        SpringApplication.run(MedilaboPatientApplication.class, args);
    }

}
