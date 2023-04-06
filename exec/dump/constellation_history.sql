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

-- 테이블 starrynight-dev.constellation_history 구조 내보내기
DROP TABLE IF EXISTS `constellation_history`;
CREATE TABLE IF NOT EXISTS `constellation_history` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) DEFAULT NULL,
  `lat` decimal(9,6) DEFAULT NULL,
  `lng` decimal(9,6) DEFAULT NULL,
  `constellation_id` bigint(20) DEFAULT NULL,
  `post_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKadhgvgc4asrnleh9t2yauh3ne` (`constellation_id`),
  KEY `FKcatcorxbvjoo8t2ka62p6jamk` (`post_id`),
  KEY `FKhvc6yij480mxqfbie52y1l64n` (`user_id`),
  CONSTRAINT `FKadhgvgc4asrnleh9t2yauh3ne` FOREIGN KEY (`constellation_id`) REFERENCES `constellation` (`id`),
  CONSTRAINT `FKcatcorxbvjoo8t2ka62p6jamk` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  CONSTRAINT `FKhvc6yij480mxqfbie52y1l64n` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 starrynight-dev.constellation_history:~0 rows (대략적) 내보내기
INSERT INTO `constellation_history` (`id`, `created_date`, `lat`, `lng`, `constellation_id`, `post_id`, `user_id`) VALUES
	(1, '2023-03-07 02:28:00.435099', 36.182172, 128.503089, 45, 1, 1),
	(3, '2023-04-03 03:01:35.814068', 35.813027, 128.034625, 4, 2, 1),
	(4, '2023-04-01 03:08:02.885925', 35.810800, 128.039432, 27, 3, 1),
	(5, '2023-04-02 03:11:37.401809', 35.791865, 127.775073, 34, 4, 1),
	(6, '2023-03-07 03:19:50.080477', 36.061536, 128.504977, 46, 5, 1),
	(7, '2023-04-04 03:23:00.198652', 36.134356, 128.565059, 37, 6, 1),
	(8, '2023-04-01 03:41:03.172056', 36.083755, 128.614647, 48, 7, 1),
	(9, '2023-04-06 03:45:12.355816', 35.839005, 128.093780, 38, 8, 3);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
