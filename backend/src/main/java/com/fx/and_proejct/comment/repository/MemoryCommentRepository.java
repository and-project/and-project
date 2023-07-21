package com.fx.and_proejct.comment.repository;

import com.fx.and_proejct.web.domain.Comment;
import com.google.common.collect.HashBasedTable;
import com.google.common.collect.Table;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
@Slf4j
public class MemoryCommentRepository implements CommentRepository{

    // Table<R, C, V> -> Table<noticeId, commentId, comment>
    private static final Table<Long, Long, Comment> store = HashBasedTable.create();
    private static long sequence = 0L;

    @Override
    public Comment save(long noticeId, Comment comment) {
        comment.setCommentId(++sequence);
        log.info("sequence = {}", sequence);
        store.put(noticeId, comment.getCommentId(), comment);
        return comment;
    }

    @Override
    public Optional<Comment> findByNoticeIdCommentId(long noticeId, long commentId) {
        return Optional.ofNullable(store.get(noticeId, commentId));
    }

    @Override
    public List<Comment> findByNoticeId(Long noticeId) {
        return new ArrayList<>(store.row(noticeId).values());
    }

    @Override
    public List<Comment> findByNoticeId(Long noticeId, int pagingNumber) {
        List<Comment> commentList = new ArrayList<>(store.row(noticeId).values());

        int contextCountOfPage = 30;
        int totalComments = commentList.size();

        int startIndex = Math.max(contextCountOfPage * (pagingNumber - 1), 0);
        int endIndex = Math.min(contextCountOfPage * pagingNumber, totalComments);

        if (startIndex >= totalComments) {
            return Collections.emptyList(); // 페이지 번호가 너무 큰 경우 빈 리스트 반환
        }

        return new ArrayList<>(commentList.subList(startIndex, endIndex));
    }

    @Override
    public List<Comment> findByNoticeIdUserId(long noticeId, long userId) {
        List<Comment> byNoticeId = findByNoticeId(noticeId);
        List<Comment> comments = new ArrayList<>();
        byNoticeId.stream().filter(comment -> comment.getUserId().equals(userId))
                .forEach(comments::add);
        return comments;
    }

    @Override
    public List<Comment> findByUserId(long userId) {
        List<Comment> comments = new ArrayList<>();
        findAll().stream().filter(comment -> comment.getUserId().equals(userId))
                .forEach(comments::add);
        return comments;
    }

    @Override
    public List<Comment> findAll() {
        return new ArrayList<>(store.values());
    }

    @Override
    public void deleteByNoticeIdCommentId(long noticeId, long commentId) {
        store.remove(noticeId, commentId);
    }

    @Override
    public void deleteByUserId(Long userId) {
    }

    @Override
    public void clear() {
        store.clear();
    }
}
