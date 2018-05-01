/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database burgers_db.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN,
);


