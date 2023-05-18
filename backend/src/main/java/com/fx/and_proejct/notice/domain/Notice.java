package com.fx.and_proejct.notice.domain;

import lombok.Data;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@ToString
public class Notice {

    private Long NID;
    private String Title;
    private String Content;
    private LocalDateTime CreationTime;
    private int[] NoticeRange;
    private boolean Pin;
    private String tag;
    private String Emotion;
    private boolean State;

    public Notice() {}

    public Notice(String title, String content, LocalDateTime creationTime, int[] noticeRange, boolean pin, String tag, String emotion, boolean state) {
        Title = title;
        Content = content;
        CreationTime = creationTime;
        NoticeRange = noticeRange;
        Pin = pin;
        this.tag = tag;
        Emotion = emotion;
        State = state;
    }


}
