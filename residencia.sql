-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 09-05-2021 a las 21:20:45
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `residencia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `abuelo`
--

DROP TABLE IF EXISTS `abuelo`;
CREATE TABLE IF NOT EXISTS `abuelo` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(200) NOT NULL,
  `Edat` int(11) DEFAULT NULL,
  `Familiar` int(11) NOT NULL,
  `comentari` varchar(200) DEFAULT NULL,
  `Latitud` varchar(200) DEFAULT NULL,
  `Longitud` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk_familiar` (`Familiar`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `abuelo`
--

INSERT INTO `abuelo` (`Id`, `Nom`, `Edat`, `Familiar`, `comentari`, `Latitud`, `Longitud`) VALUES
(23, 'aass', 58, 1, NULL, '41.435136', '2.179072'),
(22, 'jefe', 89, 2, '                                cuidaaaaaa', '41.435136', '2.179072'),
(21, 'se acabo', 85, 1, NULL, '41.435136', '2.179072'),
(24, 'Lamare', 89, 2, NULL, '41.435136', '2.179072');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(200) NOT NULL,
  `Password` varchar(200) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`Id`, `Nom`, `Password`) VALUES
(1, 'test', '1234'),
(2, 'jesu', 'white');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentaris`
--

DROP TABLE IF EXISTS `comentaris`;
CREATE TABLE IF NOT EXISTS `comentaris` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `familiar` varchar(50) NOT NULL,
  `comentari` varchar(200) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comentaris`
--

INSERT INTO `comentaris` (`Id`, `familiar`, `comentari`) VALUES
(3, 'andres', 'asi es doña me fui                                '),
(4, 'carles', 'Eso es asi por ley                                '),
(5, 'andres', 'Me canse de esta vaina        ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `familiar`
--

DROP TABLE IF EXISTS `familiar`;
CREATE TABLE IF NOT EXISTS `familiar` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(200) NOT NULL,
  `Password` varchar(200) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `familiar`
--

INSERT INTO `familiar` (`Id`, `Nom`, `Password`) VALUES
(1, 'andres', 'londono'),
(2, 'carles', '1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajador`
--

DROP TABLE IF EXISTS `trabajador`;
CREATE TABLE IF NOT EXISTS `trabajador` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(200) NOT NULL,
  `Password` varchar(200) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `trabajador`
--

INSERT INTO `trabajador` (`Id`, `Nom`, `Password`) VALUES
(1, 'albert', '1234');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
