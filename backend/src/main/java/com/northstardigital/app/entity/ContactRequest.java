package com.northstardigital.app.entity;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "contact_requests")
public class ContactRequest {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @Column(nullable = false, length = 120) private String name;
    @Column(nullable = false, length = 254) private String email;
    @Column(length = 160) private String company;
    @Column(length = 40) private String phone;
    @Column(name = "project_type", nullable = false, length = 80) private String projectType;
    @Column(nullable = false, columnDefinition = "TEXT") private String message;
    @Enumerated(EnumType.STRING) @Column(nullable = false, length = 30) private ContactStatus status;
    @Column(name = "created_at", nullable = false, updatable = false) private Instant createdAt;
    @Column(name = "updated_at", nullable = false) private Instant updatedAt;

    protected ContactRequest() {}
    public ContactRequest(String name, String email, String company, String phone, String projectType, String message) {
        this.name = name; this.email = email; this.company = company; this.phone = phone; this.projectType = projectType; this.message = message; this.status = ContactStatus.NEW;
    }
    @PrePersist void onCreate() { Instant now = Instant.now(); createdAt = now; updatedAt = now; }
    @PreUpdate void onUpdate() { updatedAt = Instant.now(); }
    public Long getId() { return id; } public String getName() { return name; } public String getEmail() { return email; }
    public String getCompany() { return company; } public String getPhone() { return phone; } public String getProjectType() { return projectType; }
    public String getMessage() { return message; } public ContactStatus getStatus() { return status; } public Instant getCreatedAt() { return createdAt; } public Instant getUpdatedAt() { return updatedAt; }
}
