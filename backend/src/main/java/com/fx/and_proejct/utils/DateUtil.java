package com.fx.and_proejct.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {

    private static Date date;
    private static SimpleDateFormat sp;
    private static final String DATE_FORMMAT = "yy년 mm월 dd일";

    public static String getNow(){
        date = new Date();
        sp = new SimpleDateFormat(DATE_FORMMAT);
        return sp.format(date);
    }


}
