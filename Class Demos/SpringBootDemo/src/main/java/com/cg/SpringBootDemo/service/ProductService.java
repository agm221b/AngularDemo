package com.cg.SpringBootDemo.service;

import java.util.List;

import com.cg.SpringBootDemo.dto.Product;

public interface ProductService {
	public Product addProduct(Product pro);
	public Product removeProduct(int prodId);
	public Product searchProduct(int prodId);
	public List<Product> listAllProduct();
	public Product updateProduct(Product prod);
}
