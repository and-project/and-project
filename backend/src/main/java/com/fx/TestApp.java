package com.fx;

import com.fx.and_proejct.utils.DateUtil;

import java.sql.Date;
import java.time.LocalDateTime;

public class TestApp extends Thread{

    public static void main(String[] args) throws InterruptedException {
        LocalDateTime now = DateUtil.getNow();
        sleep(60000*5);
        DateUtil.timeDifference(now);
    }

}
