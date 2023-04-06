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

-- 테이블 starrynight-dev.post_image 구조 내보내기
DROP TABLE IF EXISTS `post_image`;
CREATE TABLE IF NOT EXISTS `post_image` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) DEFAULT NULL,
  `data_file_id` bigint(20) DEFAULT NULL,
  `post_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK65elogtu9dd2tj1gbs6msi1d7` (`data_file_id`),
  KEY `FKsip7qv57jw2fw50g97t16nrjr` (`post_id`),
  CONSTRAINT `FK65elogtu9dd2tj1gbs6msi1d7` FOREIGN KEY (`data_file_id`) REFERENCES `data_file` (`id`),
  CONSTRAINT `FKsip7qv57jw2fw50g97t16nrjr` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 starrynight-dev.post_image:~0 rows (대략적) 내보내기
INSERT INTO `post_image` (`id`, `created_date`, `data_file_id`, `post_id`) VALUES
	(1, '2023-04-07 02:28:00.428150', 5, 1),
	(2, '2023-04-07 02:28:00.430144', 6, 1),
	(3, '2023-04-07 03:01:35.805092', 7, 2),
	(4, '2023-04-07 03:01:35.808085', 8, 2),
	(5, '2023-04-07 03:08:02.882946', 9, 3),
	(6, '2023-04-07 03:08:02.884926', 10, 3),
	(7, '2023-04-07 03:11:37.400812', 11, 4),
	(8, '2023-04-07 03:19:50.079479', 12, 5),
	(9, '2023-04-07 03:23:00.197654', 13, 6),
	(10, '2023-04-07 03:23:00.197654', 14, 6),
	(11, '2023-04-07 03:41:03.171059', 15, 7),
	(12, '2023-04-07 03:45:12.354809', 16, 8);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
