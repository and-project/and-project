package com.fx.and_proejct.web.service;

import com.fx.and_proejct.emotion.domain.Emotion;
import com.fx.and_proejct.emotion.repository.EmotionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmotionService {

    private final EmotionRepository emotionRepository;

    public void add(long noticeId, long userId, String emotion){
        emotionRepository.save(noticeId, userId, emotion);
    }

    public String getEmotion(long noticeId, long userId){
        Optional<Emotion> emotion = emotionRepository.findByUserIdNoticeId(noticeId, userId);
        return emotion.orElseGet(null).name();
    }

    public void remove(long noticeId, long userId){
        emotionRepository.delete(noticeId, userId);
    }


}
