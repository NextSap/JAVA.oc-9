package com.medilabo.patient.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "patient")
public class Patient {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private Date birthdate;
    private Gender gender;
    private String address;
    private String phoneNumber;
}
