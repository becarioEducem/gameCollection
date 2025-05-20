<?php

    //TODO: CHANGE DB CREDENTIALS IF REQUIRED
    $host   = 'localhost';         
    $port   = '3316';
    $dbname = 'gameLibrary';
    $user   = 'root';            
    $pass   = '';       

    try{
        $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4",$user,$pass);
        $pdo->setAttribute(PDO::ATTR_PERSISTENT, true);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'DB connection failed']);
        exit;
    }
