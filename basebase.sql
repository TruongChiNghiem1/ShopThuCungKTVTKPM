/*
 Navicat Premium Data Transfer

 Source Server         : MariaDBLocal
 Source Server Type    : MariaDB
 Source Server Version : 110302
 Source Host           : localhost:3306
 Source Schema         : shopthucanthucung

 Target Server Type    : MariaDB
 Target Server Version : 110302
 File Encoding         : 65001

 Date: 08/04/2025 19:25:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id_categories` bigint(20) NOT NULL,
  `name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `created_by` int(11) NULL DEFAULT NULL,
  `updated_by` int(11) NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT current_timestamp(),
  `updated_at` datetime NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_categories`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_uca1400_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (1, 'Thức ăn', NULL, NULL, '2025-04-08 19:22:14', '2025-04-08 19:22:14');

-- ----------------------------
-- Table structure for favoriteproducts
-- ----------------------------
DROP TABLE IF EXISTS `favoriteproducts`;
CREATE TABLE `favoriteproducts`  (
  `Favorite_id` bigint(20) NOT NULL,
  `id_user` bigint(20) NOT NULL,
  `id_product` bigint(20) NOT NULL,
  `date` date NULL DEFAULT NULL,
  `created_by` int(11) NULL DEFAULT NULL,
  `updated_by` int(11) NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT current_timestamp(),
  `updated_at` datetime NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`Favorite_id`) USING BTREE,
  INDEX `FK_Favoriteproducts_product`(`id_product`) USING BTREE,
  INDEX `FK_Favoriteproducts_users`(`id_user`) USING BTREE,
  CONSTRAINT `FK_Favoriteproducts_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_Favoriteproducts_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_uca1400_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of favoriteproducts
-- ----------------------------

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image`  (
  `id_product` bigint(20) NOT NULL,
  `link` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `created_by` int(11) NULL DEFAULT NULL,
  `updated_by` int(11) NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT current_timestamp(),
  `updated_at` datetime NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  INDEX `FK_image_product`(`id_product`) USING BTREE,
  CONSTRAINT `FK_image_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_uca1400_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of image
-- ----------------------------

-- ----------------------------
-- Table structure for invoice
-- ----------------------------
DROP TABLE IF EXISTS `invoice`;
CREATE TABLE `invoice`  (
  `ID_invoice` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `address` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `order_date` date NULL DEFAULT NULL,
  `created_by` int(11) NULL DEFAULT NULL,
  `updated_by` int(11) NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT current_timestamp(),
  `updated_at` datetime NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_invoice`) USING BTREE,
  INDEX `FK_invoice_users`(`user_id`) USING BTREE,
  CONSTRAINT `FK_invoice_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_user`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_uca1400_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of invoice
-- ----------------------------

-- ----------------------------
-- Table structure for itemized_invoice
-- ----------------------------
DROP TABLE IF EXISTS `itemized_invoice`;
CREATE TABLE `itemized_invoice`  (
  `id_invoice` bigint(20) NOT NULL,
  `id_product` bigint(20) NOT NULL,
  `quantity` int(11) NULL DEFAULT NULL,
  `unit_price` float NULL DEFAULT NULL,
  `created_by` int(11) NULL DEFAULT NULL,
  `updated_by` int(11) NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT current_timestamp(),
  `updated_at` datetime NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_invoice`, `id_product`) USING BTREE,
  INDEX `FK_itemized_invoice_product`(`id_product`) USING BTREE,
  CONSTRAINT `FK_itemized_invoice_invoice` FOREIGN KEY (`id_invoice`) REFERENCES `invoice` (`ID_invoice`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_itemized_invoice_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_uca1400_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of itemized_invoice
-- ----------------------------

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `id_product` bigint(20) NOT NULL,
  `name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `quantity` int(11) NULL DEFAULT NULL,
  `size` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `color` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `old_price` float NULL DEFAULT NULL,
  `new_price` float NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `yearofproduction` int(11) NULL DEFAULT NULL,
  `view` int(11) NULL DEFAULT NULL,
  `id_categories` bigint(20) NOT NULL,
  `id_supplier` bigint(20) NOT NULL,
  `created_by` int(11) NULL DEFAULT NULL,
  `updated_by` int(11) NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT current_timestamp(),
  `updated_at` datetime NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_product`) USING BTREE,
  INDEX `FK_product_categories`(`id_categories`) USING BTREE,
  INDEX `FK_product_supplier`(`id_supplier`) USING BTREE,
  CONSTRAINT `FK_product_categories` FOREIGN KEY (`id_categories`) REFERENCES `categories` (`id_categories`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_product_supplier` FOREIGN KEY (`id_supplier`) REFERENCES `supplier` (`id_supplier`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_uca1400_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, 'SmartHeart Adult Food', 100, 'Medium', 'Brown', 6.5, 5.25, 'Thức ăn cho chó trưởng thành', 2023, 1200, 1, 1, NULL, NULL, '2025-04-08 19:22:14', '2025-04-08 19:22:14');
INSERT INTO `product` VALUES (2, 'Premium Cat Food', 150, 'Small', 'Blue', 5.99, 4.99, 'Thức ăn cao cấp cho mèo', 2024, 1800, 1, 1, NULL, NULL, '2025-04-08 19:22:14', '2025-04-08 19:22:14');
INSERT INTO `product` VALUES (3, 'Bird Feed Mix', 80, 'Large', 'Green', 4.5, 3.99, 'Hỗn hợp thức ăn cho chim', 2022, 900, 1, 1, NULL, NULL, '2025-04-08 19:22:14', '2025-04-08 19:22:14');
INSERT INTO `product` VALUES (4, 'Deluxe Pet Bowl', 200, 'Medium', 'Silver', 14.5, 12.99, 'Bát ăn cao cấp cho thú cưng', 2023, 1500, 1, 1, NULL, NULL, '2025-04-08 19:22:14', '2025-04-08 19:22:14');
INSERT INTO `product` VALUES (5, 'Pet Grooming Kit', 120, 'Large', 'Black', 29.99, 24.99, 'Bộ dụng cụ chải lông thú cưng', 2024, 2100, 1, 1, NULL, NULL, '2025-04-08 19:22:14', '2025-04-08 19:22:14');
INSERT INTO `product` VALUES (6, 'Dog Chew Toy', 250, 'Small', 'Red', 7.99, 6.5, 'Đồ chơi gặm cho chó', 2023, 1000, 1, 1, NULL, NULL, '2025-04-08 19:22:14', '2025-04-08 19:22:14');
INSERT INTO `product` VALUES (7, 'Cat Scratching Post', 90, 'Large', 'Beige', 35, 29.99, 'Trụ cào móng cho mèo', 2022, 1700, 1, 1, NULL, NULL, '2025-04-08 19:22:14', '2025-04-08 19:22:14');
INSERT INTO `product` VALUES (8, 'Aquarium Water Filter', 60, 'Medium', 'White', 49.99, 42.5, 'Bộ lọc nước cho bể cá', 2024, 800, 1, 1, NULL, NULL, '2025-04-08 19:22:14', '2025-04-08 19:22:14');
INSERT INTO `product` VALUES (9, 'Hamster Running Wheel', 180, 'Small', 'Yellow', 12.99, 10.99, 'Bánh xe chạy cho chuột hamster', 2023, 1400, 1, 1, NULL, NULL, '2025-04-08 19:22:14', '2025-04-08 19:22:14');
INSERT INTO `product` VALUES (10, 'Reptile Heating Lamp', 70, 'Medium', 'Black', 19.99, 16.99, 'Đèn sưởi cho bò sát', 2022, 1100, 1, 1, NULL, NULL, '2025-04-08 19:22:14', '2025-04-08 19:22:14');

-- ----------------------------
-- Table structure for supplier
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier`  (
  `id_supplier` bigint(20) NOT NULL,
  `name_supplier` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `address` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `phone` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `email` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `created_by` int(11) NULL DEFAULT NULL,
  `updated_by` int(11) NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT current_timestamp(),
  `updated_at` datetime NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_supplier`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_uca1400_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of supplier
-- ----------------------------
INSERT INTO `supplier` VALUES (1, 'Công ty thức ăn CP', '12 Nguyễn Văn Bảo, Phường 12, gò vấp', '0855544741', 'channuoiCP@gmail.com', NULL, NULL, '2025-04-08 19:22:15', '2025-04-08 19:22:15');

-- ----------------------------
-- Table structure for token
-- ----------------------------
DROP TABLE IF EXISTS `token`;
CREATE TABLE `token`  (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `otp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_uca1400_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of token
-- ----------------------------
INSERT INTO `token` VALUES ('nghiem0859774418@gmail.com', '1927', NULL, NULL, NULL, 2);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id_user` bigint(20) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `last_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `email` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `phone` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `username` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `role` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `birthday` date NULL DEFAULT NULL,
  `address` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `otp` int(11) NULL DEFAULT NULL,
  `created_by` int(11) NULL DEFAULT NULL,
  `updated_by` int(11) NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT current_timestamp(),
  `updated_at` datetime NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_user`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_uca1400_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (2, 'Trương', 'Nghiệm', 'nghiem0859774418@gmail.com', NULL, NULL, '$2a$10$mK/rT.YCcFv6383iL1uXoewFq2VXlEHmAtcTQ8juxCrw7ZB/lVsrS', '2', NULL, NULL, NULL, NULL, NULL, '2025-04-08 19:23:31', '2025-04-08 19:23:31');

-- ----------------------------
-- Procedure structure for AddAuditColumns
-- ----------------------------
DROP PROCEDURE IF EXISTS `AddAuditColumns`;
delimiter ;;
CREATE PROCEDURE `AddAuditColumns`()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE table_name VARCHAR(255);
    DECLARE col_count INT;
    DECLARE cur CURSOR FOR
        SELECT TABLE_NAME
        FROM information_schema.TABLES
        WHERE TABLE_SCHEMA = DATABASE() AND TABLE_TYPE = 'BASE TABLE';
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO table_name;

        IF done THEN
            LEAVE read_loop;
        END IF;

        IF table_name IS NULL THEN
            ITERATE read_loop;
        END IF;

        SET @sql = '';

        -- Check and add created_by
        SELECT COUNT(*) INTO col_count FROM information_schema.COLUMNS
        WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = table_name AND COLUMN_NAME = 'created_by';
        IF col_count = 0 THEN
            SET @sql = CONCAT(@sql, ' ADD COLUMN created_by INT DEFAULT NULL,');
        END IF;

        -- Check and add updated_by
        SELECT COUNT(*) INTO col_count FROM information_schema.COLUMNS
        WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = table_name AND COLUMN_NAME = 'updated_by';
        IF col_count = 0 THEN
            SET @sql = CONCAT(@sql, ' ADD COLUMN updated_by INT DEFAULT NULL,');
        END IF;

        -- Check and add created_at
        SELECT COUNT(*) INTO col_count FROM information_schema.COLUMNS
        WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = table_name AND COLUMN_NAME = 'created_at';
        IF col_count = 0 THEN
            SET @sql = CONCAT(@sql, ' ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP,');
        END IF;

        -- Check and add updated_at
        SELECT COUNT(*) INTO col_count FROM information_schema.COLUMNS
        WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = table_name AND COLUMN_NAME = 'updated_at';
        IF col_count = 0 THEN
            SET @sql = CONCAT(@sql, ' ADD COLUMN updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,');
        END IF;

        -- Nếu có cột cần thêm
        IF LENGTH(@sql) > 0 THEN
            SET @sql = LEFT(@sql, LENGTH(@sql) - 1); -- remove last comma
            SET @sql = CONCAT('ALTER TABLE `', table_name, '`', @sql);
            SELECT @sql; -- Debug xem chính xác câu lệnh
            PREPARE stmt FROM @sql;
            EXECUTE stmt;
            DEALLOCATE PREPARE stmt;
        END IF;

    END LOOP;

    CLOSE cur;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
