package com.fx.and_proejct.web.controller;

import com.fx.and_proejct.user.repository.UserRepository;
import com.fx.and_proejct.web.form.LoginForm;
import com.fx.and_proejct.web.form.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@Controller
@RequestMapping("/login")
@RequiredArgsConstructor
public class LoginController {

    private final UserRepository userRepository;
   @PostMapping
    public String login(@RequestBody LoginForm form, HttpServletRequest request){
       User loginUser = userRepository.findLoginUser(form.getLoginId(), form.getPassword());
       HttpSession session = request.getSession();
       session.setAttribute("user",loginUser);
       return "redirect:api/home";
   }

    @PostConstruct
    void testSet(){
        User user = new User("test","test!");
        userRepository.save(user);
        log.info("{}",userRepository.findAll().get(0));
    }

}
