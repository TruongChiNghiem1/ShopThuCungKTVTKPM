package com.example.demo.services;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ApiService {

    private final RestTemplate restTemplate = new RestTemplate();

    public String callExternalApi() {
        String url = "https://jsonplaceholder.typicode.com/posts/1"; // API giả lập
        return restTemplate.getForObject(url, String.class);
    }
}
