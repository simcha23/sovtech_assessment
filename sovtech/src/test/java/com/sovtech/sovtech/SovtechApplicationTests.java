package com.sovtech.sovtech;

import com.sovtech.sovtech.controller.UserController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;



@SpringBootTest
class SovtechApplicationTests {

	@Autowired
	UserController userController;
	@Test
	void contextLoads() {
	}
	@Test
	void getCategories(){

	}

}
