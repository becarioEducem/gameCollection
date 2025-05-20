<?php
    require_once __DIR__ . '/controllers/platformsController.php';

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Headers: Content-Type");

    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method){
        case 'GET':
            $platforms = getPlatforms();
            echo json_encode($platforms);
            break;

        default:
            http_response_code(405);
            echo json_encode(['error' => 'Not allowed method']);
            break;
    }
?>
