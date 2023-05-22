package com.fx.and_proejct.utils;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

@Slf4j
class DateUtilTest {

    @Test
    void timeDifference() {
        LocalDateTime date1 = LocalDateTime.of(2023, 5, 21, 5, 48, 0);
        LocalDateTime date2 = LocalDateTime.of(2023, 5, 21, 5, 48, 25);
        LocalDateTime date3 = LocalDateTime.of(2023, 5, 21, 5, 51, 25);
        LocalDateTime date4 = LocalDateTime.of(2023, 5, 21, 12, 51, 25);
        LocalDateTime date5 = LocalDateTime.of(2023, 5, 30, 12, 51, 25);
        LocalDateTime date6 = LocalDateTime.of(2023, 11, 30, 12, 51, 25);
        LocalDateTime date7 = LocalDateTime.of(2025, 11, 30, 12, 51, 25);

        log.debug(DateUtil.timeDifference(date1, date1));
        log.debug(DateUtil.timeDifference(date1, date2));
        log.debug(DateUtil.timeDifference(date2, date3));
        log.debug(DateUtil.timeDifference(date3, date4));
        log.debug(DateUtil.timeDifference(date4, date5));
        log.debug(DateUtil.timeDifference(date5, date6));
        log.debug(DateUtil.timeDifference(date6, date7));
    }

    @Test
    void getElapsedTimeDescription() {
        LocalDateTime date1 = LocalDateTime.of(2023, 5, 21, 5, 48, 0);
        LocalDateTime date2 = LocalDateTime.of(2023, 5, 21, 5, 48, 25);
        LocalDateTime date3 = LocalDateTime.of(2023, 5, 21, 5, 51, 25);
        LocalDateTime date4 = LocalDateTime.of(2023, 5, 21, 12, 51, 25);
        LocalDateTime date5 = LocalDateTime.of(2023, 5, 30, 12, 51, 25);
        LocalDateTime date6 = LocalDateTime.of(2023, 11, 30, 12, 51, 25);
        LocalDateTime date7 = LocalDateTime.of(2025, 11, 30, 12, 51, 25);

        log.debug(DateUtil.timeDifference(date1, date1));
        log.debug(DateUtil.timeDifference(date1, date2));
        log.debug(DateUtil.timeDifference(date2, date3));
        log.debug(DateUtil.timeDifference(date3, date4));
        log.debug(DateUtil.timeDifference(date4, date5));
        log.debug(DateUtil.timeDifference(date5, date6));
        log.debug(DateUtil.timeDifference(date6, date7));
    }
}