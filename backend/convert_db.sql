-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-09-2024 a las 23:27:10
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `convert_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conversions`
--

CREATE TABLE `conversions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `from` varchar(10) NOT NULL,
  `to` varchar(10) NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `resultado` decimal(10,5) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `conversions`
--

INSERT INTO `conversions` (`id`, `user_id`, `from`, `to`, `amount`, `resultado`, `date`, `createdAt`, `updatedAt`) VALUES
(1, 4, 'USD', 'COP', 4, 16615.93522, '2024-09-22 05:13:37', '2024-09-22 05:13:37', '2024-09-22 05:13:37'),
(2, 1, 'USD', 'COP', 6, 24923.90283, '2024-09-22 05:13:48', '2024-09-22 05:13:48', '2024-09-22 05:13:48'),
(3, 4, 'USD', 'COP', 6, 24923.90283, '2024-09-22 05:35:19', '2024-09-22 05:35:19', '2024-09-22 05:35:19'),

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password_user` text NOT NULL,
  `email` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password_user`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'pepa', 'pepa12345', 'pepa123@gmail.com', '2024-09-20 21:26:46', '2024-09-20 21:42:12'),
(2, 'JohnDoe', 'securepassword', 'johndoe@example.com', '2024-09-20 21:44:06', '2024-09-20 21:44:06'),
(3, 'JohnDoepp', '$2a$15$dXHbTLsVCzT5vzy0qoAsXeFau1SIRBSvUPKRfQel15.dSlJMjOt5G', 'johndo@example.com', '2024-09-20 22:43:38', '2024-09-20 22:43:38'),
(4, 'JohnDovvepvvvp', '$2a$15$RKvP2k5dkRCS5Ajym7HPUe3tMBkqlu17J5BwfNpBPpQq2pMHyuQqK', 'johndov@example.com', '2024-09-20 22:47:53', '2024-09-20 22:47:53'),
(5, 'juna', '$2a$15$otIF3RjoTbZrOkXNNwYEXeNm6g0CIs2xXsULBqr9PwG6olb8/yJWC', 'juana@example.com', '2024-09-21 19:50:59', '2024-09-21 19:50:59');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `conversions`
--
ALTER TABLE `conversions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`) USING HASH,
  ADD UNIQUE KEY `email` (`email`) USING HASH;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `conversions`
--
ALTER TABLE `conversions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
