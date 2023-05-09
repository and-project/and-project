package com.example.and_proejct.user.service;

import com.example.and_proejct.user.form.Manager;
import com.example.and_proejct.user.form.User;

import java.util.List;

public interface UserService {
    /**
     * 유저 정보 받아 오는 메소드
     * @param id 유저의 고유 아이디
     * @return 아이디에 맞는 유저 반환
     */
    User getUser(Long id);

    /**
     * 모든 유저 가져오는 메소드
     * @return 모든 유저 반환
     */
    List<User> getUserAll();

    /**
     * 유저를 추가, 변경하기 위한 메소드
     * @param user 변경할 유저
     */
    void sobUser(User user);

    /**
     * 유저를 삭제하기 위한 메소드
     * @param user 삭제할 유저
     */
    void deleteUser(User user);
}
