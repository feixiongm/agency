package com.northstardigital.app.service;

import com.northstardigital.app.dto.ContactRequestResponse;
import com.northstardigital.app.dto.CreateContactRequest;
import com.northstardigital.app.entity.ContactRequest;
import com.northstardigital.app.repository.ContactRequestRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactRequestService {
    private final ContactRequestRepository repository;
    public ContactRequestService(ContactRequestRepository repository) { this.repository = repository; }
    @Transactional
    public ContactRequestResponse create(CreateContactRequest request) {
        ContactRequest contact = new ContactRequest(clean(request.name()), clean(request.email()).toLowerCase(), cleanNullable(request.company()), cleanNullable(request.phone()), clean(request.projectType()), clean(request.message()));
        return ContactRequestResponse.from(repository.save(contact));
    }
    private String clean(String value) { return value.trim(); }
    private String cleanNullable(String value) { return value == null || value.isBlank() ? null : value.trim(); }
}
