SELECT id, name, (perceived_skill_level - actual_skill_level) AS skill_overestimation,
CASE 
   WHEN (perceived_skill_level - actual_skill_level ) > 7 THEN 'Extreme case of Dunning-Kruger effect detected!'
   WHEN (perceived_skill_level - actual_skill_level) > 5 THEN 'Serious case of overconfidence'
   WHEN (perceived_skill_level - actual_skill_level) > 2 THEN 'Moderate case of overconfidence'
 ELSE 'Mild case of overconfidence' 
  END AS overconfidence_category
FROM users
WHERE perceived_skill_level > actual_skill_level
ORDER BY skill_overestimation DESC, id DESC;