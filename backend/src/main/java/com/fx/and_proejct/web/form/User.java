package com.fx.and_proejct.web.form;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class User {

    private long AID;
    private String APT;
    private String ID; // 중복 금지
    private String PW;
    private String Nick; // 중복 금지
    private String AccountCreationTime;
    // 관리자 field // 로그인이야? 관리자야? 미허용 접근자야? bit control -> 0,1,2
    // 0 : 미허용 1 : 일반 2 : 관리자
    // 친구 리스트 Long[] fList = ; 1.신영운 2.신영운 3.신영순  신영운 -> 회원 ID? ->



}
