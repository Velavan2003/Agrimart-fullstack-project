package com.example.agri.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.agri.model.OrderModel;
import com.example.agri.repository.OrderRepository;
@Service
public class OrderService {
	@Autowired
	OrderRepository or;
	public List<OrderModel>getAllDetails()
	{
		return or.findAll();
	}
	public OrderModel saveDetails(OrderModel a)
	{
		return or.save(a);
	}

}
