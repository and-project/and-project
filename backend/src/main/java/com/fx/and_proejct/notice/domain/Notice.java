package com.fx.and_proejct.notice.domain;

import lombok.Data;
import lombok.ToString;

import java.time.LocalDateTime;

@Data
@ToString
public class Notice {

    private Long id;
    private String title;
    private String content;
    private LocalDateTime creationTime;
    private int[] noticeRange;
    private boolean pin;
    private String tag;
    private String emotion;
    private boolean state;

    public Notice() {}

    public Notice(String title, String content, LocalDateTime creationTime, int[] noticeRange, boolean pin, String tag, String emotion, boolean state) {
        this.title = title;
        this.content = content;
        this.creationTime = creationTime;
        this.noticeRange = noticeRange;
        this.pin = pin;
        this.tag = tag;
        this.emotion = emotion;
        this.state = state;
    }


}
