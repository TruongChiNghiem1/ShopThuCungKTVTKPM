-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.7.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for shopthucanthucung
CREATE DATABASE IF NOT EXISTS `shopthucanthucung` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci */;
USE `shopthucanthucung`;

-- Dumping structure for table shopthucanthucung.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id_categories` bigint(20) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_categories`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table shopthucanthucung.favoriteproducts
CREATE TABLE IF NOT EXISTS `favoriteproducts` (
  `Favorite_id` bigint(20) NOT NULL,
  `id_user` bigint(20) NOT NULL,
  `id_product` bigint(20) NOT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`Favorite_id`),
  KEY `FK_Favoriteproducts_product` (`id_product`),
  KEY `FK_Favoriteproducts_users` (`id_user`),
  CONSTRAINT `FK_Favoriteproducts_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`),
  CONSTRAINT `FK_Favoriteproducts_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table shopthucanthucung.image
CREATE TABLE IF NOT EXISTS `image` (
  `id_product` bigint(20) NOT NULL,
  `link` varchar(250) DEFAULT NULL,
  KEY `FK_image_product` (`id_product`),
  CONSTRAINT `FK_image_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table shopthucanthucung.invoice
CREATE TABLE IF NOT EXISTS `invoice` (
  `ID_invoice` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `address` varchar(250) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  PRIMARY KEY (`ID_invoice`),
  KEY `FK_invoice_users` (`user_id`),
  CONSTRAINT `FK_invoice_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table shopthucanthucung.itemized_invoice
CREATE TABLE IF NOT EXISTS `itemized_invoice` (
  `id_invoice` bigint(20) NOT NULL,
  `id_product` bigint(20) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `unit_price` float DEFAULT NULL,
  PRIMARY KEY (`id_invoice`,`id_product`),
  KEY `FK_itemized_invoice_product` (`id_product`),
  CONSTRAINT `FK_itemized_invoice_invoice` FOREIGN KEY (`id_invoice`) REFERENCES `invoice` (`ID_invoice`),
  CONSTRAINT `FK_itemized_invoice_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table shopthucanthucung.product
CREATE TABLE IF NOT EXISTS `product` (
  `id_product` bigint(20) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `size` varchar(250) DEFAULT NULL,
  `color` varchar(250) DEFAULT NULL,
  `old_price` float DEFAULT NULL,
  `new_price` float DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `yearofproduction` int(11) DEFAULT NULL,
  `view` int(11) DEFAULT NULL,
  `id_categories` bigint(20) NOT NULL,
  `id_supplier` bigint(20) NOT NULL,
  PRIMARY KEY (`id_product`),
  KEY `FK_product_categories` (`id_categories`),
  KEY `FK_product_supplier` (`id_supplier`),
  CONSTRAINT `FK_product_categories` FOREIGN KEY (`id_categories`) REFERENCES `categories` (`id_categories`),
  CONSTRAINT `FK_product_supplier` FOREIGN KEY (`id_supplier`) REFERENCES `supplier` (`id_supplier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table shopthucanthucung.supplier
CREATE TABLE IF NOT EXISTS `supplier` (
  `id_supplier` bigint(20) NOT NULL,
  `name_supplier` varchar(250) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `phone` char(10) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_supplier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table shopthucanthucung.users
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` bigint(20) NOT NULL,
  `first_name` varchar(250) DEFAULT NULL,
  `last_name` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `phone` char(10) DEFAULT NULL,
  `username` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `role` char(10) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
