-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-12-2018 a las 08:19:40
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `sendfile`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `file`
--

CREATE TABLE IF NOT EXISTS `file` (
  `idfile` int(11) NOT NULL AUTO_INCREMENT,
  `file` text,
  `file_ext` varchar(4) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`idfile`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `file`
--

INSERT INTO `file` (`idfile`, `file`, `file_ext`, `date`) VALUES
(1, 'j873753.rtf', 'rtf', '0000-00-00'),
(2, 'j880995.zip', 'zip', '0000-00-00'),
(3, 'j766134.rtf', 'rtf', '2018-10-21'),
(4, 'j718635.rtf', 'rtf', '2018-10-25'),
(5, 'j754549.pdf', 'pdf', '2018-10-26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profiles`
--

CREATE TABLE IF NOT EXISTS `profiles` (
  `idprofiles` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `surname` varchar(250) DEFAULT NULL,
  `profile_img` text,
  `description` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`idprofiles`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `profiles`
--

INSERT INTO `profiles` (`idprofiles`, `name`, `surname`, `profile_img`, `description`) VALUES
(1, 'Jeremy', 'Geminiani', 'https://vignette.wikia.nocookie.net/sonic/images/5/5f/Calamardo_SENSUAL.png/revision/latest?cb=20150322235320&path-prefix=es', 'En el mundo tendreis affliciones, pero confiad en mi, porque yo he vencido al mundo'),
(2, 'Jaah', 'Stremel', 'https://instagram.fbhi1-1.fna.fbcdn.net/vp/7b4704e60d3b297684c4f183f31b12f3/5C9B9363/t51.2885-19/s150x150/47210883_264202534266696_5353076104762490880_n.jpg', 'Hello Moto! this world is very amazing!!!');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
