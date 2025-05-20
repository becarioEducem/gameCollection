-- Database creation
DROP DATABASE IF EXISTS `gameLibrary`;
CREATE DATABASE IF NOT EXISTS `gameLibrary`;
USE `gameLibrary`;

-- Table creation
DROP TABLE IF EXISTS `genre`;
CREATE TABLE `genre` (
  `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `name` VARCHAR(64) NOT NULL UNIQUE,
  `genre_id` INT
);

DROP TABLE IF EXISTS `manufacturer`;
CREATE TABLE `manufacturer` (
  `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `name` VARCHAR(64) NOT NULL UNIQUE
);

DROP TABLE IF EXISTS `platform`;
CREATE TABLE `platform` (
  `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `name` VARCHAR(64) NOT NULL UNIQUE,
  `manufacturer_id` INT NOT NULL,
  `release_date` DATE
);

DROP TABLE IF EXISTS `game`;
CREATE TABLE `game` (
  `id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `title` VARCHAR(128) NOT NULL,
  `platform_id` INT NOT NULL,
  `genre_id` INT NOT NULL,
  `cover_url` VARCHAR(128),
  `year` INT,
  `rating` INT,
  `favorite` BOOLEAN
);

-- Foreign keys creation
ALTER TABLE `genre`         ADD FOREIGN KEY (`genre_id`)          REFERENCES `genre`        (`id`);
ALTER TABLE `platform`      ADD FOREIGN KEY (`manufacturer_id`)   REFERENCES `manufacturer` (`id`);
ALTER TABLE `game`          ADD FOREIGN KEY (`genre_id`)          REFERENCES `genre`         (`id`);
ALTER TABLE `game`          ADD FOREIGN KEY (`platform_id`)       REFERENCES `platform`     (`id`);


-- Insertions
INSERT INTO `manufacturer` (`name`) VALUES 
('Nintendo'),
('Sony'),
('Microsoft'),
('Sega');

INSERT INTO `platform` (`name`, `manufacturer_id`, `release_date`) VALUES
('Nintendo Entertainment System', 1, '1983-07-15'),
('Game Boy', 1, '1989-04-21'),
('Super Nintendo Entertainment System', 1, '1990-11-21'),
('Nintendo 64', 1, '1996-06-23'),
('Game Boy Color', 1, '1998-10-21'),
('Game Boy Advance', 1, '2001-03-21'),
('GameCube', 1, '2001-09-14'),
('Nintendo DS', 1, '2004-11-21'),
('Wii', 1, '2006-11-19'),
('Nintendo 3DS', 1, '2011-02-26'),
('Wii U', 1, '2012-11-18'),
('Nintendo Switch', 1, '2017-03-03'),
('PlayStation', 2, '1994-12-03'),
('PlayStation 2', 2, '2000-03-04'),
('PlayStation Portable', 2, '2004-12-12'),
('PlayStation 3', 2, '2006-11-11'),
('PlayStation Vita', 2, '2011-12-17'),
('PlayStation 4', 2, '2013-11-15'),
('PlayStation 5', 2, '2020-11-12'),
('Xbox', 3, '2001-11-15'),
('Xbox 360', 3, '2005-11-22'),
('Xbox One', 3, '2013-11-22'),
('Xbox Series X/S', 3, '2020-11-10'),
('Master System', 4, '1985-10-20'),
('Mega Drive', 4, '1988-10-29'),
('Game Gear', 4, '1990-10-06'),
('Mega CD', 4, '1991-12-12'),
('32X', 4, '1994-11-22'),
('Saturn', 4, '1994-11-22'),
('Dreamcast', 4, '1998-11-27');

INSERT INTO `genre` (`name`, `genre_id`) VALUES
('Action', NULL),
('Adventure', NULL),
('RPG', NULL),
('Action RPG',3),
('Tactical RPG',3),
('JRPG',3),
('Simulation', NULL),
('Flight Simulation', 7),
('Vehicle Simulation', 7),
('Sports Simulation', 7),
('Strategy', NULL),
('Real-time Strategy', 11),
('Turn-based Strategy', 11),
('Puzzle', NULL),
('Board Game', 14),
('Card Game', 14),
('Trivia', 14),
('Racing', NULL),
('Fighting', NULL),
('Platformer', NULL),
('Shooter', NULL),
('First-person Shooter', 21),
('Third-person Shooter', 21),
('Horror', NULL),
('Survival Horror', 24),
('Action Horror', 24),
('Music', NULL);

INSERT INTO `game` (`title`, `platform_id`, `genre_id`, `cover_url`, `year`, `rating`, `favorite`) VALUES
('Super Mario Bros.', 1, 20, 'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png', 1985, 9, 1),
('The Legend of Zelda', 1, 2, 'https://cdn.mobygames.com/covers/4045638-the-legend-of-zelda-nes-front-cover.jpg', 1986, 10, 0),
('Final Fantasy VII', 13, 6, 'https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg', 1997, 10, 1),
('The Legend of Zelda: Ocarina of Time', 4, 2, 'https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg', 1998, 10, 1);