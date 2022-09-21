package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojos.Category;
import com.example.demo.service.ICategoryService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/category")
@Validated
public class CategoryController {
	
	@Autowired
	private ICategoryService categoryService;
	
	@GetMapping
	public List<Category> getall(){
		return categoryService.getAllCategory();
	}
	
	@GetMapping("/{cat_id}")
	public Category getCategory(@PathVariable int cat_id) {
		return categoryService.getCategory(cat_id);
	}
}
