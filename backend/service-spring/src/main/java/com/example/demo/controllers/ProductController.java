package com.example.demo.controllers;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @GetMapping
    public List<Map<String, String>> getProducts() {
        List<Map<String, String>> products = new ArrayList<>();

        Map<String, String> product1 = new HashMap<>();
        product1.put("id", "1");
        product1.put("name", "Hạt cho mèo Me-O");
        product1.put("price", "45000");

        Map<String, String> product2 = new HashMap<>();
        product2.put("id", "2");
        product2.put("name", "Pate cho chó Pedigree");
        product2.put("price", "30000");

        products.add(product1);
        products.add(product2);

        return products;
    }
}

