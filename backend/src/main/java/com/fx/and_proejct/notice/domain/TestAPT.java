package com.fx.and_proejct.notice.domain;

public class TestAPT extends APT{

    public TestAPT() {
    }

    public TestAPT(int number,String name) {
        super(number,name);
        for(int i = 1; i <= number ; i++){
            if(i < 10)
                notificationTarget[i-1] = "10" + i;
            else
                notificationTarget[i-1] = "1" + i;
        }
    }

}
