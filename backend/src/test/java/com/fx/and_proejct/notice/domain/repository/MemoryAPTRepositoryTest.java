package com.fx.and_proejct.notice.domain.repository;

import com.fx.and_proejct.notice.domain.APT;
import com.fx.and_proejct.notice.domain.TestAPT;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;

import org.junit.jupiter.api.Test;

import java.util.Optional;


@Slf4j
class MemoryAPTRepositoryTest {

    private static final MemoryAPTRepository ar = new MemoryAPTRepository();

    @AfterEach
    void tearDown() {
        ar.clearStore();
    }

    @Test
    void addAPT() {
        //given
        APT remian = new TestAPT(10,"remian");
        APT ipark = new TestAPT(20, "ipark");
        //when
        ar.addAPT(remian);
        ar.addAPT(ipark);
        //then
        for(APT a : ar.getAPTList()){
            log.info("name : {}", a.getName());
            for(String s : a.getNotificationTarget()){
                log.info("{}", s);
            }
        }
    }

    @Test
    void removeAPT() {
        //given
        APT remian = new TestAPT(10,"remian");
        APT ipark = new TestAPT(20, "ipark");
        //when
        ar.addAPT(remian);
        ar.addAPT(ipark);
        ar.removeAPT(remian.getName());
        //then
        for(APT a : ar.getAPTList()){
            log.info("name : {}", a.getName());
            for(String s : a.getNotificationTarget()){
                log.info("{}", s);
            }
        }
    }

    @Test
    void getAPTByname() {
        //given
        APT remian = new TestAPT(10,"remian");
        APT ipark = new TestAPT(20, "ipark");
        //when
        ar.addAPT(remian);
        ar.addAPT(ipark);
        //then
        APT target = ar.getAPTByname(ipark.getName()).get();
        for(String s : target.getNotificationTarget()){
            log.info("{}", s);
        }
    }

    @Test
    void duplecationAPT() {
        //given
        APT remianA = new TestAPT(10,"remian");
        APT remianB = new TestAPT(10,"remian");
        //when
        ar.addAPT(remianA);

        boolean du = ar.DuplecationAPT(remianB.getName());
        //given
        Assertions.assertThat(du).isTrue();
    }

    @Test
    void updateAPT() {
        //given
        APT remianA = new TestAPT(10,"remian");
        APT remianB = new TestAPT(20,"remian");
        //when
        ar.addAPT(remianA);
        ar.updateAPT("remian",remianB);
        Optional<APT> target = ar.getAPTByname("remian");
        //then
        for(String s : target.get().getNotificationTarget()){
            log.info("{}", s);
        }
    }
}