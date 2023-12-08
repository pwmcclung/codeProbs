SELECT name AS name, price AS price, ROUND((price::NUMERIC / (weight /1000)::NUMERIC), 2)::FLOAT AS price_per_kg,weight::FLOAT AS weight
FROM products
ORDER BY price_per_kg ASC, name  ASC;
