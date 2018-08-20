-- DROP TABLE restaurant;

-- CREATE TABLE restaurant(
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar,
--     distance numeric(3,1),
--     stars numeric(3,1),
--     category varchar,
--     favorite_dish varchar,
--     takeout boolean,
--     last_visited date
-- );

-- INSERT INTO restaurant VALUES (
--   Default, 'Jack in the Box', 1.3, 3.4, 'Fast Food', 'jumbo jack', True, '2018/2/4'
-- );

-- INSERT INTO restaurant VALUES (
--   Default, 'El Tiempo', 1.6, 0, 'Mexican', 'fajitas', True, '2018/3/4'
-- );

-- INSERT INTO restaurant VALUES (
--   Default, 'Villa Arcos', 3, 5, 'Mexican', 'tacos', True, '2018/4/4'
-- );

-- INSERT INTO restaurant VALUES (
--   Default, 'Ninfas', 4, 4.3, 'Mexican', 'guacamole', True, '2018/5/4'
-- );

-- INSERT INTO restaurant VALUES (
--   Default, 'Local Foods Downtown', 5, 4.6, 'American', 'burger', False, '2018/6/4'
-- );

-- INSERT INTO restaurant VALUES (
--   Default, 'Huynh Restaurant', 5, 5, 'Vietnamese', 'chicken', True, '2018/7/4'
-- );

-- INSERT INTO restaurant VALUES (
--   Default, 'Champ Burger', 2.4, 4.7, 'Hamburger', 'ham', True, '2018/6/4'
-- );

-- INSERT INTO restaurant VALUES (
--   Default, 'Jackson St Barbeque', 5, 5, 'BBQ', 'brisket', True, '2018/6/4'
-- );

-- INSERT INTO restaurant VALUES (
--   Default, 'Buds Pitmaster', 5, 3.6, 'BBQ', 'tacos', True, '2018/6/4'
-- );


SELECT name FROM restaurant WHERE stars = 5;

SELECT favorite_dish FROM restaurant WHERE stars = 5;

SELECT id FROM restaurant where name = 'Villa Arcos';

SELECT name FROM restaurant WHERE category = 'BBQ';

SELECT name FROM restaurant WHERE takeout = True;

SELECT name FROM restaurant WHERE distance <= 2;

SELECT name FROM restaurant WHERE last_visited < '2018-08-20';

SELECT name FROM restaurant WHERE last_visited < '2018-08-20' and stars = 5;





SELECT name, distance FROM restaurant ORDER BY distance;

SELECT name, distance FROM restaurant ORDER BY distance LIMIT 2;

SELECT name, stars FROM restaurant ORDER BY stars DESC LIMIT 2;

SELECT name, stars FROM restaurant WHERE distance <2 ORDER BY stars LIMIT 2;

SELECT COUNT(*) FROM restaurant;

SELECT COUNT(name), category FROM restaurant GROUP BY category;

SELECT AVG(stars), category FROM restaurant GROUP BY category;

SELECT MAX(stars), category FROM restaurant GROUP BY category;