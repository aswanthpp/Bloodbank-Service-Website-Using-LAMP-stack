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
$app->get('/allGender', function() use($app) {
    $db = new DbHandler();
    $data = $db->allGender();
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});
$app->put('/registerDonor', function() use($app) {
    $db = new DbHandler();
    $data = (array) json_decode($app->request()->getBody());
    $status = $db->registerDonor($data);
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($status);
});
$app->put('/registerDonorHealth', function() use($app) {
    $db = new DbHandler();
    $data = (array) json_decode($app->request()->getBody());
    $status = $db->registerDonorHealth($data);
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($status);
});
$app->get('/checkUsername/:uname', function($uname) use($app) {
    $db = new DbHandler();
    $status = $db->checkUsername($uname);
    //print_r($status);
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($status);
});
$app->get('/checkUsernameOrg/:uname', function($uname) use($app) {
    $db = new DbHandler();
    $status = $db->checkUsernameOrg($uname);
    //print_r($status);
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($status);
});
$app->put('/insertRequestLog', function() use($app) {
    $db = new DbHandler();
    $data = (array) json_decode($app->request()->getBody());
    $status = $db->insertRequestLog($data);
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($status);
});
$app->get('/searchBlood/:bgroup/:district/:state', function($bgroup, $district, $state) use($app) {
    $db = new DbHandler();
    $data = $db->searchBlood($bgroup, $district, $state);
    $dname = $db->getDistrictName($district);
    $sname = $db->getStateName($state);
    $bloodGroup = $db->getBloodGroupName($bgroup);
    foreach ($data as $donor) {
        $donor['district'] = $dname[0]['district_name'];
        $donor['state'] = $sname[0]['name'];
        $donor['blood_group'] = $bloodGroup[0]['blood_group'];
    }
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});
$app->put('/registerOrganization', function() use($app) {
    $db = new DbHandler();
    $data = (array) json_decode($app->request()->getBody());
    $status = $db->registerOrganization($data);
//    if($status.length != 0){
//        $app->response()->header('Content-Type', 'application/json');
//   echo json_encode($status);
//    }
//    else{
//        $app->response()->header('Content-Type', 'application/json');
//        $stat=array(
//          $status="null"
//        );
//   echo json_encode($stat);
//    }
//    
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($status);
});
$app->get("/allRequestLog/:bid/:state/:disrict", function($bid, $state, $district) use($app) {
    $db = new DbHandler();
    if ($bid == 0 && $state == 0 && $district == 0) {
        $data = $db->allRequestLog();
    } else if ($bid != 0 && $state == 0 && $district == 0) {
        $data = $db->reqBlood($bid);
    } else if ($bid != 0 && $state != 0 && $district != 0) {
        $data = $db->reqBloodDistrict($bid, $district);
    }

    ///need to reduce 3 vaer into 2 var 
    foreach ($data as $donor) {
        $dname = $db->getDistrictName($donor['district']);
        $sname = $db->getStateName($donor['state']);
        $bloodGroup = $db->getBloodGroupName($donor['blood_group']);
        $donor['district'] = $dname[0]['district_name'];
        $donor['state'] = $sname[0]['name'];
        $donor['blood_group'] = $bloodGroup[0]['blood_group'];
    }
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});
$app->get("/searchBloodBank/:district/:state", function($district, $state) use($app) {
    $db = new DbHandler();
    $data = $db->getbloodBank($district, $state);
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});
$app->get("/donorLogin/:username/:password", function($uname, $password) use($app) {
    $db = new DbHandler();
    $data = $db->donorLogin($uname, $password);
    foreach ($data as $donor) {
        $dname = $db->getDistrictName($donor['district']);
        $sname = $db->getStateName($donor['state']);
        $bloodGroup = $db->getBloodGroupName($donor['blood_group']);
        $gender = $db->getGenderName($donor['gender']);
        $donor['district'] = $dname[0]['district_name'];
        $donor['state'] = $sname[0]['name'];
        $donor['blood_group'] = $bloodGroup[0]['blood_group'];
        $donor['gender'] = $gender[0]['gender_name'];
    }
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});
$app->put('/updateDonor/:username/:password', function($uname, $password) use($app) {
    $db = new DbHandler();
    $data = (array) json_decode($app->request()->getBody());
    //print_r($data);
    $status = $db->updateDonor($data, $uname, $password);
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($status);
});
$app->put("/sendAlertDonor/:did", function($did) use($app) {
    $db = new DbHandler();
    $data = (array) json_decode($app->request()->getBody());
    $contact = $db->getContact($did);
    ///Sending Notification Part
  //  print_r(json_decode(json_encode($data)));
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});
$app->get("/bankLogin/:username/:password", function($username, $password) use($app) {
    $db = new DbHandler();
    $data = $db->bankLogIn($username, $password);
    foreach ($data as $donor) {
       $dname = $db->getDistrictName($donor['district']);
        $sname = $db->getStateName($donor['state']); 
        $donor['district'] = $dname[0]['district_name'];
        $donor['state'] = $sname[0]['name'];
    }
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});
$app->put('/updateBank/:username/:password', function($uname, $password) use($app) {
    $db = new DbHandler();
    $data = (array) json_decode($app->request()->getBody());
    $status = $db->updateBank($data, $uname, $password);
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($status);
});
$app->get("/updateLastDonatedDate/:did/:date", function($did, $tdate) use($app) {
    $db = new DbHandler();
    $stat=array(
        "last_donated_date"=>$tdate
    );
    $data=$db->updateLastDate($did,$stat);
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});
$app->put("/sendAlertBank/:did", function($did) use($app) {
    $db = new DbHandler();
    $data = (array) json_decode($app->request()->getBody());
    $contact = $db->getContactBank($did);
    ///Sending Notification Part
   // print_r(json_decode(json_encode($data)));
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode($data);
});



$app->run();
