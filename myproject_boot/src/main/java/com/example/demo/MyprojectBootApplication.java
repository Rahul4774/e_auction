package com.example.demo;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class MyprojectBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyprojectBootApplication.class, args);
		
//		User u1 = new User();		
//		u1.setId(1);
//		u1.setName("Rahul Patil");
//		u1.setAddress("plot 5 Jayhind colony jalgaon");
//		u1.setMail("patilrahul@gmail.com");
//		u1.setDob(LocalDate.parse("1999-08-17"));
//		u1.setMobile("7266664460");
//		u1.setPassword("Rahul@123");
//		u1.setRole(Role.USER);
//		
//		User u2 = new User();		
//		u2.setId(2);
//		u2.setName("Suraj Pathare");
//		u2.setAddress("MIDC sector-4 ahamadnagar");
//		u2.setMail("patharesuraj@gmail.com");
//		u2.setDob(LocalDate.parse("1998-03-20"));
//		u2.setMobile("9638951801");
//		u2.setPassword("Suraj@123");
//		u2.setRole(Role.ADMIN);
//		
//		User u3 = new User();		
//		u3.setId(3);
//		u3.setName("Seema Tambe");
//		u3.setAddress("b-304 mumbai naka Nashik");
//		u3.setMail("tambeseema@gmail.com");
//		u3.setDob(LocalDate.parse("1998-08-08"));
//		u3.setMobile("9696996171");
//		u3.setPassword("Seema@123");
//		u3.setRole(Role.STAFF);
//		
//		User u4 = new User();		
//		u4.setId(4);
//		u4.setName("Radhemohan Tiwari");
//		u4.setAddress("4 karai nagar kusgaon bk lonavala 410401");
//		u4.setMail("radhemohan@gmail.com");
//		u4.setDob(LocalDate.parse("1976-10-25"));
//		u4.setMobile("9845652314");
//		u4.setPassword("Radhe@123");
//		u4.setRole(Role.USER);
//		
//		User u5 = new User();		
//		u5.setId(5);
//		u5.setName("Ishankit sodhi");
//		u5.setAddress("A-21 Star Heights , Chander nagar, Gaziabad , up - 301592");
//		u5.setMail("sodhiji420@gmail.com");
//		u5.setDob(LocalDate.parse("1983-05-08"));
//		u5.setMobile("8492314623");
//		u5.setPassword("sodhi@123");
//		u5.setRole(Role.USER);
//		
//		IUserService serv = new UserServiceImpl();
//		serv.saveUser(u1);
//		serv.saveUser(u2);
//		serv.saveUser(u3);
//		serv.saveUser(u4);
//		serv.saveUser(u5);
		
	}
	
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/greeting-javaconfig").allowedOrigins("http://localhost:3000");
            }
        };
    }
	
	
}
