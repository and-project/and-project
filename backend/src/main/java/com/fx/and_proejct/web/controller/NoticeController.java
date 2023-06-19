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

    // Read
    @GetMapping("/{noticeId}")
    public Notice getNotice(@PathVariable long noticeId){
        log.info("get Notice");
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
