package com.e_commerce.E_Commerce.exception;


import org.springframework.web.bind.annotation.RestControllerAdvice;


public class UserException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public UserException(String message) {
        super(message);
    }
}