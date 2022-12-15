-- MySQL dump 10.19  Distrib 10.3.37-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: estacionamiento
-- ------------------------------------------------------
-- Server version	10.3.37-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Parking`
--

DROP TABLE IF EXISTS `Parking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Parking` (
  `Matricula` int(10) NOT NULL AUTO_INCREMENT,
  `NameClient` varchar(50) NOT NULL,
  `IncomingVehicle` char(1) NOT NULL,
  `EntryTime` time NOT NULL,
  `OutgoingVehicle` char(1) DEFAULT NULL,
  `DepartureTime` time DEFAULT NULL,
  `TotalPrice$30PerHour` int(10) DEFAULT NULL,
  `SpecialIndication` varchar(255) DEFAULT NULL,
  `Active` char(1) NOT NULL,
  PRIMARY KEY (`Matricula`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Parking`
--

LOCK TABLES `Parking` WRITE;
/*!40000 ALTER TABLE `Parking` DISABLE KEYS */;
INSERT INTO `Parking` VALUES (1,'Vianey Sebastián Reyes','s','13:00:00','n','16:00:00',90,'Edificio A sesión 1','s'),(2,'olga Sebastián Reyes','s','13:00:00','n','16:00:00',90,'Edificio A sesión 1','s'),(3,'Maria Santiago Ramírez','s','08:00:00','n','13:00:00',1500,'Edificio B sesión 4','N'),(4,'Maria Santiago Ramírez','s','08:00:00','n','13:00:00',150,'Edificio B sesión 4','s'),(5,'Maribel Lázaro González','s','10:00:00','n','15:00:00',150,'Edificio A sesión 6','s'),(6,'Alejandro Bello Martinez','s','07:00:00','n','12:00:00',150,'Edificio B sesión 2','s'),(7,'Tomás Torres Santiago','s','14:00:00','n','17:00:00',90,'Edificio B sesión 1','s');
/*!40000 ALTER TABLE `Parking` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-15 15:34:08
