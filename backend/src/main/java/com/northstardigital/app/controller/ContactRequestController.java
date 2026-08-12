package com.northstardigital.app.controller;

import com.northstardigital.app.dto.ContactRequestResponse;
import com.northstardigital.app.dto.CreateContactRequest;
import com.northstardigital.app.service.ContactRequestService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactRequestController {
    private final ContactRequestService service;
    public ContactRequestController(ContactRequestService service) { this.service = service; }
    @PostMapping @ResponseStatus(HttpStatus.CREATED)
    public ContactRequestResponse create(@Valid @RequestBody CreateContactRequest request) { return service.create(request); }
}
