package com.fx.and_proejct.web.controller;

import com.fx.and_proejct.notice.domain.Notice;
import com.fx.and_proejct.utils.DateUtil;
import com.fx.and_proejct.web.service.NoticeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/home")
public class homeController {

    private final NoticeService noticeService;

    @GetMapping
    public Map<String,List<Notice>> home(){
        Map<String,List<Notice>> BoardMap = new HashMap<>();
        List<Notice> contentList = new ArrayList<>();
        contentList = noticeService.getPagingNotice(1,2);
        BoardMap.put("items",contentList);
        return BoardMap;
    }


    @PostConstruct
    public void setTestNotice(){
        int[] noticeRange = {107,108};
        Notice noticeA = new Notice("test title","test Body", DateUtil.getNow(),noticeRange,false,null,null,true);
        noticeService.addNotice(noticeA);
        Notice noticeB = new Notice("test title","test Body", DateUtil.getNow(),noticeRange,false,null,null,true);
        noticeService.addNotice(noticeB);
        Notice noticeC = new Notice("test title","test Body", DateUtil.getNow(),noticeRange,false,null,null,true);
        noticeService.addNotice(noticeC);
        Notice noticeD = new Notice("test title","test Body", DateUtil.getNow(),noticeRange,false,null,null,true);
        noticeService.addNotice(noticeD);
        Notice noticeE = new Notice("test title","test Body", DateUtil.getNow(),noticeRange,false,null,null,true);
        noticeService.addNotice(noticeE);
        Notice noticeF = new Notice("test title","test Body", DateUtil.getNow(),noticeRange,false,null,null,true);
        noticeService.addNotice(noticeF);

    }

}
