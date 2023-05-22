package com.fx.and_proejct.user.repository;

import com.fx.and_proejct.web.form.User;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.PostConstruct;

import static org.junit.jupiter.api.Assertions.*;

@Slf4j
@SpringBootTest
class MemeryUserRepositoryTest {

    @Autowired
    UserRepository repository;
    @Test
    void findLoginUser() {
        User test = repository.findLoginUser("test", "test!");
        log.info("{} : {} ", test.getLoginId(),test.getPw());
    }

    @PostConstruct
    public void testdate(){
        User user = new User("test","test!");
        repository.save(user);

        User user1 = new User("test","test");
        repository.save(user1);
    }
}