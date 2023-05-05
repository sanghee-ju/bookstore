-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bbooks
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bbooks
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bbooks` DEFAULT CHARACTER SET utf8 ;
USE `bbooks` ;

-- -----------------------------------------------------
-- Table `bbooks`.`t_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbooks`.`t_user` (
  `user_em` VARCHAR(45) NOT NULL,
  `user_id` VARCHAR(45) NULL,
  `user_pw` VARCHAR(45) NULL,
  `user_nm` VARCHAR(45) NULL,
  `user_grade` VARCHAR(45) NULL,
  PRIMARY KEY (`user_em`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbooks`.`t_book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbooks`.`t_book` (
  `book_id` VARCHAR(100) NOT NULL,
  `book_title` VARCHAR(255) NULL,
  `book_author` VARCHAR(45) NULL,
  `book_qty` INT NULL,
  `book_price` INT NULL,
  `book_desc` TEXT NULL,
  `book_img` VARCHAR(255) NULL,
  `regi_date` DATE NULL,
  `sale` INT NULL,
  PRIMARY KEY (`book_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbooks`.`t_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbooks`.`t_order` (
  `order_id` VARCHAR(100) NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(45) NOT NULL,
  `order_date` DATETIME NULL,
  `order_total` INT NULL,
  INDEX `fk_t_order_t_user_idx` (`user_id` ASC) VISIBLE,
  PRIMARY KEY (`order_id`),
  CONSTRAINT `fk_t_order_t_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `bbooks`.`t_user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbooks`.`t_card`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbooks`.`t_card` (
  `card_id` VARCHAR(20) NOT NULL,
  `user_id` VARCHAR(45) NOT NULL,
  `card_date` VARCHAR(45) NULL,
  `card_kind` VARCHAR(45) NULL,
  PRIMARY KEY (`card_id`),
  INDEX `fk_t_card_t_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_card_t_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bbooks`.`t_user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbooks`.`t_order_detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbooks`.`t_order_detail` (
  `t_book_book_id` VARCHAR(100) NOT NULL,
  `t_order_order_id` INT NOT NULL,
  `order_qty` INT NULL,
  PRIMARY KEY (`t_book_book_id`, `t_order_order_id`),
  INDEX `fk_t_book_has_t_order_t_order1_idx` (`t_order_order_id` ASC) VISIBLE,
  INDEX `fk_t_book_has_t_order_t_book1_idx` (`t_book_book_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_book_has_t_order_t_book1`
    FOREIGN KEY (`t_book_book_id`)
    REFERENCES `bbooks`.`t_book` (`book_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_t_book_has_t_order_t_order1`
    FOREIGN KEY (`t_order_order_id`)
    REFERENCES `bbooks`.`t_order` (`order_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbooks`.`t_address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbooks`.`t_address` (
  `address_id` VARCHAR(45) NOT NULL,
  `user_id` VARCHAR(45) NOT NULL,
  `adress_base` VARCHAR(255) NULL,
  `address_detail` VARCHAR(255) NULL,
  PRIMARY KEY (`address_id`, `user_id`),
  INDEX `fk_t_address_t_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_address_t_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bbooks`.`t_user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbooks`.`t_cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbooks`.`t_cart` (
  `cart_id` INT NOT NULL,
  `user_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`cart_id`),
  INDEX `fk_t_cart_t_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_cart_t_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bbooks`.`t_user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bbooks`.`t_cart_detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bbooks`.`t_cart_detail` (
  `cart_id` INT NOT NULL,
  `book_id` INT NOT NULL,
  `cart_qty` INT NULL,
  PRIMARY KEY (`cart_id`, `book_id`),
  INDEX `fk_t_cart_has_t_book_t_book1_idx` (`book_id` ASC) VISIBLE,
  INDEX `fk_t_cart_has_t_book_t_cart1_idx` (`cart_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_cart_has_t_book_t_cart1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `bbooks`.`t_cart` (`cart_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_t_cart_has_t_book_t_book1`
    FOREIGN KEY (`book_id`)
    REFERENCES `bbooks`.`t_book` (`book_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;