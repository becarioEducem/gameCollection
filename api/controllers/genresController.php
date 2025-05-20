<?php
    require_once __DIR__ . '/../config/db.php';
    require_once __DIR__ . '/../config/queries/genres.php';

    function getGenres() {
        global $pdo;
        $stmt = $pdo->query(QUERY_ALL_GENRES);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
   }
