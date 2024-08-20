package com.e_commerce.E_Commerce.service;

import org.springframework.stereotype.Service;

import com.e_commerce.E_Commerce.exception.UserException;
import com.e_commerce.E_Commerce.model.User;

@Service
public interface UserService {

	public User findUserByid(long id) throws UserException;
	
	public User findByJWT(String jwt) throws UserException;
	
}
