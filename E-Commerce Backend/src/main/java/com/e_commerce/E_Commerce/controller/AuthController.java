package com.e_commerce.E_Commerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.e_commerce.E_Commerce.config.JwtProvider;
import com.e_commerce.E_Commerce.exception.UserException;
import com.e_commerce.E_Commerce.model.User;
import com.e_commerce.E_Commerce.repository.UserRepository;
import com.e_commerce.E_Commerce.request.LoginRequest;
import com.e_commerce.E_Commerce.response.AuthResponse;
import com.e_commerce.E_Commerce.service.CustomUserServiceImpl;

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private UserRepository repository;
	@Autowired
	private JwtProvider jwtProvider;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private CustomUserServiceImpl customUserServiceImpl; 

	@PostMapping("/signup")
	public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UserException{
		String email=user.getEmail();
		String password=user.getPassword();
		String firName=user.getFirstName();
		String lastName=user.getLastName();
		User isEmailExist=repository.findByEmail(email);
		
		if(isEmailExist!= null) {
			throw new UserException("Email already exists");
		}
		
		User createdUser = new User();
		createdUser.setEmail(email);
		createdUser.setPassword(passwordEncoder.encode(password));
		createdUser.setFirstName(firName);
		createdUser.setLastName(lastName);
		
		User savedUser=repository.save(createdUser);
		
		Authentication authentication= new UsernamePasswordAuthenticationToken(email, password);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String token= jwtProvider.generateToken(authentication);
		
		AuthResponse authResponse=new AuthResponse(token, "Sign up sucess");
		return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.OK);
	}
	
	@PostMapping("/signin")
	public ResponseEntity<AuthResponse> handleLogin(@RequestBody LoginRequest loginRequest) {
		
		String userName=loginRequest.getEmail();
		String password= loginRequest.getPassword();
		
		Authentication authentication= authenticate(userName, password);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String token= jwtProvider.generateToken(authentication);
		
		AuthResponse authResponse=new AuthResponse(token, "Signin sucess");
		return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.OK);
	}

	private Authentication authenticate(String userName, String password) {
		// TODO Auto-generated method stub
		
		UserDetails userDetails = customUserServiceImpl.loadUserByUsername(userName);
		
		if(userDetails==null) {
			throw new BadCredentialsException("Invalid Username");
		}
		
		if(!passwordEncoder.matches(password, userDetails.getPassword())) {
			throw new BadCredentialsException("Invalid Password");
		}
		return new UsernamePasswordAuthenticationToken(userDetails,null, userDetails.getAuthorities());
	}
}
