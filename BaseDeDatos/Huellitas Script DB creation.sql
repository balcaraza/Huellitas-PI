-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema huellitasdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema huellitasdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `huellitasdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `huellitasdb` ;

-- -----------------------------------------------------
-- Table `huellitasdb`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `huellitasdb`.`roles` (
  `id_rol` INT NOT NULL AUTO_INCREMENT,
  `tipo_rol` VARCHAR(12) NOT NULL,
  PRIMARY KEY (`id_rol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `huellitasdb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `huellitasdb`.`usuarios` (
  `no_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(12) NOT NULL,
  `correo_electronico` VARCHAR(100) NOT NULL,
  `password_usuario` VARCHAR(64) NOT NULL,
  `roles_id_rol` INT NOT NULL,
  PRIMARY KEY (`no_usuario`, `roles_id_rol`),
  UNIQUE INDEX `no_usuario_UNIQUE` (`no_usuario` ASC) VISIBLE,
  UNIQUE INDEX `correo_electronico_UNIQUE` (`correo_electronico` ASC) VISIBLE,
  INDEX `fk_usuarios_roles1_idx` (`roles_id_rol` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_roles1`
    FOREIGN KEY (`roles_id_rol`)
    REFERENCES `huellitasdb`.`roles` (`id_rol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `huellitasdb`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `huellitasdb`.`pedidos` (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `fechaPedido` DATE NOT NULL,
  `status` VARCHAR(15) NOT NULL,
  `usuarios_no_usuario` INT NOT NULL,
  PRIMARY KEY (`id_pedido`),
  UNIQUE INDEX `id_pedido_UNIQUE` (`id_pedido` ASC) VISIBLE,
  INDEX `fk_pedidos_usuarios1_idx` (`usuarios_no_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_usuarios1`
    FOREIGN KEY (`usuarios_no_usuario`)
    REFERENCES `huellitasdb`.`usuarios` (`no_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `huellitasdb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `huellitasdb`.`productos` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `imagen` VARCHAR(500) NOT NULL,
  `nombre_producto` VARCHAR(200) NOT NULL,
  `descripcion` VARCHAR(500) NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id_producto`),
  UNIQUE INDEX `id_producto_UNIQUE` (`id_producto` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `huellitasdb`.`detalle_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `huellitasdb`.`detalle_pedido` (
  `id_detalle_pedido` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `pedidos_id_pedido` INT NOT NULL,
  `productos_id_producto` INT NOT NULL,
  PRIMARY KEY (`id_detalle_pedido`, `pedidos_id_pedido`, `productos_id_producto`),
  UNIQUE INDEX `id_detalle_pedido_UNIQUE` (`id_detalle_pedido` ASC) VISIBLE,
  INDEX `fk_detalle_pedido_pedidos1_idx` (`pedidos_id_pedido` ASC) VISIBLE,
  INDEX `fk_detalle_pedido_productos1_idx` (`productos_id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_detalle_pedido_pedidos1`
    FOREIGN KEY (`pedidos_id_pedido`)
    REFERENCES `huellitasdb`.`pedidos` (`id_pedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalle_pedido_productos1`
    FOREIGN KEY (`productos_id_producto`)
    REFERENCES `huellitasdb`.`productos` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `huellitasdb`.`detalle_tarjeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `huellitasdb`.`detalle_tarjeta` (
  `id_pago` INT NOT NULL AUTO_INCREMENT,
  `nombre_tarjeta` VARCHAR(100) NOT NULL,
  `no_tarjeta` VARCHAR(16) NOT NULL,
  `mes` INT NOT NULL,
  `anio` INT NOT NULL,
  `codigo_seguridad` VARCHAR(3) NOT NULL,
  `usuarios_no_usuario` INT NOT NULL,
  PRIMARY KEY (`id_pago`, `usuarios_no_usuario`),
  UNIQUE INDEX `id_pago_UNIQUE` (`id_pago` ASC) VISIBLE,
  INDEX `fk_detalle_tarjeta_usuarios1_idx` (`usuarios_no_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_detalle_tarjeta_usuarios1`
    FOREIGN KEY (`usuarios_no_usuario`)
    REFERENCES `huellitasdb`.`usuarios` (`no_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `huellitasdb`.`detalle_envio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `huellitasdb`.`detalle_envio` (
  `id_detalle_compra` INT NOT NULL AUTO_INCREMENT,
  `nombre_completo` VARCHAR(200) NOT NULL,
  `calle` VARCHAR(200) NOT NULL,
  `municipio` VARCHAR(200) NOT NULL,
  `estado` ENUM('Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima', 'Durango', 'Estado de México', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas') NOT NULL,
  `codigo_postal` VARCHAR(10) NOT NULL,
  `num_int_ext` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(12) NOT NULL,
  `instrucciones` VARCHAR(500) NULL,
  `usuarios_no_usuario` INT NOT NULL,
  `usuarios_roles_id_rol` INT NOT NULL,
  PRIMARY KEY (`id_detalle_compra`, `usuarios_no_usuario`, `usuarios_roles_id_rol`),
  UNIQUE INDEX `id_detalle_compra_UNIQUE` (`id_detalle_compra` ASC) VISIBLE,
  INDEX `fk_detalle_envio_usuarios2_idx` (`usuarios_no_usuario` ASC, `usuarios_roles_id_rol` ASC) VISIBLE,
  CONSTRAINT `fk_detalle_envio_usuarios2`
    FOREIGN KEY (`usuarios_no_usuario` , `usuarios_roles_id_rol`)
    REFERENCES `huellitasdb`.`usuarios` (`no_usuario` , `roles_id_rol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
