package com.fx.and_proejct.web.service;

import com.fx.and_proejct.notice.domain.APT;
import com.fx.and_proejct.notice.domain.repository.APTRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class APTServiceImple implements APTService{

    private final APTRepository aptRepository;

    @Override
    public List<String> getAPTRange(String name) {
        if(aptRepository.DuplecationAPT(name)){
            return List.of(aptRepository.getAPTByname(name).get().getNotificationTarget());
        }
        return null;
    }

    @Override
    public boolean addAPT(APT apt) {
        if(aptRepository.DuplecationAPT(apt.getName())){
            return false;
        }
        aptRepository.addAPT(apt);
        return true;
    }

    @Override
    public boolean removeAPT(String name) {
        if(!aptRepository.DuplecationAPT(name)){
            return false;
        }
        aptRepository.removeAPT(name);
        return true;
    }

    @Override
    public List<APT> getAPTList() {
        return aptRepository.getAPTList();
    }

    @Override
    public Optional<APT> getAPTByname(String name) {
        return aptRepository.getAPTByname(name);
    }

    @Override
    public boolean updateAPT(String name, APT apt) {
        if(!aptRepository.DuplecationAPT(name)){
            return false;
        }
        aptRepository.updateAPT(name,apt);
        return true;
    }
}
