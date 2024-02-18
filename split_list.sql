SELECT product_id, regexp_split_to_table(features, '') as feature
FROM products
ORDER BY product_id ASC;