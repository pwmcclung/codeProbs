SELECT DISTINCT(supplier.supplier_id),
  (SELECT COUNT(*) AS total_products FROM products as item where item.supplier_id = supplier.supplier_id) AS total_products
FROM products AS supplier
ORDER BY supplier_id DESC;