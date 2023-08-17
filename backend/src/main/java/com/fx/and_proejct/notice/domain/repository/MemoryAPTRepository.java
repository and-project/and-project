package com.fx.and_proejct.notice.domain.repository;

import com.fx.and_proejct.notice.domain.APT;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class MemoryAPTRepository implements APTRepository{

    private static Map<String, APT> APTStore = new HashMap<>();

    @Override
    public void addAPT(APT apt) {
        APTStore.put(apt.getName(),apt);
    }

    @Override
    public void removeAPT(String name) {
        APTStore.remove(name);
    }

    @Override
    public List<APT> getAPTList() {
        return new ArrayList<>(APTStore.values());
    }

    @Override
    public Optional<APT> getAPTByname(String name) {
        return Optional.ofNullable(APTStore.get(name));
    }

    @Override
    public boolean DuplecationAPT(String name) {
        Optional<APT> findAPT = APTStore.values().stream().filter(A -> A.getName().equals(name)).findFirst();
        return !findAPT.isEmpty();
    }

    @Override
    public void updateAPT(String name, APT apt) {
        Optional<APT> aptByName = getAPTByname(name);
        if(aptByName.isEmpty()){
            return;
        }

        aptByName.get().setNumber(apt.getNumber());
        aptByName.get().setNotificationTarget(apt.getNotificationTarget());
    }

    public void clearStore(){
        APTStore.clear();
    }

}
