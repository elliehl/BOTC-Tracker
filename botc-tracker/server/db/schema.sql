DROP DATABASE IF EXISTS botc_db;
CREATE DATABASE botc_db;

USE botc_db;

CREATE TABLE types (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type_id INT,
    FOREIGN KEY (type_id)
    REFERENCES types(id)
    ON DELETE SET NULL
);


CREATE TABLE games (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    date DATE,
    game_won BOOLEAN,
    is_evil BOOLEAN,
    comments TEXT,
    starting_role_id INT,
    FOREIGN KEY (starting_role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    final_role_id INT,
    FOREIGN KEY (final_role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
);