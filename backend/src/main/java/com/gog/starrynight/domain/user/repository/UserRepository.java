package com.gog.starrynight.domain.user.repository;

import com.gog.starrynight.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByLoginId(String userId);
}
