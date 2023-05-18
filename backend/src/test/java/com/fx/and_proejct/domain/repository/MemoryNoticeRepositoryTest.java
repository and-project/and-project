package com.fx.and_proejct.domain.repository;

import com.fx.and_proejct.domain.Notice;
import com.fx.and_proejct.domain.repository.notice.NoticeRepository;
import com.fx.and_proejct.utils.DateUtil;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.PostConstruct;
import java.util.List;


@Slf4j
@SpringBootTest
class MemoryNoticeRepositoryTest {

    @Autowired
    private NoticeRepository noticeRepository;

    @AfterEach
    void afterEach(){
        noticeRepository.clear();
    }

    @Test
    void save() {
        int[] noticeRange = {107,108};
        Notice notice = new Notice("test title","test Body", DateUtil.getNow(),noticeRange,false,null,null,true);
        noticeRepository.save(notice);
        Long nid = notice.getNID();
        Notice result = noticeRepository.getById(nid);
        log.info("find notice = {}", result);
        Assertions.assertThat(result.getNID()).isEqualTo(nid);
    }

    @Test
    void getAll() {

        List<Notice> result = noticeRepository.getAll();
        Assertions.assertThat(result.size()).isEqualTo(6);
    }

    @Test
    void getPagingContent() {
        List<Notice> pagingContentA = noticeRepository.getPagingContent(1, 2);
        ShowPagingContent(pagingContentA);
        List<Notice> pagingContentB = noticeRepository.getPagingContent(2, 2);
        ShowPagingContent(pagingContentB);
        List<Notice> pagingContentC = noticeRepository.getPagingContent(1, 3);
        ShowPagingContent(pagingContentC);

    }

    @Test
    void remove() {
        noticeRepository.remove(1L);
        noticeRepository.remove(2L);
        org.junit.jupiter.api.Assertions.assertThrows(Exception.class,() -> noticeRepository.getById(1L).getTag());
        org.junit.jupiter.api.Assertions.assertThrows(Exception.class,() -> noticeRepository.getById(2L).getTag());
    }

    @PostConstruct
    public void setTestNotice(){
        int[] noticeRange = {107,108};
        Notice noticeA = new Notice("test title","test Body", DateUtil.getNow(),noticeRange,false,null,null,true);
        noticeRepository.save(noticeA);
        Notice noticeB = new Notice("test title","test Body", DateUtil.getNow(),noticeRange,false,null,null,true);
        noticeRepository.save(noticeB);
        Notice noticeC = new Notice("test title","test Body", DateUtil.getNow(),noticeRange,false,null,null,true);
        noticeRepository.save(noticeC);
        Notice noticeD = new Notice("test title","test Body", DateUtil.getNow(),noticeRange,false,null,null,true);
        noticeRepository.save(noticeD);
        Notice noticeE = new Notice("test title","test Body", DateUtil.getNow(),noticeRange,false,null,null,true);
        noticeRepository.save(noticeE);
        Notice noticeF = new Notice("test title","test Body", DateUtil.getNow(),noticeRange,false,null,null,true);
        noticeRepository.save(noticeF);

    }

    private void ShowPagingContent(List<Notice> list){
        log.info("======= Print start ======");
        for(Notice a : list){
            log.info("{}", a);
        }
        log.info("======= Print End ======");
    };

}