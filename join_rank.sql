SELECT people.id, people.name, COUNT(sales.id) AS sale_count, RANK() OVER(
       ORDER BY COUNT(sales.id)) AS sale_rank
FROM people
JOIN sales ON people.id = people_id 
GROUP BY people.id;