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

-- 테이블 starrynight-dev.post 구조 내보내기
DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) DEFAULT NULL,
  `content` varchar(500) NOT NULL,
  `lat` decimal(9,6) DEFAULT NULL,
  `lng` decimal(9,6) DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `writer_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKh38931f585nv7e1qp8w7r9ux1` (`writer_id`),
  CONSTRAINT `FKh38931f585nv7e1qp8w7r9ux1` FOREIGN KEY (`writer_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 starrynight-dev.post:~0 rows (대략적) 내보내기
INSERT INTO `post` (`id`, `created_date`, `content`, `lat`, `lng`, `title`, `writer_id`) VALUES
	(1, '2023-03-07 02:28:00.435099', '천체 기상도가 쾌적하길래 왔는데 별이 엄청 잘보였다!', 36.182172, 128.503089, '', 1),
	(2, '2023-04-03 03:01:35.766205', '기린 자리를 볼 수 있었다!', 35.813027, 128.034625, '', 1),
	(3, '2023-04-01 03:08:02.877956', '지난번에 별이 엄청 잘 보여서 또 옴!!', 35.810800, 128.039432, '', 1),
	(4, '2023-04-02 03:11:37.399815', '최고의 관측 스팟~~!', 35.791865, 127.775073, '', 1),
	(5, '2023-03-07 03:19:50.076487', '관측하기 엄청 좋음!', 36.061536, 128.504977, '', 1),
	(6, '2023-04-04 03:23:00.193663', '여기 대박... 또 와야지!', 36.134356, 128.565059, '', 1),
	(7, '2023-04-01 03:41:03.170062', '토끼자리를 볼 수 있었다!!!!!', 36.083755, 128.614647, '', 1),
	(8, '2023-04-06 03:45:12.352814', '작은사자 자리를 보았습니다.', 35.839005, 128.093780, '', 3);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
