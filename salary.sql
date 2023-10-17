SELECT DISTINCT(j.job_title) AS job_title, 
     CAST(ROUND(SUM(j.salary) / COUNT(j.people_id), 2) AS FLOAT) AS average_salary,
     COUNT(j.people_id) as total_people, 
     CAST(ROUND(SUM(j.salary),2) AS FLOAT) AS total_salary  
FROM people AS p 
LEFT JOIN job as j 
ON p.id = j.people_id
GROUP BY j.job_title
ORDER BY average_salary DESC;