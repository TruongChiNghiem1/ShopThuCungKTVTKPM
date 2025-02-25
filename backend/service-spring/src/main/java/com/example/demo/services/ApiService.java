package com.example.demo.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class ApiService {

    private final ObjectMapper objectMapper = new ObjectMapper();

    public String callExternalApi() {
        // Tạo JSON giả lập
        Map<String, Object> response = new HashMap<>();
        response.put("id", 1);
        response.put("title", "Demo JSON Response");
        response.put("body", "This is a mock JSON response.");
        response.put("userId", 101);

        try {
            return objectMapper.writeValueAsString(response);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Error generating JSON", e);
        }
    }
}
