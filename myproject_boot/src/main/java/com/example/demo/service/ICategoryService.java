package com.example.demo.service;

import java.util.List;
import com.example.demo.pojos.Category;

public interface ICategoryService {
	List<Category> getAllCategory();
	
	Category getCategory(int Catid);
}
