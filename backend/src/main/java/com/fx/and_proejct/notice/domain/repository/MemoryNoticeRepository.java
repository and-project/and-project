package com.fx.and_proejct.notice.domain.repository;

import com.fx.and_proejct.notice.domain.Notice;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Repository
public class MemoryNoticeRepository implements NoticeRepository{

    private static Map<Long, Notice> NOTICE_MAP = new HashMap<>();

    private static Long sequence = 0L;

    @Override
    public boolean save(Notice notice) {

        // try catch 를 사용하면 죽은 코드임
        Long NID = ++sequence;
        notice.setNID(NID);
        NOTICE_MAP.put(NID, notice);
        return notice.getNID() == NID;
    }

    @Override
    public Notice getById(long Id) {
        return NOTICE_MAP.get(Id);
    }

    @Override
    public List<Notice> getAll() {
        return new ArrayList<>(NOTICE_MAP.values());
    }

    @Override
    public List<Notice> getPagingContent(int pagingNumber,int ContextCountOfPage) {
        // paging 공식 -> 차후 SQL 로 쉽게 구현 가능함
        List<Notice> notices = new ArrayList<>();

        long i = ((pagingNumber * ContextCountOfPage) - ContextCountOfPage) + 1;
        log.info("i : {} " , i);

        long range = (ContextCountOfPage + i) - 1;
        log.info("Range : {} " , range);

        for( ; i <= range  ; i++){
            notices.add(NOTICE_MAP.get(i));
        }
        return notices;
    }

    @Override
    public boolean remove(long id) {
        NOTICE_MAP.remove(id);
        return NOTICE_MAP.get(id) == null;
    }

    @Override
    public boolean clear(){
        NOTICE_MAP.clear();
        return NOTICE_MAP.isEmpty();
    }
}
