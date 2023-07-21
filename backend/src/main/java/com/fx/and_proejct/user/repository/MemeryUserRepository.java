package com.fx.and_proejct.user.repository;

import com.fx.and_proejct.web.domain.User;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class MemeryUserRepository implements  UserRepository{

    private final static Map<Long, User> store = new HashMap<>();
    private static long sequence = 0L;

    @Override
    public void save(User user) {
        user.setId(++sequence);
        store.put(user.getId(), user);
    }

    @Override
    public Optional<User> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public List<User> findAll() {
        return new ArrayList<>(store.values());
    }

    @Override
    public void delete(Long id) {
        store.remove(id);
    }

    public User findLoginUser(String loginId, String password){
        return store.values().stream()
                .filter(user -> user.getLoginId().equals(loginId))
                .filter(user -> user.getPw().equals(password))
                .findFirst().orElse(null);
    }

    @Override
    public void clear() {
        store.clear();
    }
}
