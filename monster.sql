SELECT t.id AS id, t.heads AS heads,b.legs AS legs, t.arms AS arms, b.tails AS tails, 
   CASE 
       WHEN (t.heads > t.arms) THEN 'BEAST'
       WHEN (b.tails > b.legs) THEN 'BEAST' 
       WHEN (t.heads > t.arms) AND ( b.tails > b.legs) THEN 'BEAST'
       ELSE 'WEIRDO'
    END AS species
FROM top_half AS t
FULL JOIN bottom_half AS b
ON t.id = b.id
ORDER BY species;


SELECT j.job_title AS job_title(unique), SUM(j.salary) / SUM(j.people) AS average_salary(float, 2dp), Sum(j.people_id) as total_people(int), SUM(j.salary) AS total_salary(float, 2dp)
FROM people AS p 
LEFT JOIN job as j 
ON people.id = job.people_id;