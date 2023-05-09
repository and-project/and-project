package com.example.and_proejct.notice.service;

import com.example.and_proejct.notice.form.Notice;

import java.util.List;

public interface NoticeService {
    /**
     * long 타입 파아미터를 받아 공지를 찾아내는 메소드
     * @param id 공지사항의 고유 아이디
     * @return 찾아낸 공지사항 반환
     */
    Notice findNotice(long id);

    /**
     * 모든 공지사항 찾아내는 메소드
     * @return 모든 공지사항을 리스트로 반환함
     */
    List<Notice> findAll();

    /**
     * 새로운 공지사항을 추가하는 메소드
     * @param notice 추가할 공지사항
     * @return 추가된 후 성공 여부 확인
     */
    boolean addNotice(Notice notice);

    /**
     * 등록된 공지사항을 변경 및 수정을 하기 위한 메소드
     * @param id 공지사항의 고유 아이디
     * @param notice 공지사항에서 바꿔진 내용
     * @return 변경 후 성공 여부 확인
     */
    boolean updateNotice(Long id, Notice notice);

    /**
     * 등록된 공지사항을 제거하는 메소드
     * @param id 공지사항의 고유 아이디
     * @return 제거 후 성공 여부 확인
     */
    boolean deleteNotice(long id);
}
