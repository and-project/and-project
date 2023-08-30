package com.fx.and_proejct.web.controller;

import com.fx.and_proejct.notice.domain.Notice;
import com.fx.and_proejct.utils.DateUtil;
import com.fx.and_proejct.web.service.NoticeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/home")
public class HomeController {

    private final NoticeService noticeService;

    @GetMapping( value = {"/{page}","/{page}/{contentCount}"})
    public Map<String,List<Notice>> home(@PathVariable int page, @PathVariable(required = false) Integer contentCount){
        log.info("in home Controller");
        Map<String,List<Notice>> BoardMap = new HashMap<>();
        List<Notice> contentList = new ArrayList<>();

        int count = (contentCount == null) ? 10 : contentCount;
        log.info("{}",count);
        contentList = noticeService.getPagingNotice(page, count);
        BoardMap.put("items",contentList);
        return BoardMap;
    }

    @PostConstruct
    public void setTestNotice(){
        int[] noticeRange = {107,108};
        for(int i = 0; i < 150; i++)
            noticeService.addNotice(new Notice("test","test Body", DateUtil.getNow(),noticeRange,
                    false,null,null,true));
    }

}
