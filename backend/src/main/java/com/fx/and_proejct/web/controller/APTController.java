package com.fx.and_proejct.web.controller;

import com.fx.and_proejct.notice.domain.APT;
import com.fx.and_proejct.notice.domain.TestAPT;
import com.fx.and_proejct.notice.domain.repository.APTRepository;
import com.fx.and_proejct.web.service.APTService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/APT")
public class APTController {

    private final APTService aptService;

    @GetMapping("/{aptName}")
    public APT getATPRange(@PathVariable(required = true) String aptName){
        Optional<APT> target = aptService.getAPTByname(aptName);
        if(!target.isEmpty()){
            return target.get();
        }
        return null;
    }

    @PostConstruct
    public void initAPT(){
        APT remian = new TestAPT(10,"remian");
        APT ipark = new TestAPT(20,"ipark");
        aptService.addAPT(remian);
        aptService.addAPT(ipark);

        for (APT a : aptService.getAPTList()) {
            log.info("APTName : {}", a.getName());
        }
    }

}
