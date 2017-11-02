<?php

class DbHandler {

    private $db;

    function __construct() {
        require_once 'NotORM.php';
        include_once 'dbconnection.php';
        $pdo = new PDO('mysql:dbname=' . $dbname . ';host=' . $dbhost, $dbuser, $dbpass);
        $this->db = new NotORM($pdo);
    }

    public function allBloodGroup() {
        return $this->db->tbl_blood_group();
    }

    public function allState() {
        return $this->db->tbl_state();
    }

    public function allDistrict($sid) {
        return $this->db->tbl_district()
                        ->where("state_id= ? ", $sid);
    }

    public function allGender() {
        return $this->db->tbl_gender();
    }

    public function registerDonor($data) {

        return $this->db->tbl_donor()
                        ->insert($data);
    }

    public function registerDonorHealth($data) {
        return $this->db->tbl_donor_health()
                        ->insert($data);
    }

    public function checkUsername($uname) {
        return $this->db->tbl_donor()
                        ->where("username = ?", $uname);
    }

    public function checkUsernameOrg($uname) {
        return $this->db->tbl_organization()
                        ->where("username = ?", $uname);
    }

    public function insertRequestLog($data) {
        return $this->db->tbl_request_log()
                        ->insert($data);
    }

    public function searchBlood($bgroup, $district, $state) {
        $data = $this->db->vw_donor()
                ->where("blood_group = ?", $bgroup)
                ->and("district = ?", $district)
                ->and("state = ? ", $state);
        return $data;
    }

    public function getDistrictName($district) {
        $data = $this->db->tbl_district()
                ->select("district_name")
                ->where("district_id = ?", $district);
        return $data;
    }

    public function getStateName($state) {
        $data = $this->db->tbl_state()
                ->select("name")
                ->where("state_id = ?", $state);
        return $data;
    }

    public function getBloodGroupName($bgroup) {
        $data = $this->db->tbl_blood_group()
                ->select("blood_group")
                ->where("bid = ?", $bgroup);
        return $data;
    }

    public function registerOrganization($data) {
        $val = $this->db->tbl_organization()
                ->insert($data);

        return $val;
    }

    public function allRequestLog() {
        return $this->db->tbl_request_log();
    }

    public function reqBlood($bid) {
        return $this->db->tbl_request_log()
                        ->where("blood_group = ? ", $bid);
    }

    public function reqBloodDistrict($bid, $did) {
        return $this->db->tbl_request_log()
                        ->where("blood_group = ? ", $bid)
                        ->and("district = ? ", $did);
    }

    public function getbloodBank($did, $state) {
        return $this->db->tbl_organization()
                        ->where("district = ? ", $did)
                        ->and("state = ? ", $state);
    }

    public function donorLogin($uname, $password) {
        return $this->db->vw_donordetails()
                        ->where("username = ?", $uname)
                        ->and("password = ?", $password);
    }

    public function getGenderName($gender) {
        return $this->db->tbl_gender()
                        ->where("gid = ? ", $gender);
    }

    public function updateDonor($data, $uname, $password) {
//        $uid = $this->db->tbl_donor()
//                ->select("did")
//                ->where("username = ? ", $uname)
//                ->and("password = ? ", $password);
////        print($uid);
//        return $this->db->tbl_donor()
//                        ->where("did = ?", $uid)
//                        ->update($data);

        return $this->db->tbl_donor()
                        ->where("username = ?", $uname)
                        ->and("password = ? ", $password)
                        ->update($data);
    }

    public function getContact($did) {
        return $this->db->tbl_donor()
                        ->select('name', 'mobile')
                        ->where("did = ? ", $did);
    }

    public function bankLogIn($uname, $password) {
        return $this->db->tbl_organization()
                        ->where("username = ? ", $uname)
                        ->and("password = ? ", $password);
    }

    public function updateBank($data, $uname, $password) {
        return $this->db->tbl_organization()
                        ->where("username = ?", $uname)
                        ->and("password = ? ", $password)
                        ->update($data);
    }

    public function updateLastDate($did, $data) {
        return $this->db->tbl_donor_health()
                        ->where("did = ?", $did)
                        ->update($data);
    }
    public function getContactBank($did){
        return $this->db->tbl_organization()
                ->select('mobile','org_name')
                ->where("org_id = ? ",$did);
    }

}
