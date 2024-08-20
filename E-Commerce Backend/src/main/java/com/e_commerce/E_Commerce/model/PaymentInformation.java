package com.e_commerce.E_Commerce.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;


public class PaymentInformation {
	
	@Column(name="Cardholder_Name")
	private String cardholderName;
	
	@Column(name="Card_No")
	private String cardNumber;
	
	@Column(name="Expiration_Date")
	private LocalDateTime expirationDate;
	
	@Column(name="CVV")
	private String cvv;

	public PaymentInformation(String cardholderName, String cardNumber, LocalDateTime expirationDate, String cvv) {
		super();
		this.cardholderName = cardholderName;
		this.cardNumber = cardNumber;
		this.expirationDate = expirationDate;
		this.cvv = cvv;
	}

	public String getCardholderName() {
		return cardholderName;
	}

	public void setCardholderName(String cardholderName) {
		this.cardholderName = cardholderName;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public LocalDateTime getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(LocalDateTime expirationDate) {
		this.expirationDate = expirationDate;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
	
	

}
