package com.northstardigital.app.dto;

import com.northstardigital.app.entity.ContactRequest;
import com.northstardigital.app.entity.ContactStatus;
import java.time.Instant;

public record ContactRequestResponse(Long id, String name, String email, String company, String phone, String projectType, String message, ContactStatus status, Instant createdAt, Instant updatedAt) {
    public static ContactRequestResponse from(ContactRequest contact) { return new ContactRequestResponse(contact.getId(), contact.getName(), contact.getEmail(), contact.getCompany(), contact.getPhone(), contact.getProjectType(), contact.getMessage(), contact.getStatus(), contact.getCreatedAt(), contact.getUpdatedAt()); }
}
