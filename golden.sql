
%%sql
postgresql:///games

-- Select all information for the top ten best-selling games
-- Order the results from best-selling game down to tenth best-selling
SELECT * 
FROM game_sales
ORDER BY games_sold DESC
LIMIT 10;


%%sql 

-- Join games_sales and reviews
-- Select a count of the number of games where both critic_score and user_score are null
SELECT COUNT(gs.game)
FROM game_sales AS gs
LEFT JOIN reviews AS rv
ON gs.game = rv.game
WHERE critic_score IS NULL
AND user_score IS NULL;


%%sql


SELECT 
    gs.year,
    ROUND(AVG(rv.critic_score), 2) AS avg_critic_score

FROM game_sales AS gs
INNER JOIN reviews as rv
ON gs.game = rv.game
GROUP BY gs.year

ORDER BY avg_critic_score DESC
LIMIT 10;


%%sql 

-- Paste your query from the previous task; update it to add a count of games released in each year called num_games
SELECT g.year, COUNT(g.game) AS num_games, ROUND(AVG(r.critic_score),2) AS avg_critic_score
FROM game_sales g
INNER JOIN reviews r
ON g.game = r.game
GROUP BY g.year
HAVING COUNT(g.game) > 4
ORDER BY avg_critic_score DESC
LIMIT 10;


%%sql 

-- Select the year and avg_critic_score for those years that dropped off the critics' favorites list
-- Order the results from highest to lowest avg_critic_score
SELECT year, avg_critic_score
FROM top_critic_years
EXCEPT
SELECT year, avg_critic_score
FROM top_critic_years_more_than_four_games
ORDER BY avg_critic_score DESC;


%%sql 

SELECT g.year, COUNT(g.game) AS num_games, ROUND(AVG(r.user_score),2) AS avg_user_score
FROM game_sales g
INNER JOIN reviews r
ON g.game = r.game
GROUP BY g.year
HAVING COUNT(g.game) > 4
ORDER BY avg_user_score DESC
LIMIT 10;


%%sql 

SELECT year
FROM top_user_years_more_than_four_games
INTERSECT
SELECT year
FROM top_critic_years_more_than_four_games;


%%sql 

-- Select year and sum of games_sold, aliased as total_games_sold; order results by total_games_sold descending
-- Filter game_sales based on whether each year is in the list returned in the previous task
SELECT g.year, SUM(g.games_sold) AS total_games_sold
FROM game_sales g
WHERE g.year IN (SELECT year
FROM top_user_years_more_than_four_games
INTERSECT
SELECT year
FROM top_critic_years_more_than_four_games)
GROUP BY g.year
ORDER BY total_games_sold DESC;