package com.medilabo.notes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class MedilaboNotesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedilaboNotesApplication.class, args);
	}

}
