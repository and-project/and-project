package com.fx.and_proejct.notice.service;

import com.fx.and_proejct.notice.domain.Notice;
import com.fx.and_proejct.notice.domain.repository.MemoryNoticeRepository;
import com.fx.and_proejct.notice.domain.repository.NoticeRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;


class NoticeServiceImplTest {

    private NoticeRepository noticeRepository = new MemoryNoticeRepository();

    @BeforeEach
    void beforeEach() throws Exception {
        noticeRepository.clear();
    }
    @Test
    void findNotice() {
    }

    @Test
    void testFindNotice() {
    }

    @Test
    void findAll() {
    }

    @Test
    @DisplayName("공지 저장")
    void addNotice() throws Exception {
        Notice notice = new Notice("TestTitle","TestContent", new int[]{1,2,3});
        Assertions.assertThat(noticeRepository.save(notice)).isTrue();
    }

    @Test
    void updateNotice() {
    }

    @Test
    void deleteNotice() {
    }
}