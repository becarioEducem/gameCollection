<?php
    require_once __DIR__ . '/../config/db.php';
    require_once __DIR__ . '/../config/queries/platforms.php';

    function getPlatforms() {
        global $pdo;
        $stmt = $pdo->query(QUERY_ALL_PLATFORMS);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
   }
