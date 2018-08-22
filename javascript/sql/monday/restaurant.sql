-- DROP TABLE restaurant CASCADE;
-- DROP TABLE review;
-- DROP TABLE reviewer;


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

-- CREATE TABLE reviewer (
--     id serial not null primary key,
--     name varchar,
--     email varchar,
--     karma integer CHECK(karma>=1 and karma<=7)
-- );

-- CREATE TABLE review (
--     id serial not null primary key,
--     stars integer CHECK(stars>=1 and stars<=5),
--     title varchar,
--     review varchar, 
--     reviewer_id integer REFERENCES reviewer (id),
--     restaurant_id integer REFERENCES restaurant (id)
-- );

-- INSERT INTO reviewer VALUES (
--     DEFAULT, 'Gob', 'gob@gob.com', 5
-- );

-- INSERT INTO reviewer VALUES (
--     DEFAULT, 'Russel', 'russel@russel.com', 2
-- );

-- INSERT INTO reviewer VALUES (
--     DEFAULT, 'Ted', 'ted@russel.com', 2
-- );

-- INSERT INTO reviewer VALUES (
--     DEFAULT, 'Kiki', 'kiki@kiki.com', 2
-- );

-- INSERT INTO reviewer VALUES (
--     DEFAULT, 'Gamgam', 'gamgam@kiki.com', 2
-- );

-- INSERT INTO review VALUES (
--     DEFAULT, 1, 'The worst taco', 'This was the worst taco ever. It tasted like a urinal cake wrapped in a dead marsupial. I would try it again probably.', 1, 2
-- );

-- INSERT INTO review VALUES (
--     DEFAULT, 5, 'Delicious', 'This burger was over-flowing with juice. I was covered in the juice.', 2, 7
-- );

-- INSERT INTO review VALUES (
--     DEFAULT, 4, 'Pretty ok', 'This place was pretty ok. I am not sure what I ate, but it tasted like meat.', 3, 6
-- );

-- INSERT INTO review VALUES (
--     DEFAULT, 2, 'Not the best', 'I am vegan and there was dead flesh everywhere. Not a lot of options. So I ate some bbq cardboard. Not bad.', 4, 8
-- );

-- INSERT INTO review VALUES (
--     DEFAULT, 1, 'Diarrhea', 'The jumbo jack gave me diarrhea. I was chained to the toilet for weeks. PRetty tasty though.', 5, 1
-- );

-- INSERT INTO review VALUES (
--     DEFAULT, 5, 'Superb', 'Delicious BBQ. I could have used more napkins, but ya know, what can one person do.', 1, 9
-- );





-- SELECT name FROM restaurant WHERE stars = 5;

-- SELECT favorite_dish FROM restaurant WHERE stars = 5;

-- SELECT id FROM restaurant where name = 'Villa Arcos';

-- SELECT name FROM restaurant WHERE category = 'BBQ';

-- SELECT name FROM restaurant WHERE takeout = True;

-- SELECT name FROM restaurant WHERE distance <= 2;

-- SELECT name FROM restaurant WHERE last_visited < '2018-08-20';

-- SELECT name FROM restaurant WHERE last_visited < '2018-08-20' and stars = 5;





-- SELECT name, distance FROM restaurant ORDER BY distance;

-- SELECT name, distance FROM restaurant ORDER BY distance LIMIT 2;

-- SELECT name, stars FROM restaurant ORDER BY stars DESC LIMIT 2;

-- SELECT name, stars FROM restaurant WHERE distance <2 ORDER BY stars LIMIT 2;

-- SELECT COUNT(*) FROM restaurant;

-- SELECT COUNT(name), category FROM restaurant GROUP BY category;

-- SELECT AVG(stars), category FROM restaurant GROUP BY category;

-- SELECT MAX(stars), category FROM restaurant GROUP BY category;


-- Restaurant DBV2

-- -- 1
-- SELECT restaurant.name, review.review FROM review
--     JOIN restaurant ON restaurant.id = review.restaurant_id
--     WHERE review.restaurant_id = 7;

-- -- 2
-- SELECT restaurant.name, review.review FROM review
--     JOIN restaurant ON restaurant.id = review.restaurant_id
--     WHERE restaurant.name = 'El Tiempo';

-- -- 3
-- SELECT reviewer.name, review.review FROM review
--     JOIN reviewer ON reviewer.id = review.reviewer_id
--     WHERE reviewer.name = 'Gob';

-- -- 4
-- SELECT restaurant.name, review.review FROM review
--     JOIN restaurant ON restaurant.id = review.restaurant_id;

-- -- 5
-- SELECT restaurant.name, AVG(review.stars) FROM review
--     JOIN restaurant ON restaurant.id = review.restaurant_id
--     GROUP BY restaurant.name;

-- -- 6
-- SELECT restaurant.name, count(restaurant.id) FROM review
--     JOIN restaurant ON restaurant.id = review.restaurant_id
--     GROUP BY restaurant.name;

-- -- 7
-- SELECT restaurant.name, review.review, reviewer.name FROM review
--     JOIN restaurant ON restaurant.id = review.restaurant_id
--     JOIN reviewer ON reviewer.id = review.reviewer_id
--     GROUP BY restaurant.name, review.review, reviewer.name ;

-- -- 8
-- SELECT reviewer.name, AVG(review.stars) FROM review
--     JOIN reviewer ON reviewer.id = review.reviewer_id
--     GROUP BY reviewer.name;

-- -- 9
-- SELECT reviewer.name, MIN(review.stars) FROM review
--     JOIN reviewer ON reviewer.id = review.reviewer_id
--     GROUP BY reviewer.name;

-- -- 10
-- SELECT restaurant.category, count(restaurant.category) from restaurant
--     GROUP BY restaurant.category;

-- -- 11
-- SELECT restaurant.name, review.stars FROM restaurant
--     JOIN review ON review.restaurant_id = restaurant.id
--     WHERE review.stars = 5;

-- -- 12
-- SELECT restaurant.category, AVG(review.stars) FROM review
--     JOIN restaurant ON restaurant.id = review.restaurant_id
--     GROUP BY restaurant.category;

