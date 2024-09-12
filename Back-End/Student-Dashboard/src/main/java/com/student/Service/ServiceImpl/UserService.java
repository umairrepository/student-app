package com.student.Service.ServiceImpl;

import com.student.Entity.User;
import com.student.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

        @Autowired
        private UserRepository userRepository;

        public User register(User user) {
            Optional<User> record = userRepository.findByEmail(user.getEmail());
            if (record.isPresent()) {
                return null;
            } else {
                return userRepository.save(user);

            }
        }

        public User login(String email, String password) {
            Optional<User> user = userRepository.findByEmail(email);
            return (user != null && user.get().getPassword().equals(password)) ? user.get() : null;
        }
}

