-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.11.2-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 테이블 starrynight-dev.user 구조 내보내기
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) DEFAULT NULL,
  `login_id` varchar(100) NOT NULL,
  `name` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `provider` varchar(30) DEFAULT NULL,
  `profile_image_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpaob25w6m3ur8rjde1lu4b7y7` (`profile_image_id`),
  CONSTRAINT `FKpaob25w6m3ur8rjde1lu4b7y7` FOREIGN KEY (`profile_image_id`) REFERENCES `data_file` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 starrynight-dev.user:~6 rows (대략적) 내보내기
INSERT INTO `user` (`id`, `created_date`, `login_id`, `name`, `password`, `provider`, `profile_image_id`) VALUES
	(1, '2023-03-30 13:56:35.796225', 'kakao_xxxx1', '이희수', '$2a$10$d6xGAQHwnr0rrF3hRZDgi./0RDbyambsYGrhp6z1GhiVmzV7Yi3IW', 'kakao', 1),
	(2, '2023-03-30 14:37:23.264664', 'kakao_xxxx2', '이진성', '$2a$10$NGLF9yu3d5TW5wbAtCC7EO5f9CPJLEvsfddzc8eRJHvLnbp2d3LPu', 'kakao', NULL),
	(3, '2023-03-30 14:39:34.819761', 'kakao_xxxx3', '신동윤', '$2a$10$ak1MP7vtgCYc4BCPlNkKj.GjexuWeiHomSkPb40PHGEWqaNtzXGAi', 'kakao', 4),
	(4, '2023-04-04 13:35:19.075136', 'kakao_xxxx4', '김지훈', '$2a$10$hCghR/070pcT3h08E6sdXua2Qq4O.5fzLM14JFV/zxUcd72bqSamK', 'kakao', NULL),
	(5, '2023-04-06 16:48:13.783550', 'kakao_xxxx5', '임수민', '$2a$10$JPLtD06yZHHtuZYND8ReCum.6fI5Oj6vFO5P4Cq2nvQPo6FgEAtTm', 'kakao', 2),
	(6, '2023-04-06 17:16:51.757574', 'google_xxxx6', '이정윤', '$2a$10$UhB8mZrGYJUJUcH4LyFC5eRotAgxpQCYB9407/GBxV3C/VAu0uE0W', 'google', 3);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
