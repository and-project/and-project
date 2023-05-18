package com.fx.and_proejct.domain.repository.notice;

import com.fx.and_proejct.domain.Notice;

import java.util.List;

public interface NoticeRepository {
    /**
     * 공지사항을 저장하는 메소드
     * @param notice 저장할 공지사항
     * @return 저장 후 성공 여부 확인
     */
    boolean save(Notice notice);

    /**
     * 공지사항의 고유 아이디를 받아 공지사항을 찾아내는 메소드
     * @param Id 공지사항의 고유 아이디
     * @return 찾아낸 공지사항 반환
     */
    Notice getById(long Id);

    /**
     * 모든 공지사항을 반환하는 메소드
     * @return 모든 공지사항 반환
     */
    List<Notice> getAll();

    /**
     *
     * @param pagingNumber
     * @return
     */
    List<Notice> getPagingContent(int pagingNumber, int ContextCountOfPage);

    /**
     * 등록된 공지사항을 제거하는 메소드
     * @param id 공지사항의 고유 아이디
     * @return 제거 후 성공 여부 확인
     */
    boolean remove(long id);

    Notice update(long id, Notice notice);

    /**
     * 등록된 모든 공지사항을 제거
     * @return 제거 후 성공 여부 확인
     */
    boolean clear();
}
