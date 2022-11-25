DROP DATABASE IF EXISTS `db_pokemon`;
CREATE DATABASE db_pokemon;
USE db_pokemon;

DROP TABLE IF EXISTS `pokemon`;
  SET character_set_client = utf8mb4 ;
CREATE TABLE `pokemon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `experience` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_CREATE_POKEMON`(
	IN p_name VARCHAR(250),
    IN p_experience INT,
    IN p_weight INT,
    IN p_height INT
)
BEGIN
	DECLARE p_ultimoId INT;
    INSERT INTO pokemon (name, experience, weight, height)
    VALUES (p_name, p_experience, p_weight, p_height);
    
	SET p_ultimoId = ( SELECT LAST_INSERT_ID() ); 
    SELECT p_ultimoId AS id;
END ;;
DELIMITER ;
