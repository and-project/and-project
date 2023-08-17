package com.fx.and_proejct.notice.domain;

import java.util.HashMap;
import java.util.Map;

public abstract class APT {

    protected String name;
    protected int number = 0;
    protected String[] notificationTarget = null;

    public APT() {
    }

    public APT(int number,String name) {
        this.number = number;
        notificationTarget = new String[this.number];
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String[] getNotificationTarget() {
        return notificationTarget;
    }

    public void setNotificationTarget(String[] notificationTarget) {
        this.notificationTarget = notificationTarget;
    }
}
