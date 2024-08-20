package com.e_commerce.E_Commerce.model;

import jakarta.persistence.Embeddable;


public class Sizes {

	private String name;
	private int quantity;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Sizes(String name, int quantity) {
		super();
		this.name = name;
		this.quantity = quantity;
	}
	
}
