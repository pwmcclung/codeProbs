SELECT film_id, title, special_features
FROM film
WHERE '{Trailers , Deleted Scenes}' <@ special_features
ORDER BY title ASC, film_id;