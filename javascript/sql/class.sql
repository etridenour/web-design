
-- DROP TABLE student;

-- CREATE TABLE student(
--     name varchar,
--     website varchar,
--     points integer,
--     gender char(1)
-- );

-- ALTER TABLE student
-- location varchar;

-- INSERT INTO student VALUES (
--   'Billy', 'billy@billy.com', 1, 'F'
-- );

-- INSERT INTO student (name, points) VALUES (
--   'Paul', 2
-- );

-- CREATE TABLE student2(
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar,
--     website varchar,
--     points integer,
--     gender char(1)
-- )

-- INSERT INTO student2 VALUES(
--     Default, 'Jenny', 'j@j.com', 4, 'F'
-- )

-- INSERT INTO student2 VALUES(
--     Default, 'Matt', 'm@j.com', 4, 'M'
-- );

-- INSERT INTO student2 VALUES(
--     Default, 'Sam', 'm@j.com', 4, 'M'
-- );

-- INSERT INTO student2 VALUES(
--     Default, 'Melissa', 'm@j.com', 4, 'M'
-- );


UPDATE student2 SET name = 'Matt Fisher' WHERE id = 1;