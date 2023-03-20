package com.gog.starrynight.domain.datafile.repository;

import com.gog.starrynight.domain.datafile.entity.DataFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DataFileRepository extends JpaRepository<DataFile, Long> {
}
