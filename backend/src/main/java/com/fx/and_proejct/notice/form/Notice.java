package com.fx.and_proejct.notice.form;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class Notice {
    private Long NID;
    private String Title;
    private String Content;
    private String CreationTime;
    private String NoticeRange;
    private boolean Pin;
    private String tag;
    private String Emotion;
    private boolean State;
}
