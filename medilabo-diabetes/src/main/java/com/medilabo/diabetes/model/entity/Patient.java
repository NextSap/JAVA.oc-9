package com.medilabo.diabetes.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Patient {
    private int age;
    private int trigger;
    private Gender gender;

    public boolean ageBetween(int min, int max) {
        return age >= min && age <= max;
    }

    public boolean triggerBetween(int min, int max) {
        return trigger >= min && trigger <= max;
    }
}
