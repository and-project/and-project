package com.fx.and_proejct.web.service;

import com.fx.and_proejct.notice.domain.Notice;
import com.fx.and_proejct.notice.domain.repository.NoticeRepository;
import com.fx.and_proejct.web.form.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class NoticeServiceImpl implements NoticeService{

    @Autowired
    private final NoticeRepository noticeRepository;

    @Override
    public Notice findNotice(long id) {
        return noticeRepository.getById(id);
    }

    @Override
    public List<Notice> findAll() {
        return noticeRepository.getAll();
    }

    @Override
    public boolean addNotice(Notice notice) {
        return noticeRepository.save(notice);
    }

    @Override
    public Notice updateNotice(Long id, Notice notice) {
        return noticeRepository.update(id,notice);
    }

    @Override
    public boolean deleteNotice(long id) {
        return noticeRepository.remove(id);
    }

    public List<Notice> getPagingNotice(int page,int contentCount){
        List<Notice> pagingContent = noticeRepository.getPagingContent(page, contentCount);
        for (Notice n : pagingContent){
            log.info("{}",n);
        }
        return  pagingContent;
    }

}
