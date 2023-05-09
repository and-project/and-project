package com.example.and_proejct.user.repository;

import com.example.and_proejct.user.form.User;

import java.util.List;

public interface UserRepository {
    /**
     * 유저를 저장하는 메소드
     * @param user 저장할 유저
     * @return 저장 후 성공 여부 확인
     */
    boolean save(User user);

    /**
     * 유저의 아이디를 이용해 유저를 반환하는 메소드
     * @param id 유저의 고유 아이디
     * @return 찾은 유저 반환
     */
    User getById(Long id);

    /**
     * 모든 유저를 반환하는 메소드
     * @return 모든 유저 반환
     */
    List<User> findAll();

    /**
     * 유저 아이디를 이용해 유저를 제거하는 메소드
     * @param id 유저의 고유 아이디
     * @return 제거 후 성공 여부 확인
     */
    boolean remove(Long id);

    /**
     * 저장소의 모든 데이터 제거하는 메소드
     * @return 제거 후 성공 여부 확인
     */
    boolean clear();


}
