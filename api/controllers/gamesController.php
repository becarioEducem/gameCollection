<?php
    require_once __DIR__ . '/../config/db.php';
    require_once __DIR__ . '/../config/queries/games.php';

    function getGames() {
        global $pdo;
        $stmt = $pdo->query(QUERY_ALL_GAMES);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
   }

    // TODO: Implement getGameById 
    function getGameById($id) {

    }

    // TODO: Implement createGame
    function createGame($data) {

    }

    // TODO: Implement updateGame
    function updateGame($id, $data) {

    }

    // TODO: Implement deleteGame  
    function deleteGame($id) {

    }
