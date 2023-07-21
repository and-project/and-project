package com.fx.and_proejct.emotion.repository;

import com.fx.and_proejct.emotion.domain.Emotion;

import java.util.Optional;

public interface EmotionRepository {

    Emotion save(Long noticeId, Long userId, String emotion);
    Optional<Emotion> findByUserIdNoticeId(Long noticeId, Long userId);
    void delete(Long noticeId, Long userId);
}
