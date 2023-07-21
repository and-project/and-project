package com.fx.and_proejct.comment.repository;

import com.fx.and_proejct.web.domain.Comment;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class MemoryCommentRepositoryTest {

    MemoryCommentRepository memoryCommentRepository = new MemoryCommentRepository();

    @BeforeEach
    void beforeEach(){
        for(long noticeId = 1; noticeId <= 3; noticeId++){
            for(long userId = 1;  userId <= 10; userId++){
                memoryCommentRepository.save(noticeId,
                        new Comment(noticeId, userId, "noticeId = " + noticeId + " userId = " + userId));
            }
        }
    }

    @Test
    void save() {
        Comment comment = new Comment(1L, 3L, "notice = 1 userId = 3");
        Comment saveComment = memoryCommentRepository.save(comment.getNoticeId(), comment);

        assertThat(saveComment.getCommentText()).isEqualTo("notice = 1 userId = 3");
    }

    @Test
    void findByCommentId() {
        Comment comment = memoryCommentRepository.findByNoticeIdCommentId(1L, 2L).get();
        assertThat(comment.getCommentText()).isEqualTo("noticeId = 1 userId = 2");
    }

    @Test
    void findByUserId() {
        Comment comment6 = new Comment(1L, 4L, "noticeId = 1 userId = 4");
        Comment comment7 = new Comment(1L, 4L, "noticeId = 1 userId = 4");
        memoryCommentRepository.save(comment6.getNoticeId(), comment6);
        memoryCommentRepository.save(comment7.getNoticeId(), comment7);

        List<Comment> comments = memoryCommentRepository.findByNoticeIdUserId(1L, 4L);
        assertThat(comments).contains(comment6, comment6);
    }

    @Test
    void findByNoticeId() {
        for(int i = 1; i <= 16; i++){
            List<Comment> comments = memoryCommentRepository.findByNoticeId(1L, i);
            for(Comment comment : comments){
                System.out.println(comment);
            }
            System.out.println();
        }

    }

    @Test
    void testFindByNoticeId() {
    }

    @Test
    void findAll() {
        List<Comment> commentList = memoryCommentRepository.findAll();
        for (Comment comment : commentList) {
            System.out.println(comment);
        }
    }

    @Test
    void deleteById() {
    }
}