package com.fx.and_proejct;

import com.fx.and_proejct.utils.DateUtil;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;

@Slf4j
public class testApp extends Thread{

    public static void main(String[] args) throws InterruptedException {
        LocalDateTime now = DateUtil.getNow();
        sleep(60000);
        log.info(DateUtil.getElapsedTimeDescription(now,DateUtil.getNow()));

    }
}
