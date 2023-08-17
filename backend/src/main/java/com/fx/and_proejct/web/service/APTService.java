package com.fx.and_proejct.web.service;

import com.fx.and_proejct.notice.domain.APT;
import com.fx.and_proejct.notice.domain.repository.APTRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface APTService {

    List<String> getAPTRange(String name);

    boolean addAPT(APT apt);

    boolean removeAPT(String name);

    List<APT> getAPTList();

    Optional<APT> getAPTByname(String name);

    boolean updateAPT(String name , APT apt);

}
