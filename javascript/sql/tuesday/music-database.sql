
-- DROP TABLE music CASCADE;
-- DROP TABLE album CASCADE;

-- DROP TABLE artist CASCADE;


-- CREATE TABLE music(
--     id serial not null primary key,
--     artist varchar,
--     album varchar,
--     song varchar,
--     songWriter varchar
-- );


-- CREATE TABLE artist(
--     id serial not null primary key,
--     name varchar
-- );

-- CREATE TABLE album(
--     id serial not null primary key,
--     name varchar,
--     year integer,
--     artist_id integer REFERENCES artist (id)
-- );


-- CREATE TABLE track(
--     id serial not null primary key,
--     name varchar,
--     duration time,
--     album_id integer REFERENCES album (id)
-- );

-- INSERT INTO artist VALUES (
--   Default, 'Prince'
-- );

-- INSERT INTO artist VALUES (
--   Default, 'Incubus'
-- );

-- INSERT INTO artist VALUES (
--   Default, 'Anderson.Paak'
-- );


