package com.gog.starrynight.domain.datafile.entity;

import com.gog.starrynight.common.entity.BaseTimeEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DataFile extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 100, nullable = false)
    private String originalFileName;

    @Column(length = 100, nullable = false)
    private String storedFileName;

    @Column(length = 50, nullable = false)
    private String contentType;

}
