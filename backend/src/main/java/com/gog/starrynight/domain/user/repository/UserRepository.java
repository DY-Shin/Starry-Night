package com.gog.starrynight.domain.user.repository;

import com.gog.starrynight.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
