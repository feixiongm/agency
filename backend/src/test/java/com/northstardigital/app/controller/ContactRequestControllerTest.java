package com.northstardigital.app.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.northstardigital.app.dto.ContactRequestResponse;
import com.northstardigital.app.entity.ContactStatus;
import com.northstardigital.app.exception.GlobalExceptionHandler;
import com.northstardigital.app.service.ContactRequestService;
import java.time.Instant;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ContactRequestController.class)
@Import(GlobalExceptionHandler.class)
class ContactRequestControllerTest {
    @Autowired MockMvc mvc;
    @Autowired ObjectMapper objectMapper;
    @MockBean ContactRequestService service;

    @Test void createsValidContactRequest() throws Exception {
        Instant now = Instant.parse("2026-01-01T00:00:00Z");
        when(service.create(any())).thenReturn(new ContactRequestResponse(1L, "Taylor Reed", "taylor@example.com", "Example Co", null, "Backend Development", "We need a reliable backend platform.", ContactStatus.NEW, now, now));
        String body = """
            {"name":"Taylor Reed","email":"taylor@example.com","company":"Example Co","phone":"","projectType":"Backend Development","message":"We need a reliable backend platform."}
            """;
        mvc.perform(post("/api/contact").contentType(MediaType.APPLICATION_JSON).content(body)).andExpect(status().isCreated()).andExpect(jsonPath("$.id").value(1)).andExpect(jsonPath("$.status").value("NEW"));
    }

    @Test void rejectsInvalidContactRequest() throws Exception {
        String body = """
            {"name":"","email":"not-an-email","projectType":"","message":"short"}
            """;
        mvc.perform(post("/api/contact").contentType(MediaType.APPLICATION_JSON).content(body)).andExpect(status().isBadRequest()).andExpect(jsonPath("$.message").value("Request validation failed")).andExpect(jsonPath("$.fieldErrors.email").exists()).andExpect(jsonPath("$.fieldErrors.message").exists());
    }
}
