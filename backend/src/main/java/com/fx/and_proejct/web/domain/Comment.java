package com.fx.and_proejct.web.domain;

import com.fx.and_proejct.utils.DateUtil;
import lombok.*;

import java.time.LocalDateTime;

@Getter @Setter
@ToString
@NoArgsConstructor
public class Comment {

    private Long noticeId;
    private Long commentId;
    private Long userId;
    private String commentText;
    private LocalDateTime creationTime = DateUtil.getNow();

    public Comment(Long noticeId, Long userId, String commentText) {
        this.noticeId = noticeId;
        this.userId = userId;
        this.commentText = commentText;
    }
}
