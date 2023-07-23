package com.fx.and_proejct.web.controller;


import com.fx.and_proejct.notice.domain.Notice;
import com.fx.and_proejct.web.service.NoticeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/Notices")
public class NoticeController {

    private final NoticeService noticeService;

    @GetMapping(value = {"/list/{page}","/list/{page}/{contentCount}"})
    public Map<String,List<Notice>> home(@PathVariable int page, @PathVariable(required = false) Integer contentCount){

        Map<String,List<Notice>> BoardMap = new HashMap<>();

        List<Notice> contentList = new ArrayList<>();

        int count = (contentCount == null) ? 10 : contentCount;

        contentList = noticeService.getPagingNotice(page, count);
        BoardMap.put("items",contentList);
        return BoardMap;
    }

    // Read
    @GetMapping("/{noticeId}")
    public Notice getNotice(@PathVariable long noticeId){
        return noticeService.findNotice(noticeId);
    }

    // Create
    @PostMapping
    public boolean addNotice(@RequestBody Notice notice){
        log.info("notice : {}" , notice.getTitle());
        return noticeService.addNotice(notice);
    }

    // Update
    @PatchMapping("/{noticeId}")
    public Notice editNotice(@RequestBody Notice notice, @PathVariable long noticeId){
        return noticeService.updateNotice(noticeId, notice);
    }

    // Delete
    @DeleteMapping("/{noticeId}")
    public Boolean deleteNotice(@PathVariable long noticeId){
        return noticeService.deleteNotice(noticeId);
    }
}