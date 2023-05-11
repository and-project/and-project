package com.fx.and_proejct.notice.domain;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class Notice {
    private Long NID;
    private String Title;
    private String Content;
    private String CreationTime;
    private int[] NoticeRange;
    private boolean Pin;
    private String tag;
    private String Emotion;
    private boolean State;

    public Notice() {
    }

    public Notice(String title, String content, String creationTime, int[] noticeRange, boolean pin, String tag, String emotion, boolean state) {
        Title = title;
        Content = content;
        CreationTime = creationTime;
        NoticeRange = noticeRange;
        Pin = pin;
        this.tag = tag;
        Emotion = emotion;
        State = state;
    }

    public Notice(String title, String content, int[] noticeRange) {
        Title = title;
        Content = content;
        NoticeRange = noticeRange;
    }
}
