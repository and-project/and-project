package com.fx.and_proejct.web.controller;

import com.fx.and_proejct.web.domain.Comment;
import com.fx.and_proejct.web.service.CommentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/Notices/{noticeId}/comments")
@Slf4j
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @GetMapping("/{page}")
    public Map<String, List<Comment>> getCommentsByPaging(@PathVariable long noticeId, @PathVariable int page){
        log.info("in comment Controller");

        Map<String,List<Comment>> BoardMap = new HashMap<>();
        List<Comment> comments = commentService.getComments(noticeId, page);
        BoardMap.put("items",comments);

        return BoardMap;
    }

    @PostMapping
    public Comment addComment(@PathVariable long noticeId, @RequestBody Comment comment){
        return commentService.add(noticeId, comment);
    }

    @DeleteMapping(value = "/{commentId}")
    public void removeComment(@PathVariable long noticeId, @PathVariable long commentId){
        commentService.remove(noticeId, commentId);
    }

    @PostConstruct
    public void setTestNotice(){
        for(long noticeId = 1; noticeId <= 5; noticeId++){
            for(long userId = 1;  userId <= 160; userId++){
                commentService.add(noticeId,
                        new Comment(noticeId, userId, userId + "번째 댓글"));
            }
        }
    }
}
