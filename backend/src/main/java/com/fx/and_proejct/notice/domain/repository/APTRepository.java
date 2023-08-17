package com.fx.and_proejct.notice.domain.repository;


import com.fx.and_proejct.notice.domain.APT;

import java.util.List;
import java.util.Optional;

public interface APTRepository {

    void addAPT(APT apt);

    void removeAPT(String name);

    List<APT> getAPTList();

    Optional<APT> getAPTByname(String name);

    boolean DuplecationAPT(String name);

    void updateAPT(String name , APT apt);

}
