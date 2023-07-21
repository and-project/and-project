package com.fx.and_proejct.web.service;

import com.fx.and_proejct.comment.repository.CommentRepository;
import com.fx.and_proejct.web.domain.Comment;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService{

    private final CommentRepository commentRepository;

    @Override
    public Comment add(long noticeId, Comment comment) {
        comment.setNoticeId(noticeId);
        return commentRepository.save(noticeId, comment);
    }

    @Override
    public List<Comment> getComments(long noticeId, int page) {
        return commentRepository.findByNoticeId(noticeId, page);
    }

    @Override
    public List<Comment> getComments(long noticeId) {
        return commentRepository.findByNoticeId(noticeId);
    }


    @Override
    public Optional<Comment> getComment(long noticeId, long commentId) {
        return commentRepository.findByNoticeIdCommentId(noticeId, commentId);
    }

    @Override
    public void remove(long noticeId, long commentId) {
        commentRepository.deleteByNoticeIdCommentId(noticeId, commentId);
    }
}
