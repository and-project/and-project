package com.fx.and_proejct.comment.repository;

import com.fx.and_proejct.web.domain.Comment;

import java.util.List;
import java.util.Optional;

public interface CommentRepository {

    Comment save(long noticeId, Comment comment);
    Optional<Comment> findByNoticeIdCommentId(long noticeId, long commentId);
    List<Comment> findByNoticeId(Long noticeId);
    List<Comment> findByNoticeId(Long noticeId, int pagingNumber);
    List<Comment> findByNoticeIdUserId(long noticeId, long userId);
    List<Comment> findByUserId(long userId);
    List<Comment> findAll();
    void deleteByNoticeIdCommentId(long noticeId, long commentId);

    void deleteByUserId(Long userId);

    void clear();
}
