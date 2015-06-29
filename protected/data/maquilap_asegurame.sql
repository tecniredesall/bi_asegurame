-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-05-2015 a las 05:49:59
-- Versión del servidor: 5.6.20
-- Versión de PHP: 5.5.15

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `maquilap_asegurame`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE IF NOT EXISTS `cliente` (
`idCLIENTE` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `rif` varchar(45) DEFAULT NULL,
  `ESTATUS_idESTATUS` int(11) NOT NULL,
  `direccion` varchar(45) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`idCLIENTE`, `nombre`, `rif`, `ESTATUS_idESTATUS`, `direccion`) VALUES
(1, 'Consultec, C.A.', 'j-234234234-4', 3, 'La castellana');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estatus`
--

CREATE TABLE IF NOT EXISTS `estatus` (
`idESTATUS` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `TIPO_ESTATUS_idTIPO_ESTATUS` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `estatus`
--

INSERT INTO `estatus` (`idESTATUS`, `nombre`, `TIPO_ESTATUS_idTIPO_ESTATUS`) VALUES
(1, 'ACTIVO', 1),
(2, 'INACTIVO', 1),
(3, 'ACTIVO', 2),
(4, 'INACTIVO', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `privilegios`
--

CREATE TABLE IF NOT EXISTS `privilegios` (
`idPRIVILEGIOS` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `ROL_idROL` int(11) NOT NULL,
  `TIPO_PRIVILEGIO_idTIPO_PRIVILEGIO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE IF NOT EXISTS `rol` (
`idROL` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`idROL`, `nombre`) VALUES
(1, 'ADMINISTRADOR'),
(2, 'CLIENTE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_estatus`
--

CREATE TABLE IF NOT EXISTS `tipo_estatus` (
`idTIPO_ESTATUS` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3;

--
-- Volcado de datos para la tabla `tipo_estatus`
--

INSERT INTO `tipo_estatus` (`idTIPO_ESTATUS`, `nombre`) VALUES
(1, 'USUARIO'),
(2, 'CLIENTE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_privilegio`
--

CREATE TABLE IF NOT EXISTS `tipo_privilegio` (
`idTIPO_PRIVILEGIO` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
`idUSUARIO` int(11) NOT NULL,
  `ROL_idROL` int(11) NOT NULL,
  `ESTATUS_idESTATUS` int(11) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `nombres` varchar(200) DEFAULT NULL,
  `clave` varchar(32) NOT NULL,
  `creado` date NOT NULL,
  `ultimo_acceso` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `CLIENTE_idCLIENTE` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUSUARIO`, `ROL_idROL`, `ESTATUS_idESTATUS`, `email`, `telefono`, `nombres`, `clave`, `creado`, `ultimo_acceso`, `CLIENTE_idCLIENTE`) VALUES
(1, 1, 2, 'rmandovnz@gmail.com', '04129375070', 'Armando Del Rosario', '25d55ad283aa400af464c76d713c07ad', '2015-05-07', '2015-05-08 02:35:06', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
 ADD PRIMARY KEY (`idCLIENTE`), ADD KEY `fk_CLIENTE_ESTATUS1_idx` (`ESTATUS_idESTATUS`);

--
-- Indices de la tabla `estatus`
--
ALTER TABLE `estatus`
 ADD PRIMARY KEY (`idESTATUS`), ADD KEY `fk_ESTATUS_TIPO_ESTATUS1_idx` (`TIPO_ESTATUS_idTIPO_ESTATUS`);

--
-- Indices de la tabla `privilegios`
--
ALTER TABLE `privilegios`
 ADD PRIMARY KEY (`idPRIVILEGIOS`), ADD KEY `fk_PRIVILEGIOS_ROL1_idx` (`ROL_idROL`), ADD KEY `fk_PRIVILEGIOS_TIPO_PRIVILEGIO1_idx` (`TIPO_PRIVILEGIO_idTIPO_PRIVILEGIO`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
 ADD PRIMARY KEY (`idROL`);

--
-- Indices de la tabla `tipo_estatus`
--
ALTER TABLE `tipo_estatus`
 ADD PRIMARY KEY (`idTIPO_ESTATUS`);

--
-- Indices de la tabla `tipo_privilegio`
--
ALTER TABLE `tipo_privilegio`
 ADD PRIMARY KEY (`idTIPO_PRIVILEGIO`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
 ADD PRIMARY KEY (`idUSUARIO`), ADD KEY `fk_USUARIO_ROL1_idx` (`ROL_idROL`), ADD KEY `fk_USUARIO_ESTADO1_idx` (`ESTATUS_idESTATUS`), ADD KEY `fk_USUARIO_CLIENTE1_idx` (`CLIENTE_idCLIENTE`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
MODIFY `idCLIENTE` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `estatus`
--
ALTER TABLE `estatus`
MODIFY `idESTATUS` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `privilegios`
--
ALTER TABLE `privilegios`
MODIFY `idPRIVILEGIOS` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
MODIFY `idROL` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `tipo_estatus`
--
ALTER TABLE `tipo_estatus`
MODIFY `idTIPO_ESTATUS` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `tipo_privilegio`
--
ALTER TABLE `tipo_privilegio`
MODIFY `idTIPO_PRIVILEGIO` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
MODIFY `idUSUARIO` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
ADD CONSTRAINT `fk_CLIENTE_ESTATUS1` FOREIGN KEY (`ESTATUS_idESTATUS`) REFERENCES `estatus` (`idESTATUS`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `estatus`
--
ALTER TABLE `estatus`
ADD CONSTRAINT `fk_ESTATUS_TIPO_ESTATUS1` FOREIGN KEY (`TIPO_ESTATUS_idTIPO_ESTATUS`) REFERENCES `tipo_estatus` (`idTIPO_ESTATUS`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `privilegios`
--
ALTER TABLE `privilegios`
ADD CONSTRAINT `fk_PRIVILEGIOS_ROL1` FOREIGN KEY (`ROL_idROL`) REFERENCES `rol` (`idROL`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_PRIVILEGIOS_TIPO_PRIVILEGIO1` FOREIGN KEY (`TIPO_PRIVILEGIO_idTIPO_PRIVILEGIO`) REFERENCES `tipo_privilegio` (`idTIPO_PRIVILEGIO`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
ADD CONSTRAINT `fk_USUARIO_CLIENTE1` FOREIGN KEY (`CLIENTE_idCLIENTE`) REFERENCES `cliente` (`idCLIENTE`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_USUARIO_ESTADO1` FOREIGN KEY (`ESTATUS_idESTATUS`) REFERENCES `estatus` (`idESTATUS`) ON DELETE NO ACTION ON UPDATE NO ACTION,
ADD CONSTRAINT `fk_USUARIO_ROL1` FOREIGN KEY (`ROL_idROL`) REFERENCES `rol` (`idROL`) ON DELETE NO ACTION ON UPDATE NO ACTION;
SET FOREIGN_KEY_CHECKS=1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
