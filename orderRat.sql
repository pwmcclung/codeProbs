SELECT product_id AS product_id, COUNT(product_id) AS count, 
 ROUND(COUNT(*)::DECIMAL /(SELECT COUNT(*)::DECIMAL FROM orders)*100,2 ) AS ratio
FROM orders
GROUP BY product_id 
ORDER BY product_id ASC;