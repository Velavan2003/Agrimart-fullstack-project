package com.example.agri.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.agri.model.OrderModel;


public interface OrderRepository extends JpaRepository<OrderModel, Integer> {

}
