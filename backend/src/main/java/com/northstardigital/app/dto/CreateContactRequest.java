package com.northstardigital.app.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateContactRequest(
    @NotBlank @Size(max = 120) String name,
    @NotBlank @Email @Size(max = 254) String email,
    @Size(max = 160) String company,
    @Size(max = 40) String phone,
    @NotBlank @Size(max = 80) String projectType,
    @NotBlank @Size(min = 10, max = 5000) String message
) {}
