package com.medilabo.patient.model.request;

import com.medilabo.patient.model.entity.Gender;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PatientRequest {
    @NotNull(message = "firstName:Null") @NotBlank(message = "firstName:Blank")
    private String firstName;
    @NotNull(message = "lastName:Null") @NotBlank(message = "lastName:Blank")
    private String lastName;
    @NotNull(message = "birthdate:Null") @NotBlank(message = "birthdate:Blank") @Pattern(regexp = "^(?!0000)[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$", message = "birthdate:Invalid (yyyy-MM-dd)")
    private String birthdate;
    @NotNull(message = "gender:Null")
    private Gender gender;
    private String address;
    private String phoneNumber;
}
