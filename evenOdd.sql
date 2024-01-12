SELECT number as number, 
   CASE 
   WHEN number % 2 = 0 THEN 'Even' 
   ElSE 'Odd' 
   END AS is_even
FROM numbers;