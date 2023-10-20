SELECT 
  s.transaction_date::DATE AS day,
  d.name AS department,
  COUNT(s.id) AS sale_count
  FROM department d
    JOIN sale s on d.id = s.department_id
  group by day, department
  order by day asc