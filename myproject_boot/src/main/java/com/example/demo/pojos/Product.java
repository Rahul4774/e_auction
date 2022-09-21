package com.example.demo.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Future;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id")
	@JsonProperty("product_id")
	private Integer productid;
	
	

	@Column(name = "cat_id")
	@JsonProperty("cat_id")
	private Integer catid;
	
	@Column(name = "seller_id")
	@JsonProperty("seller_id")
	private Integer sellerid;
	

	@Column(length = 30)
	@JsonProperty("name")
	private String name;


	@Column(length = 50)
	@JsonProperty("details")
	private String details;
	
	@Range(min = 1,message = "invalid Amount")
	@JsonProperty("min_bid")
	private double min_bid;
	
	@FutureOrPresent
	@JsonProperty("opening_date")
	private LocalDate opening_date;
	
	@FutureOrPresent
	@JsonProperty("closing_date")
	private LocalDate closing_date;
	
	@JsonProperty("status")
	private String status="Unsold";

	@Column(name = "img", nullable = false)
	@JsonProperty("img")
	private String img;

	
}
//product_id | cat_id | seller_id | name |details | min_bid | opening_date | closing_date | status