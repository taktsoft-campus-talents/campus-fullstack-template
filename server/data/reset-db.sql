DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email) VALUES
  ('Alice', 'alice@alice.com'),
  ('Bob', 'bob@bob.com'),
  ('Charlie', 'charlie@charlie.com');

  CREATE TABLE friends (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  friend_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (friend_id) REFERENCES users(id)
);

INSERT INTO friends (user_id, friend_id) VALUES
  (1, 2),
  (1, 3),
  (2, 1),
  (2, 3),
  (3, 1),
  (3, 2);

  SELECT 
  u.name AS user_name,
  STRING_AGG(f_u.name, ', ') AS friend_names
FROM 
  users u
JOIN 
  friends f ON u.id = f.user_id
JOIN 
  users f_u ON f.friend_id = f_u.id
GROUP BY 
  u.name;