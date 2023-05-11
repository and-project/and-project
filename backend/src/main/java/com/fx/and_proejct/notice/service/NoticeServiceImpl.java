package com.fx.and_proejct.notice.service;

import com.fx.and_proejct.notice.domain.Notice;
import com.fx.and_proejct.notice.domain.repository.NoticeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NoticeServiceImpl implements NoticeService {
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
    public boolean addNotice(Notice notice){
        return noticeRepository.save(notice);
    }

    @Override
    public boolean updateNotice(Long id, Notice notice){
        return noticeRepository.update(id, notice);
    }

    @Override
    public boolean deleteNotice(long id){
        return noticeRepository.remove(id);
    }
}