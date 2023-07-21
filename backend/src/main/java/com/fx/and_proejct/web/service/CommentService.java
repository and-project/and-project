package com.fx.and_proejct.web.service;

import com.fx.and_proejct.web.domain.Comment;

import java.util.List;
import java.util.Optional;

public interface CommentService {
    Comment add(long noticeId, Comment comment);
    List<Comment> getComments(long noticeId, int page);
    List<Comment> getComments(long noticeId);

    Optional<Comment> getComment(long noticeId, long commentId);

//    댓글 수정, 삭제 가능?
//    Comment updateComment(Comment comment);
//    void removeByUserId(Long userId);

    void remove(long noticeId, long commentId);
}
