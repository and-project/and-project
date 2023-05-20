package com.fx.and_proejct.utils;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

public class DateUtil {

    private static LocalDateTime dateTime;

    public static LocalDateTime getNow(){
        dateTime = LocalDateTime.now();
        return dateTime;
    }

    /**
     Version1
     연산의 정확도(연월일시 차이의 정확도)가 낮음
     초 차이(ex 3초 전)일 경우 min, hour 변수 등 선언이 불필요 -> 메모리 낭비
     */
    public static String timeDifference(LocalDateTime create, LocalDateTime present){
        Duration between = Duration.between(create, present);
        long sec = between.getSeconds();
        if(sec == 0)
            return "지금";
        return fewHoursAgoFormatting(sec);
    }

    private static String fewHoursAgoFormatting(long sec) {
        long min = sec / 60;
        long hour = min / 60;
        long day = hour / 24;
        long month = day / 30;
        long year = month / 12;

        if(year != 0)
            return year + "년 전";
        else if(month != 0)
            return month + "달 전";
        else if(day != 0)
            return day + "일 전";
        else if(hour != 0)
            return hour + "시간 전";
        else if(min != 0)
            return min + "분 전";
        else
            return sec + "초 전";
    }

    /**
     Version2
     연산의 정확도 100%
     연도 차이일 경우 month, day 등 변수를 선언하지 않음 -> 메모리 절약
     여전히 초 차이(ex 3초 전)일 경우 min, hour 변수 등 선언이 불필요 -> 메모리 낭비
     속도가 Version1에 비해 확연히 빠름
     */
    public static String getElapsedTimeDescription(LocalDateTime create, LocalDateTime present){
        long year = ChronoUnit.YEARS.between(create, present);
        if(year != 0)
            return year + "년 전";

        long month = ChronoUnit.MONTHS.between(create, present);
        if(month != 0)
            return month + "달 전";

        long day = ChronoUnit.DAYS.between(create, present);
        if(day != 0)
            return day + "일 전";

        long hour = ChronoUnit.HOURS.between(create, present);
        if(hour != 0)
            return hour + "시간 전";

        long min = ChronoUnit.MINUTES.between(create, present);
        if(min != 0)
            return min + "분 전";

        long sec = ChronoUnit.SECONDS.between(create, present);
        if(sec != 0)
            return sec + "초 전";
        else
            return "지금";
    }
}