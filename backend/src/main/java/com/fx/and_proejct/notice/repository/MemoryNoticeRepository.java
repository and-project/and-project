package com.fx.and_proejct.notice.repository;

import com.fx.and_proejct.notice.form.Notice;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class MemoryNoticeRepository implements NoticeRepository{

    private static final Map<Long, Notice> NOTICE_MAP = new HashMap<>();
    private static final Map<Integer, List<Notice>> NoticePageMap = new HashMap<>();

    private static Long sequence = 0L;

    @Override
    public boolean save(Notice notice) throws Exception {
        try {
            NOTICE_MAP.put(++sequence, notice);
            return true;
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return false;
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
    public List<Notice> getPagingContent(int pagingNumber) {
        return NoticePageMap.get(pagingNumber);
    }

    @Override
    public boolean remove(long id) throws Exception {
        try {
            NOTICE_MAP.remove(id);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public boolean clear() throws Exception{
        try {
            NOTICE_MAP.clear();
            NoticePageMap.clear();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}
