<?php
require_once 'includes/DbHandler.php';
date_default_timezone_set("Asia/Kolkata");
require 'Slim/Slim.php';
if (!isset($_SESSION)) {
    session_start();
}
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->get('/allBloodGroup', function() use($app) {
   
    $db = new DbHandler();
    $data = $db->allBloodGroup();
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});
$app->get('/allState', function() use($app) {
    $db = new DbHandler();
    $data = $db->allState();
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});
$app->get('/allDistrict/:sid', function($sid) use($app) {
    $db = new DbHandler();
    $data = $db->allDistrict($sid);
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});
$app->run();
