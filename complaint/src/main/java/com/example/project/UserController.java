package com.example.project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;
    
    @PostMapping("/sign")
    public User Register(@RequestBody User user) {
        // Check if user already exists
        if (userService.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("User already exists!");
        }
        return userService.saveUser(user);
    }
}