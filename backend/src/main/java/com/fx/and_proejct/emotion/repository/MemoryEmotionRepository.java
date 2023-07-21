package com.fx.and_proejct.emotion.repository;

import com.fx.and_proejct.emotion.domain.Emotion;
import com.google.common.collect.HashBasedTable;
import com.google.common.collect.Table;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class MemoryEmotionRepository implements EmotionRepository{

    private static final Table<Long, Long, Emotion> store = HashBasedTable.create();  // (noticeId, userId) -> PK

    @Override
    public Emotion save(Long noticeId, Long userId, String emotion) {
        store.put(noticeId, userId, Emotion.valueOf(emotion));
        return Emotion.valueOf(emotion);
    }

    @Override
    public Optional<Emotion> findByUserIdNoticeId(Long noticeId, Long userId) {
        return Optional.ofNullable(store.get(noticeId, userId));
    }

    @Override
    public void delete(Long noticeId, Long userId) {
        store.remove(noticeId, userId);
    }
}
