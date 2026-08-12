package com.northstardigital.app.service;

import com.northstardigital.app.dto.CreateContactRequest;
import com.northstardigital.app.entity.ContactRequest;
import com.northstardigital.app.repository.ContactRequestRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ContactRequestServiceTest {
    @Mock ContactRequestRepository repository;
    @Test void normalizesInputBeforeSaving() {
        when(repository.save(any())).thenAnswer(invocation -> invocation.getArgument(0));
        ContactRequestService service = new ContactRequestService(repository);
        service.create(new CreateContactRequest("  Taylor Reed ", " TAYLOR@EXAMPLE.COM ", "  Example Co ", " ", " Backend Development ", "  A sufficiently detailed project message. "));
        ArgumentCaptor<ContactRequest> captor = ArgumentCaptor.forClass(ContactRequest.class);
        org.mockito.Mockito.verify(repository).save(captor.capture());
        assertThat(captor.getValue().getName()).isEqualTo("Taylor Reed");
        assertThat(captor.getValue().getEmail()).isEqualTo("taylor@example.com");
        assertThat(captor.getValue().getPhone()).isNull();
    }
}
