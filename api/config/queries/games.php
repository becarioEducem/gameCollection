<?php
   // SELECTS
   define('QUERY_ALL_GAMES', 
      'SELECT game.id, game.title, platform.id platform_id, platform.name platform, 
               genre.id genre_id, genre.name genre, game.year, game.rating,
               game.cover_url, game.favorite
         FROM game 
            JOIN platform ON game.platform_id = platform.id
            JOIN genre ON game.genre_id = genre.id
         ORDER BY game.title ASC');

   //TODO: SELECT BY ID

   //TODO: INSERT

   //TODO: UPDATE

   //TODO: DELETE




