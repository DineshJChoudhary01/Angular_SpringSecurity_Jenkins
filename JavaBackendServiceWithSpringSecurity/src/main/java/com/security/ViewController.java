package com.security;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/")
@CrossOrigin("http://localhost:4200")
public class ViewController {

	@GetMapping("/login")
//@RequestMapping("/BackendForcalculator/login")
	public String login() {

		System.out.println("authenticated successfully");
		return "successfully";
	}

}
