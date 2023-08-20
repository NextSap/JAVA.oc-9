package com.medilabo.diabetes.model.shared;

import com.medilabo.diabetes.model.entity.Gender;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PatientShared {
    private String id;
    private String firstName;
    private String lastName;
    private Date birthdate;
    private Gender gender;
    private String address;
    private String phoneNumber;
}
