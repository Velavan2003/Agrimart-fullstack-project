package com.example.agri.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.agri.model.OrderModel;
import com.example.agri.service.OrderService;
@CrossOrigin("*")
@RestController

public class OrderController {
	@Autowired
	OrderService os;
	@GetMapping("/order")
	public List<OrderModel>getDetails()
	{
		return os.getAllDetails();
	}
	@PostMapping("/osave")
	public OrderModel saveDetails(@RequestBody OrderModel a)
	{
		return os.saveDetails(a);
	}
}
