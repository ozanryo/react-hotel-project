-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: db_hotel
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `listhotel`
--

DROP TABLE IF EXISTS `listhotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listhotel` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `kota` varchar(45) DEFAULT NULL,
  `kamar` int DEFAULT NULL,
  `terpakai` int DEFAULT NULL,
  `tersedia` int DEFAULT NULL,
  `harga` double DEFAULT NULL,
  `url` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listhotel`
--

LOCK TABLES `listhotel` WRITE;
/*!40000 ALTER TABLE `listhotel` DISABLE KEYS */;
INSERT INTO `listhotel` VALUES (1,'Hotel Cempaka','Bandung',50,46,4,1250000,'https://id2-cdn.pgimgs.com/cms/news/2016/04/kamar-hotel-Marinabaysands.com_.original.jpg'),(2,'Hotel Mawar','Yogyakarta',35,33,2,950000,'https://yogyakarta.el-hotels.com/wp-content/uploads/sites/51/2021/01/SUPERIOR-KING-1.jpg'),(3,'Hotel Kita','Surabaya',115,59,56,1150000,'https://www.desain.id/users_media/8/Desain%20Interior%20Kamar%20Hotel%20Keren.jpg?v=1'),(4,'Hotel Dirgantara','Semarang',85,39,46,750000,'https://i1.wp.com/ndikhome.com/wp-content/uploads/2016/12/Desain-Interior-Kamar-Tidur-Hotel-.jpg?resize=1024%2C646'),(5,'Hotel Santika','Tangerang Selatan',250,81,169,1000000,'https://cdn.kiwicollection.com/media/property/PR004277/xl/004277-13-rcalbus_00060.jpg');
/*!40000 ALTER TABLE `listhotel` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-17 10:03:43
