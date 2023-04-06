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

-- 테이블 starrynight-dev.data_file 구조 내보내기
DROP TABLE IF EXISTS `data_file`;
CREATE TABLE IF NOT EXISTS `data_file` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) DEFAULT NULL,
  `content_type` varchar(50) NOT NULL,
  `original_file_name` varchar(100) NOT NULL,
  `stored_file_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 테이블 데이터 starrynight-dev.data_file:~3 rows (대략적) 내보내기
INSERT INTO `data_file` (`id`, `created_date`, `content_type`, `original_file_name`, `stored_file_name`) VALUES
	(1, '2023-04-02 01:04:15.000000', 'image/jpeg', 'default-profile-image.jpg', 'e5ee29f8-03b3-4aac-ae93-6fc6efc8d37b.jpg'),
	(2, '2023-04-06 16:48:13.686433', 'image/jpeg', 'df82e45b-0b96-4521-8f8f-9a793aa0e12c.jpg', 'df82e45b-0b96-4521-8f8f-9a793aa0e12c.jpg'),
	(3, '2023-04-06 17:16:51.655956', 'image/jpeg', 'dd207d2b-1811-47b9-8142-69b9a39d567b.jpg', 'dd207d2b-1811-47b9-8142-69b9a39d567b.jpg'),
	(4, '2023-04-07 02:21:05.074210', 'image/png', '신동윤_이미지.png', 'd4f425e9-0ace-47c8-a738-8767fbc07cbb.png'),
	(5, '2023-04-07 02:28:00.424160', 'image/png', '카시오페이아_origin.png', '7b396243-0b20-4d49-b7b7-3bbc5d802c8f.png'),
	(6, '2023-04-07 02:28:00.424160', 'image/png', '카시오페이아.png', 'd7d47bc9-8ee0-4089-a95d-46b5c74c1d17.png'),
	(7, '2023-04-07 03:01:35.799109', 'image/png', '기린_그리기.png', 'b08d6260-25bc-4e2e-85e3-e353ed000b79.png'),
	(8, '2023-04-07 03:01:35.802102', 'image/png', '기린.png', '357f67f0-0f81-4401-b187-f96cfe817913.png'),
	(9, '2023-04-07 03:08:02.879939', 'image/png', '세페우스자리_origin.png', 'd4d43a8e-9221-4d68-ac49-ee917f02fb66.png'),
	(10, '2023-04-07 03:08:02.881941', 'image/png', '세페우스자리.png', 'c475b778-a416-498a-ba99-80111ee85dfa.png'),
	(11, '2023-04-07 03:11:37.400812', 'image/png', '용자리.png', '0b8a8661-abbd-4481-a4db-394b99f2d753.png'),
	(12, '2023-04-07 03:19:50.078482', 'image/png', '큰개.PNG', 'c1c4ad99-b3ad-4127-b1f5-6bc559f11e13.PNG'),
	(13, '2023-04-07 03:23:00.195657', 'image/jpeg', '38722691456904.jpg', '44879e41-c3c3-4b4f-9fb7-17671135556f.jpg'),
	(14, '2023-04-07 03:23:00.196655', 'image/jpeg', '38721518874417.jpg', 'deb9e182-3ea1-495e-90ec-db9b45973ebd.jpg'),
	(15, '2023-04-07 03:41:03.171059', 'image/png', '토끼.PNG', '6ab26e45-849b-4a8b-9dc0-24448e1ed9e1.PNG'),
	(16, '2023-04-07 03:45:12.353813', 'image/png', '작은사자.PNG', 'e0bddd70-1b7c-4510-86dc-2cb77b93b50f.PNG');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
