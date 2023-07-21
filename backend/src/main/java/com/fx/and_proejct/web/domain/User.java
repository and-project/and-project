package com.fx.and_proejct.web.domain;

import lombok.Data;

@Data
public class User {

    private long id;
    private String apart;
    private String loginId;
    private String pw;
    private String nick;
    private String creationTime;
    private UseRole useRole;

    public User() {
    }

    public User(String loginId, String pw) {
        this.loginId = loginId;
        this.pw = pw;
    }
}
