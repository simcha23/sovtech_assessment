package com.sovtech.sovtech.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

//@CrossOrigin(origins = "/**", allowedHeaders = "*")
@RequestMapping(path="/sovtech")
@RestController
public class UserController{

    @GetMapping("/categories")
    @ResponseBody
    private String category(){
        String url = "https://api.chucknorris.io/jokes/categories";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        return result;
    }

    @GetMapping(value = "/jokes/{category}", headers = "Accept=application/json")
    @ResponseBody
    private String joke(@PathVariable String category){
        String url = "https://api.chucknorris.io/jokes/random?category=" + category;
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        return result;
    }

}
