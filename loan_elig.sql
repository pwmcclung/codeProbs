
SELECT DISTINCT(c.id) AS customer_id, 
    CASE 
      WHEN  c.age > 17 AND c.age < 66 AND (select COUNT(*) FROM loans WHERE customer_id = c.id AND loan_status = 'unpaid') = 0
          THEN 'loan can be given'
      ELSE 'loan cannot be given'
      END AS loan_eligibility
      
FROM customers AS c
LEFT JOIN loans as l
ON c.id = l.customer_id
WHERE c.id BETWEEN 1 AND  10
ORDER BY c.id DESC;