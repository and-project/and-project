package com.fx.and_proejct.notice.controller;

import com.fx.and_proejct.notice.domain.Notice;
import com.fx.and_proejct.notice.service.NoticeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;

@Controller
@RequiredArgsConstructor
public class NoticeController {
    private final NoticeService noticeService;

    @GetMapping("/")
    public String notice() {
        return "add-notice";
    }
    @PostMapping("/add-notice")
    public boolean addnotice(Notice notice) throws Exception {
        try {
            System.out.println("notice.toString() = " + notice.toString());
            noticeService.addNotice(notice);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}
