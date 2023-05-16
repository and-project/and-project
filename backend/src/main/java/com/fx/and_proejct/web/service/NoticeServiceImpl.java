package com.fx.and_proejct.web.service;

import com.fx.and_proejct.notice.domain.Notice;
import com.fx.and_proejct.notice.domain.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class NoticeServiceImpl implements NoticeService{

    @Autowired
    private final NoticeRepository noticeRepository;

    @Override
    public Notice findNotice(long id) {
        return null;
    }

    @Override
    public List<Notice> findAll() {
        return null;
    }

    @Override
    public boolean addNotice(Notice notice) {
        return noticeRepository.save(notice);
    }

    @Override
    public boolean updateNotice(Long id, Notice notice) {
        return false;
    }

    @Override
    public boolean deleteNotice(long id) {
        return false;
    }

    public List<Notice> getPagingNotice(int page,int contentCount){
        List<Notice> pagingContent = noticeRepository.getPagingContent(page, contentCount);
        for (Notice n : pagingContent){
            log.info("{}",n);
        }
        return  pagingContent;
    }

}
