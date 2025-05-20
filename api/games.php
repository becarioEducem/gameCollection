<?php
    require_once __DIR__ . '/controllers/gamesController.php';

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type");

    $method = $_SERVER['REQUEST_METHOD'];
    //TODO: Implement get idGame from URL

    switch ($method){
        case 'GET':
            //TODO: Implement getGameById (if id is provided, otherwise get all games)
            $games = getGames();
            echo json_encode($games);
            break;

        case 'POST':
            //TODO: Implement createGame (data is sent as JSON in the request body)
            break;

        case 'PUT':
            //TODO: Implement updateGame (data is sent as JSON in the request body, but id is in the URL)
            //TODO: Error if id is not provided (400)
            break;

        case 'DELETE':
            //TODO: Implement deleteGame (id is required and is in the URL)
            //TODO: Error if id is not provided (400)
            break;

        default:
            http_response_code(405);
            echo json_encode(['error' => 'Not allowed method']);
            break;
    }
?>
