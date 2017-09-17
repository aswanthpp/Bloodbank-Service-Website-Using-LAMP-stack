<?php

class DbHandler {

    private $db;

    function __construct() {
        require_once 'NotORM.php';
        include_once 'dbconnection.php';
        $pdo = new PDO('mysql:dbname=' . $dbname . ';host=' . $dbhost, $dbuser, $dbpass);
        $this->db = new NotORM($pdo);
    }
    public function lastupdated($cid, $uid) {
        return $this->db->tbl_duty_scheduler()
                        ->select('max(duty_scheduler_id) as max_id')
                        ->where("company_id = ? ", $cid)
                        ->and("user_id = ? ", $uid);
    }
}
