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