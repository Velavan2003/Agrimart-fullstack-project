package com.example.agri;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
@OpenAPIDefinition
(info =@Info(
title = "agrimart",
version = "1.1.2",
description = "agrimart Project",
contact = @Contact(
		name = "velavan",
		email = "velavan1511@gmail.com"
		)
)
)

@SpringBootApplication
public class AgriApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgriApplication.class, args);
	}

}
