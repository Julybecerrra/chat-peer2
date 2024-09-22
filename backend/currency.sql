CREATE DATABASE convert_db;

USE convert_db;

create table users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username text unique not null,
  password_user text not null,
  email text unique not null,
  created_at timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE conversions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT references users (id),
  from_convert VARCHAR(10) NOT NULL,
  to_convert VARCHAR(10) NOT NULL,
  amount numeric NOT NULL,
  result numeric NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);