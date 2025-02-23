-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: subway
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `para`
--

DROP TABLE IF EXISTS `para`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `para` (
  `id` int NOT NULL AUTO_INCREMENT,
  `section_num` int NOT NULL,
  `st_num` int NOT NULL,
  `text` varchar(1000) DEFAULT NULL,
  `text_en` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `para`
--

LOCK TABLES `para` WRITE;
/*!40000 ALTER TABLE `para` DISABLE KEYS */;
INSERT INTO `para` VALUES (1,1,1,'Центральный зал станции «Электросила» является одним из самых коротких в Петербургском метрополитене, с боковыми перронами его соединяют прямоугольные прорези-проходы. Отделка стен выполнена без применения мраморной облицовки. Своды, покрытые простой побеленной штукатуркой,','The central hall of the Electrosila station is one of the shortest in the St. Petersburg Metro, with rectangular aisles connecting it to the side platforms. The walls are finished without the use of marble cladding. The vaults, covered with simple whitewashed plaster,'),(2,2,1,'Изначально путевые стены станции облицевали белой какафельной плиткой, в период с 2009 по 2011 гг. в ходе ремонтных работ плитку заменили на большие блоки из керамогранита. В это же время асфальтовое покрытие убрали и украсили полы станции гранитом.','Initially, the station\'s track walls were lined with white cacafel tiles, and between 2009 and 2011, during renovation work, the tiles were replaced with large blocks of granite. At the same time, the asphalt pavement was removed and the floors of the station were decorated with granite.'),(3,3,1,'В торцевой части центрального зала располагается панно под названием «Электрификация СССР». На фоне карты СССР, составленной из кусочков керамики, изображена фигура рабочего, могучей рукой зажигающего огни электростанций. В нижнем левом углу слова В.И. Ленина: «Коммунизм - это есть советская власть плюс электрификация всей','In the end part of the central hall there is a panel called \"Electrification of the USSR\". On the background of a map of the USSR, made up of pieces of ceramics, there is a figure of a worker lighting the lights of power plants with a mighty hand. In the lower left corner are the words of V.I. Lenin: \"Communism is the Soviet government plus the electrification of the whole'),(4,1,2,'Торцевую стену центрального подземного зала украшает яркое красочное мозаичное панно «Победа» с изображением женщины с младенцем, работы художников В.А. Воронецкого','The end wall of the central underground hall is decorated with a bright colorful mosaic panel \"Victory\" depicting a woman with a baby, the work of artists V.A. Voronetsky'),(5,2,2,'Текст на ленте выглядит так: «Наше дело правое, мы победили». В нижних углах панно изображены щиты с памятными датами «1941», «1945».\\','The text on the tape looks like this: \"Our cause is just, we won.\" In the lower corners of the panel there are billboards with commemorative dates \"1941\", \"1945\".\\'),(6,3,2,'Появление этого панно сопровождали определенные трудности, некоторые чиновники нашли в нем сходство с Мадонной Рафаэля. Художник так изобразил мать с младенцем, что некоторые богомольные','The appearance of this panel was accompanied by certain difficulties, some officials found in it a resemblance to the Madonna of Raphael. The artist depicted a mother with a baby in such a way that some worshippers'),(7,1,3,'«Комендантский проспект» - колонно-стеновая станция глубокого заложения, ряды колони в центре подземного зала прерываются участком сплошной стены. Колонны, располо-','Komendantsky Prospekt is a column-and-wall station of deep foundation, the rows of columns in the center of the underground hall are interrupted by a section of solid wall. '),(8,2,3,'Александр Константинов, главный архитектор проекта станцин, говорит, что авиация выбрана в качестве темы оформления неслучайно: «На этом месте был знаменитый','Alexander Konstantinov, the chief architect of the Stantsin project, says that aviation was chosen as the design theme for a reason: \"There was a famous'),(9,3,3,'Действительно, основные цвета вестибюля - голубой, синий, белый. «Это настоящий подарок болельщикам , Зенита\"», - шутила молодежь. Изначально в отделке планировалось ис-','Indeed, the main colors of the lobby are blue, blue, and white. \"This is a real gift for Zenit fans,\" joked the youth. Initially, it was planned'),(10,1,4,'Путевые стены облицованы серо-коричневым гранитом, по верху тянется полоса из красного гранита с названием станции. Стены у эскалаторов украшает уральский белый мрамор','The track walls are lined with gray-brown granite, and a strip of red granite with the name of the station stretches along the top. The walls of the escalators are decorated with Ural white marble'),(11,2,4,'Чтобы соответствовать заявленной теме оформления станции: «Партия - вдохновляющая и организующая сила нашего общества», проектировщики решили установить в торце зала','To match the stated theme of the station\'s design: \"The Party is the inspiring and organizing force of our society,\" the designers decided to install'),(12,3,4,'Но, как обычно это бывает, подготовить задуманное к открытию не успели. Как говорил обозреватель О.В. Васильев в статье, посвященной открытию новой линии, «приходится только','But, as is usually the case, they did not have time to prepare their plans for the opening. As columnist O.V. Vasiliev said in an article dedicated to the opening of the new line, \"we only have'),(13,1,5,'«Новочеркасская» - односводчатая станция глубокого заложения. Ее подземный зал сооружен по проекту архитекторов института «Ленметрогипротранс» В.Г. Хильченко,','Novocherkasskaya is a single-vaulted deep-laying station. Its underground hall was built according to the project of architects of the Lenmetrogiprotrans Institute V.G. Khilchenko,'),(14,2,5,'Первоначальная тема художественного оформления Ленинград город трех революций, после получения названия «Красногвардейская» - борьба Красной гвардии Петрограда','The original theme of the decoration of Leningrad is the city of three revolutions, after receiving the name \"Krasnogvardeyskaya\" - the struggle of the Red Guard of Petrograd'),(15,3,5,'В отделке путевых стен подземного зала использован мрамор байкальского месторождения «Буровщина», полосчатый, с зеленью и чернотой. Помимо него, на «Красногвардейской»','Marble from the Baikal deposit \"Burovshchyna\", striped with green and black, was used in the decoration of the track walls of the underground hall. In addition to it,');
/*!40000 ALTER TABLE `para` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `caption` varchar(255) DEFAULT NULL,
  `caption_en` varchar(255) DEFAULT NULL,
  `section_num` int NOT NULL,
  `src` varchar(255) DEFAULT NULL,
  `st_num` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` VALUES (1,'Светильники в пилоне','Lamps in the pylon',1,'https://b6.icdn.ru/d/daniilmelnik/0/77360030DgB.jpg',1),(2,'Алюминиевый профиль','Aluminum profile',2,'https://b6.icdn.ru/d/daniilmelnik/1/77360031QMN.jpg',1),(3,'Декоративное панно','Decorative panel',3,'https://b6.icdn.ru/d/daniilmelnik/0/77360020jLB.jpg',1),(4,'Стекло на колоннах','Glass on the column',1,'https://b6.icdn.ru/d/daniilmelnik/4/77359194Qit.jpg',2),(5,'Колонна','Column',2,'https://b6.icdn.ru/d/daniilmelnik/8/77359168ZuN.jpg',2),(6,'Посадки нет','No way',3,'https://b6.icdn.ru/d/daniilmelnik/3/77359173oij.jpg',2),(7,'Советский лётчик','Soviet fighter',1,'https://b6.icdn.ru/d/daniilmelnik/1/77618301TRg.jpg',3),(8,'60 лет Победы','60 th Victory day',2,'https://b6.icdn.ru/d/daniilmelnik/5/77618305qYj.jpg',3),(9,'Советский лётчик','Soviet fighter',3,'https://b6.icdn.ru/d/daniilmelnik/3/77618303rQe.jpg',3),(10,'Проспект большевиков','Prospect bolshevikov',1,'https://b6.icdn.ru/d/daniilmelnik/5/77360075WNR.jpg',4),(11,'Советский символ','Soviet symbol',2,'https://b6.icdn.ru/d/daniilmelnik/9/77360079MVh.jpg',4),(12,'Потолок','Wall',3,'https://b6.icdn.ru/d/daniilmelnik/5/77360105vut.jpg',4),(13,'Красногвардейская','Krasnogvardeyskaya',1,'https://b6.icdn.ru/d/daniilmelnik/8/77360048kPs.jpg',5),(14,'Свет','Light',2,'https://b6.icdn.ru/d/daniilmelnik/8/77360058yzb.jpg',5),(15,'Потолок','Wall',3,'https://b6.icdn.ru/d/daniilmelnik/4/77360054VYL.jpg',5);
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `s_lines`
--

DROP TABLE IF EXISTS `s_lines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `s_lines` (
  `id` int NOT NULL AUTO_INCREMENT,
  `abbr` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `name_en` varchar(255) DEFAULT NULL,
  `num_of_st` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `s_lines`
--

LOCK TABLES `s_lines` WRITE;
/*!40000 ALTER TABLE `s_lines` DISABLE KEYS */;
INSERT INTO `s_lines` VALUES (1,'M1','Красный','Кировско-Выборгская','Kirovsko-Vyborgskaya',19),(2,'M2','Синий','Московско-Петроградская','Moskovsko-Petrogradskaya',18),(3,'M3','Зелёный','Невско-Василиеостровская','Nevsko-Vasileostrovskaya',12),(4,'M4','Оранжевый','Лахтинско-Правобережная','Lakhtinsko-Pravoberezhnaya',9),(5,'M5','Фиолетовый','Фрунзенско-Приморская','Frunzensko-Primorskaya',15);
/*!40000 ALTER TABLE `s_lines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stations`
--

DROP TABLE IF EXISTS `stations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img1` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `line_id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `name_en` varchar(255) DEFAULT NULL,
  `num_of_sec` int NOT NULL,
  `year` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stations`
--

LOCK TABLES `stations` WRITE;
/*!40000 ALTER TABLE `stations` DISABLE KEYS */;
INSERT INTO `stations` VALUES (1,'https://b6.icdn.ru/d/daniilmelnik/9/77372799hMD.jpg','https://b6.icdn.ru/d/daniilmelnik/4/77372884kuM.jpg','https://b6.icdn.ru/d/daniilmelnik/2/77360022XBv.jpg',2,'Электросила','Electrosila',3,1961),(2,'https://b6.icdn.ru/d/daniilmelnik/2/77359172uiz.jpg','https://b6.icdn.ru/d/daniilmelnik/0/77359170iKm.jpg','https://b6.icdn.ru/d/daniilmelnik/5/77359165aQz.jpg',1,'Автово','Avtovo',3,1955),(3,'https://b6.icdn.ru/d/daniilmelnik/2/77618282XHu.jpg','https://b6.icdn.ru/d/daniilmelnik/2/77618302kqL.jpg','https://b6.icdn.ru/d/daniilmelnik/4/77618284ikg.jpg',5,'Комендантский роспект','Komendantsky prospect',3,1995),(4,'https://b6.icdn.ru/d/daniilmelnik/3/77360103aih.jpg','https://b6.icdn.ru/d/daniilmelnik/1/77360081FvN.jpg','https://b6.icdn.ru/d/daniilmelnik/3/77360083sdb.jpg',4,'Проспект большевиков','Prospect bolshevikov',3,1985),(5,'https://b6.icdn.ru/d/daniilmelnik/8/77360058yzb.jpg','https://b6.icdn.ru/d/daniilmelnik/1/77360051rmN.jpg','https://b6.icdn.ru/d/daniilmelnik/5/77360055NMQ.jpg',4,'Новочеркасская','Novocherkasskaya',3,1985);
/*!40000 ALTER TABLE `stations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `is_logged` int NOT NULL,
  `psw` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test@bk.ru',1,'123'),(2,'dan@test.ru',0,'123'),(3,'qwe',0,'qwe');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-24  0:28:41
