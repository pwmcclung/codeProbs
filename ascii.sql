SELECT id, ASCII(SUBSTRING(name,1,1)) as name, birthday,ASCII(SUBSTRING(race,1,1)) as race
FROM demographics;