package com.fx.and_proejct.utils;

import org.springframework.cglib.core.Local;

import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Date;

public class DateUtil {

    private static LocalDateTime date;


    public static LocalDateTime getNow(){
        date = LocalDateTime.now();
        return date;
    }

    public static String timeDifference(LocalDateTime localDateTime){
        Duration between = Duration.between(localDateTime, DateUtil.getNow());
        long seconds = between.getSeconds();
        System.out.println(seconds);
        String formatting = fewHoursAgoFormatting(seconds,localDateTime);
        System.out.println(formatting);
        return "";
    }

    private static String fewHoursAgoFormatting(long seconds,LocalDateTime localDateTime) {
        if(seconds < DAYCOND.SECOND_COND){
            return localDateTime.getYear() + "년 " + localDateTime.getMonthValue() + "월 " + localDateTime.getDayOfMonth() + "일";
        }else if (seconds >= DAYCOND.SECOND_COND && seconds < DAYCOND.MIN_COND){
            return (seconds / 60) + " 분 전";
        }else if(seconds >= DAYCOND.MIN_COND && seconds < DAYCOND.HOUR_COND){
            return (seconds/(60*60))+ "시간 전";
        }else if(seconds >= DAYCOND.HOUR_COND){
            return  (seconds/((60*60)/24)) + "일 전";
        }
        return "";
    }


}
