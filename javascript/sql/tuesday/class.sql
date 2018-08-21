
-- CREATE TABLE author(
--     id serial PRIMARY KEY,
--     name varchar
-- );

-- CREATE TABLE article(
--     id serial PRIMARY KEY,
--     title varchar,
--     author_id integer REFERENCES author (id)
-- );

-- INSERT INTO author VALUES (
--     DEFAULT, 'Matt'
-- );

-- INSERT INTO author VALUES (
--     DEFAULT, 'Bill'
-- );

-- INSERT INTO author VALUES (
--     DEFAULT, 'Camel'
-- );

-- INSERT INTO author VALUES (
--     DEFAULT, 'Chet'
-- );

-- INSERT INTO author VALUES (
--     DEFAULT, 'Jenny'
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Birds', 3
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Cats', 2
-- );

-- INSERT INTO article VALUES (
--     DEFAULT, 'Dead Cats', 5
-- );

SELECT * FROM article WHERE author_id = 5;

SELECT * FROM article, author WHERE article.author_id = author.id;

SELECT * FROM article, author WHERE article.author_id = author.id and name = 'Bill';

SELECT * FROM article LEFT OUTER JOIN author 