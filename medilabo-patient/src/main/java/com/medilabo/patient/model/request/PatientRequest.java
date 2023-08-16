package com.medilabo.patient.model.request;

import com.medilabo.patient.model.entity.Gender;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PatientRequest {
    @NotNull(message = "firstName:Null") @NotBlank(message = "firstName:Blank")
    private String firstName;
    @NotNull(message = "lastName:Null") @NotBlank(message = "lastName:Blank")
    private String lastName;
    @NotNull(message = "birthdate:Null") @NotBlank(message = "birthdate:Blank")
    private String birthdate;
    @NotNull(message = "gender:Null")
    private Gender gender;
    private String address;
    private String phoneNumber;
}
