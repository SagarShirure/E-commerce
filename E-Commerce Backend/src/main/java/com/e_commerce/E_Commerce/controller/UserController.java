package com.e_commerce.E_Commerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.e_commerce.E_Commerce.repository.UserRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/")
public class UserController {
	
	@Autowired
	private UserRepository repository;
	
	@GetMapping("")
	public String getMethodName() {
		return "Hi all";
	}
	
}
