/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 110302
 Source Host           : localhost:3306
 Source Schema         : shopthucanthucung

 Target Server Type    : MySQL
 Target Server Version : 110302
 File Encoding         : 65001

 Date: 11/03/2025 19:00:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id_categories` bigint NOT NULL,
  `name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_categories`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_uca1400_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories
-- ----------------------------

-- ----------------------------
-- Table structure for favoriteproducts
-- ----------------------------
DROP TABLE IF EXISTS `favoriteproducts`;
CREATE TABLE `favoriteproducts`  (
  `Favorite_id` bigint NOT NULL,
  `id_user` bigint NOT NULL,
  `id_product` bigint NOT NULL,
  `date` date NULL DEFAULT NULL,
  PRIMARY KEY (`Favorite_id`) USING BTREE,
  INDEX `FK_Favoriteproducts_product`(`id_product` ASC) USING BTREE,
  INDEX `FK_Favoriteproducts_users`(`id_user` ASC) USING BTREE,
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
  `id_product` bigint NOT NULL,
  `link` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  INDEX `FK_image_product`(`id_product` ASC) USING BTREE,
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
  `ID_invoice` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `address` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `order_date` date NULL DEFAULT NULL,
  PRIMARY KEY (`ID_invoice`) USING BTREE,
  INDEX `FK_invoice_users`(`user_id` ASC) USING BTREE,
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
  `id_invoice` bigint NOT NULL,
  `id_product` bigint NOT NULL,
  `quantity` int NULL DEFAULT NULL,
  `unit_price` float NULL DEFAULT NULL,
  PRIMARY KEY (`id_invoice`, `id_product`) USING BTREE,
  INDEX `FK_itemized_invoice_product`(`id_product` ASC) USING BTREE,
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
  `id_product` bigint NOT NULL,
  `name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `quantity` int NULL DEFAULT NULL,
  `size` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `color` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `old_price` float NULL DEFAULT NULL,
  `new_price` float NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `yearofproduction` int NULL DEFAULT NULL,
  `view` int NULL DEFAULT NULL,
  `id_categories` bigint NOT NULL,
  `id_supplier` bigint NOT NULL,
  PRIMARY KEY (`id_product`) USING BTREE,
  INDEX `FK_product_categories`(`id_categories` ASC) USING BTREE,
  INDEX `FK_product_supplier`(`id_supplier` ASC) USING BTREE,
  CONSTRAINT `FK_product_categories` FOREIGN KEY (`id_categories`) REFERENCES `categories` (`id_categories`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK_product_supplier` FOREIGN KEY (`id_supplier`) REFERENCES `supplier` (`id_supplier`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_uca1400_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product
-- ----------------------------

-- ----------------------------
-- Table structure for supplier
-- ----------------------------
DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier`  (
  `id_supplier` bigint NOT NULL,
  `name_supplier` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `address` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `phone` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `email` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_supplier`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_uca1400_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of supplier
-- ----------------------------

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
  `id` int NOT NULL AUTO_INCREMENT,
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
  `id_user` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `last_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `email` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `phone` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `username` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `role` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `birthday` date NULL DEFAULT NULL,
  `address` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci NULL DEFAULT NULL,
  `otp` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_user`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_uca1400_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (2, 'Trương', 'Nghiệm', 'nghiem0859774418@gmail.com', NULL, NULL, '$2a$10$mK/rT.YCcFv6383iL1uXoewFq2VXlEHmAtcTQ8juxCrw7ZB/lVsrS', '2', NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
