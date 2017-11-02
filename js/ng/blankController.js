var app = angular.module('blankApp', ["ngRoute"]);

var today = new Date();
var twoDigitMonth = (today.getMonth() + 1) + "";
if (twoDigitMonth.length == 1)
    twoDigitMonth = "0" + twoDigitMonth;
var twoDigitDate = today.getDate() + "";
if (twoDigitDate.length == 1)
    twoDigitDate = "0" + twoDigitDate;
var today_date = today.getFullYear() + "-" + twoDigitMonth + "-" + twoDigitDate;

app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "home"
            })
            .when('/:page', {// we can enable ngAnimate and implement the fix here, but it's a bit laggy
                templateUrl: function ($routeParams) {
                    return 'views/' + $routeParams.page + '.html';
                }
            })
            .when('/:page/:child*', {
                templateUrl: function ($routeParams) {
                    return 'views/' + $routeParams.page + '/' + $routeParams.child + '.html';
                }
            })
            .otherwise({
                redirectTo: '/home'
            });
});

isValidation = function (str) {
    var str = '#' + str;
    $(str + "  .redborder").removeClass("redborder");
    $(str + " .required").each(function () {
        if (($.trim($(this).val()) == "" || $.trim($(this).val()) == '?') && $(this).is(':visible'))
            $(this).addClass("redborder");
        if ($(this).hasClass("number")) {
            if ($.trim($(this).val()) == '') {
                $(this).addClass("redborder");
            }
        }
    });
    $(str + " .redborder").click(function () {
        $(this).removeClass("redborder");
    });
    $(str + " .redborder").blur(function () {
        $(str + " .redborder").removeClass("redborder");
        $(str + " .required").each(function () {
            if (($.trim($(this).val()) == "" || $.trim($(this).val()) == '?') && $(this).is(':visible'))
                $(this).addClass("redborder");
            if ($(this).hasClass("number")) {
                if ($.trim($(this).val()) == '')
                    $(this).addClass("redborder");
            }
        });
    });
    if ($(str + " .redborder").length > 0) {
        return false;
    }
    return true;
};

app.controller('GlobalController', function ($scope, $http, $window) {

});
app.controller('headerController', function ($scope, $http, $window) {
    $scope.gotoParam = "views/home";
});
app.controller('homeController', function ($scope, $http, $window) {
    $scope.ToSQLTime = function (date) {
        formattedDate = "";
        if (date != "" && date != '0000-00-00') {
            //alert("date"+date);
            var dateSplitted = date.split('/'); // date must be in DD-MM-YYYY format
            var formattedDate = dateSplitted[2] + '-' + dateSplitted[1] + '-' + dateSplitted[0];
        }

        return formattedDate;
    };
    $scope.CDate = today_date;
    // alert($scope.CDate);
    $scope.showTable = false;
    $http.get("api/allBloodGroup").success(function (data) {
        $scope.bloodGroup = data;
    });

    $http.get("api/allState").success(function (data) {
        $scope.state = data;
    });
    $scope.findDistrict = function (stateId) {
        $http.get("api/allDistrict/" + stateId).success(function (data) {
            $scope.district = data;
        });
    };
    $scope.searchBlood = function () {
        // $scope.searchResult=[{"did":"1","name":"Aswanth P P","city":"Thalassery","district":"KANNUR","state":"KERALA","mobile":"9562978698","email":"ppaswanth3@gmail.com","dob":"1996-12-03","blood_group":"O positive","height":"180","weight":"100","last_donated_date":"2017-08-25","gender":"1"}]
        if (isValidation("searchBlood")) {
            $scope.Details = {
                "patient_name": $scope.pname,
                "hospital_name": $scope.hname,
                "mobile": $scope.mobile,
                "blood_group": $scope.bloodGroupId,
                "district": $scope.districtId,
                "state": $scope.stateId
            };
            $http.put("api/insertRequestLog", $scope.Details).success(function (data) {
                $scope.Status = data;

            });
            $http.get("api/searchBlood/" + $scope.bloodGroupId + "/" + $scope.districtId + "/" + $scope.stateId).success(function (data) {
                $scope.searchResult = data;
                if (data == null || data.length == 0) {

                    $scope.showDonor = false;
                    //alert("No Donor Data To show");
                }
                else {
                    $scope.showDonor = true;
                }
            });
            $http.get("api/searchBloodBank/" + $scope.districtId + "/" + $scope.stateId).success(function (data) {
                $scope.bloodBankResult = data;
                if (data == null || data.length == 0) {
                    $scope.showBank = false;
                    //alert("No Blood Bank Data To Show");
                }
                else {
                    $scope.showBank = true;
                }
            });
        }

    };
    $scope.sendDonor = function (data) {
        $scope.Details = {
            "patient_name": $scope.pname,
            "hospital_name": $scope.hname,
            "mobile": $scope.mobile,
            "blood_group": $scope.bloodGroupId,
            "district": $scope.districtId,
            "state": $scope.stateId
        };
        $http.put("api/sendAlertDonor/" + data, $scope.Details).success(function (data) {
            alert("SMS sent");
        });

        $http.get("api/updateLastDonatedDate/" + data + "/" + $scope.CDate).success(function () {

        });

    };
    $scope.sendBank = function (data) {
        $scope.Details = {
            "patient_name": $scope.pname,
            "hospital_name": $scope.hname,
            "mobile": $scope.mobile,
            "blood_group": $scope.bloodGroupId,
            "district": $scope.districtId,
            "state": $scope.stateId
        };
        $http.put("api/sendAlertBank/" + data , $scope.Details).success(function () {
            alert("SMS sent to the Blood Bank");
        });
    };
    $scope.errmobile = function (mobile) {
        var phoneno = /^\d{10}$/;
        if (!mobile.match(phoneno)) {
            $scope.emobile = true;
        }
        else {
            $scope.emobile = false;
        }
    };

});
app.controller('registerDonorController', function ($scope, $http, $window) {
    $scope.ToSQLTime = function (date) {
        formattedDate = "";
        if (date != "" && date != '0000-00-00') {
            var dateSplitted = date.split('/'); // date must be in DD-MM-YYYY format
            var formattedDate = dateSplitted[2] + '-' + dateSplitted[1] + '-' + dateSplitted[0];
        }

        return formattedDate;
    };
    $scope.CDate = $scope.ToSQLTime(today_date);
    $scope.toDateTimestamp = function (date) {
        var dateTime = date.split(' ');
        var dateSplitted = dateTime[0].split('-'); // date must be in DD-MM-YYYY format
        var formattedDate = dateSplitted[1] + '/' + dateSplitted[2] + '/' + dateSplitted[0];
        formattedDate = formattedDate + ' ' + dateTime[1];
        return new Date(formattedDate).getTime();
    };
    $http.get("api/allBloodGroup").success(function (data) {
        $scope.bloodGroup = data;
    });

    $http.get("api/allState").success(function (data) {
        $scope.state = data;
    });
    $http.get("api/allGender").success(function (data) {
        $scope.Gender = data;
    });
    $scope.findDistrict = function (stateId) {
        $http.get("api/allDistrict/" + stateId).success(function (data) {
            $scope.district = data;
        });
    };
    // data validation 
    $scope.errusername = function () {
        if ($scope.username.length > 20) {
            $scope.eusername = true;
        }
        else {
            $http.get("api/checkUsername/" + $scope.username).success(function (data) {
                // alert(data);
                if (data.length != 0) {
                    $scope.eusername = true;
                }
                else {
                    $scope.eusername = false;
                }
            });
        }

    };
//    $scope.errpassword = function () {
//        if ($scope.password.length > 15) {
//            $scope.epassword = true;
//        }
//    };
//    $scope.errname = function () {
//        if ($scope.name.length > 10) {
//            $scope.name = true;
//        }
//    };
    $scope.errheight = function (height) {
        if (isNaN(height)) {
            $scope.eheight = true;
        }
        else {
            $scope.eheight = false;
        }
    };
    $scope.errweight = function (weight) {
        if (isNaN(weight)) {
            $scope.eweight = true;
        }
        else {
            $scope.eweight = false;
        }
    };
    $scope.errmobile = function (mobile) {
        var phoneno = /^\d{10}$/;
        if (!mobile.match(phoneno)) {
            $scope.emobile = true;
        }
        else {
            $scope.emobile = false;
        }
    };
    $scope.lerrmobile = function (mobile) {
        var phoneno = /^\d{10}$/;
        if (!mobile.match(phoneno)) {
            $scope.lemobile = true;
        }
        else {
            $scope.lemobile = false;
        }
    };
    $scope.erremail = function (email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            $scope.eemail = false;
        }
        else {
            $scope.eemail = true;
        }
    };
    $scope.lerremail = function (email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            $scope.leemail = false;
        }
        else {
            $scope.leemail = true;
        }
    };

//    $scope.errdob=function(){
//        if(isNaN($scope.dob)){
//            alert("invalid");
//            
//        }
//        else{
//            alert("valid");
//        }
//    };
//    
//    



    $scope.register = function () {
        if ($scope.eusername == true || $scope.emobile == true || $scope.eemail == true || $scope.eheight == true || $scope.eweight == true) {
            alert("Invalid ");
        }
        else if (isValidation("registerDonor")) {
            $scope.Details = {
                "username": $scope.username,
                "password": $scope.password,
                "name": $scope.name,
                "city": $scope.city,
                "district": $scope.districtId,
                "state": $scope.stateId,
                "mobile": $scope.mobile,
                "email": $scope.email
            };
            $http.put("api/registerDonor", $scope.Details).success(function (data) {
                $scope.Status = data;
                alert("Registration successfull");
            });

            $scope.DonorHealth = {
                "blood_group": $scope.bloodGroupId,
                "dob": $scope.dob,
                "height": $scope.height,
                "weight": $scope.weight,
                "last_donated_date": $scope.lastDate,
                //  "last_donated_date": $scope.ToSQLTime($scope.lastDate),
                "gender": $scope.genderId
            };
            $http.put("api/registerDonorHealth", $scope.DonorHealth).success(function (data) {
                $scope.Status = data;
            });

            //  alert("Donor Registered");
            $scope.logOut();
            $scope.signin();


        }

    };
    // $scope.registeringDonor = true;
//    $scope.donorRegisterForm = function () {
//        $scope.registerForm = true;
//    };

    $scope.inLogin = false;
    $scope.donorLogin = function () {

        $http.get("api/donorLogin/" + $scope.lusername + "/" + $scope.lpassword).success(function (data) {
            if (data.length == 0) {
                // $scope.registerForm = true;
                $scope.updateForm = false;
                $scope.inLogin = false;
                alert("Incorrect Credentials");
            }
            else {
                $scope.updateForm = true;
                $scope.registerForm = false;
                $scope.inLogin = true;

            }
            $scope.logInDetails = data;
        });
    };
    $scope.logOut = function () {
        $scope.lusername = null;
        $scope.lpassword = null;
        $scope.updateForm = false;
        $scope.inLogin = false;
    };
    $scope.updateDonor = function () {
        //  alert("");
        $scope.Donor = {
            "city": $scope.ucity,
            "district": $scope.udistrictId,
            "state": $scope.ustateId,
            "mobile": $scope.umobile,
            "email": $scope.uemail
        };

        $http.put("api/updateDonor/" + $scope.lusername + "/" + $scope.lpassword, $scope.Donor).success(function (data) {
            $scope.Status = data;
            if ($scope.Status == 1) {
                alert("Updation Completed");
                $scope.logOut();
                $scope.signin();
            }
            else {
                alert("No Updation ");
            }
        });


    };
    $scope.loginForm = true;
    $scope.registerForm = false;
    $scope.updateForm = false;
    $scope.signin = function () {
        $scope.loginForm = true;
        $scope.registerForm = false;
        $scope.updateForm = false;
        $scope.logOut();
    };
    $scope.signup = function () {
        $scope.loginForm = false;
        $scope.registerForm = true;
        $scope.updateForm = false;
        $scope.logOut();

    };

});
app.controller('organisationController', function ($scope, $http, $window) {
    $http.get("api/allState").success(function (data) {
        $scope.state = data;
    });
    $scope.findDistrict = function (stateId) {
        $http.get("api/allDistrict/" + stateId).success(function (data) {
            $scope.district = data;
        });
    };
    $scope.errusername = function () {
        if ($scope.username.length > 20) {
            $scope.eusername = true;
        }
        else {
            $http.get("api/checkUsernameOrg/" + $scope.username).success(function (data) {
                if (data.length != 0) {
                    $scope.eusername = true;
                }
                else {
                    $scope.eusername = false;
                }
            });
        }
    };
    $scope.errapos = function () {
        if (isNaN($scope.apos)) {
            $scope.eapos = true;
        }
        else {
            $scope.eapos = false;
        }

    };
    $scope.erranev = function () {
        if (isNaN($scope.anev)) {
            $scope.eanev = true;
        }
        else {
            $scope.eanev = false;
        }

    };
    $scope.errbpos = function () {
        if (isNaN($scope.bpos)) {
            $scope.ebpos = true;
        }
        else {
            $scope.ebpos = false;
        }

    };
    $scope.errbnev = function () {
        if (isNaN($scope.bnev)) {
            $scope.ebnev = true;
        }
        else {
            $scope.ebnev = false;
        }

    };
    $scope.erropos = function () {
        if (isNaN($scope.opos)) {
            $scope.eopos = true;
        }
        else {
            $scope.eopos = false;
        }

    };
    $scope.erronev = function () {
        if (isNaN($scope.onev)) {
            $scope.eonev = true;
        }
        else {
            $scope.eonev = false;
        }

    };
    $scope.errabpos = function () {
        if (isNaN($scope.abpos)) {
            $scope.eabpos = true;
        }
        else {
            $scope.eabpos = false;
        }

    };
    $scope.errabnev = function () {
        if (isNaN($scope.abnev)) {
            $scope.eabnev = true;
        }
        else {
            $scope.eabnev = false;
        }

    };
    $scope.errmobile = function (mobile) {
        var phoneno = /^\d{10}$/;
        if (!mobile.match(phoneno)) {
            $scope.emobile = true;
        }
        else {
            $scope.emobile = false;
        }
    };
    $scope.lerrmobile = function (mobile) {
        var phoneno = /^\d{10}$/;
        if (!mobile.match(phoneno)) {
            $scope.lemobile = true;
        }
        else {
            $scope.lemobile = false;
        }
    };
    $scope.erremail = function (email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            $scope.eemail = false;

        }
        else {
            $scope.eemail = true;
        }
    };
    $scope.lerremail = function (email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            $scope.leemail = false;

        }
        else {
            $scope.leemail = true;
        }
    };
    $scope.register = function () {
        if ($scope.eusername == true || $scope.emobile == true || $scope.eemail == true) {
            alert("Invalid");
        }
        else if (isValidation("registerOrganization")) {
            $scope.Details = {
                "username": $scope.username,
                "password": $scope.password,
                "org_name": $scope.orgname,
                "manager_name": $scope.mangername,
                "A_positive": $scope.apos,
                "A_negative": $scope.anev,
                "B_positive": $scope.bpos,
                "B_negative": $scope.bnev,
                "AB_positive": $scope.abpos,
                "AB_negative": $scope.abnev,
                "O_positive": $scope.opos,
                "O_negative": $scope.onev,
                "city": $scope.city,
                "district": $scope.districtId,
                "state": $scope.stateId,
                "mobile": $scope.mobile,
                "email": $scope.email

            };
            $http.put("api/registerOrganization", $scope.Details).success(function (data) {
                alert("Donor Registered");
                $scope.signin();
            });
        }
    };
    $scope.logOut = function () {
        $scope.lusername = null;
        $scope.lpassword = null;
        $scope.updateForm = false;
        $scope.inLogin = false;
    };
    $scope.signin = function () {
        $scope.loginForm = true;
        $scope.registerForm = false;
        $scope.logOut();
    };
    $scope.signin();
    $scope.signup = function () {
        $scope.loginForm = false;
        $scope.registerForm = true;
    };
    $scope.bankLogin = function () {
        $http.get("api/bankLogin/" + $scope.lusername + "/" + $scope.lpassword).success(function (data) {
            if (data.length == 0) {
                alert("Incorrect Credentials");
                $scope.updateForm = false;
            }
            else {
                $scope.updateForm = true;
                $scope.inLogin = true;
            }
            $scope.logInDetails = data;
        });

    };

    $scope.lerrapos = function () {
        if (isNaN($scope.lapos)) {
            $scope.leapos = true;
        }
        else {
            $scope.leapos = false;
        }

    };
    $scope.lerranev = function () {
        if (isNaN($scope.lanev)) {
            $scope.leanev = true;
        }
        else {
            $scope.leanev = false;
        }

    };
    $scope.lerrbpos = function () {
        if (isNaN($scope.lbpos)) {
            $scope.lebpos = true;
        }
        else {
            $scope.lebpos = false;
        }

    };
    $scope.lerrbnev = function () {
        if (isNaN($scope.lbnev)) {
            $scope.lebnev = true;
        }
        else {
            $scope.lebnev = false;
        }

    };
    $scope.lerropos = function () {
        if (isNaN($scope.lopos)) {
            $scope.leopos = true;
        }
        else {
            $scope.leopos = false;
        }

    };
    $scope.lerronev = function () {
        if (isNaN($scope.lonev)) {
            $scope.leonev = true;
        }
        else {
            $scope.leonev = false;
        }

    };
    $scope.lerrabpos = function () {
        if (isNaN($scope.labpos)) {
            $scope.leabpos = true;
        }
        else {
            $scope.leabpos = false;
        }

    };
    $scope.lerrabnev = function () {
        if (isNaN($scope.labnev)) {
            $scope.leabnev = true;
        }
        else {
            $scope.leabnev = false;
        }

    };
    $scope.updateBank = function () {
        $scope.Bank = {
            "mobile": $scope.umobile,
            "email": $scope.uemail,
            "A_positive": $scope.lapos,
            "B_positive": $scope.lbpos,
            "AB_positive": $scope.labpos,
            "O_positive": $scope.lopos,
            "A_negative": $scope.lanev,
            "B_negative": $scope.lbnev,
            "AB_negative": $scope.labnev,
            "O_negative": $scope.lonev
        };
        $http.put("api/updateBank/" + $scope.lusername + "/" + $scope.lpassword, $scope.Bank).success(function (data) {
            $scope.Status = data;
            if ($scope.Status == 1) {
                alert("Updation Completed");
                $scope.signin();
            }
            else {
                alert("No Updation ");
            }
        });
    };
});
app.controller('requestStatusController', function ($scope, $http, $window) {
    $http.get("api/allBloodGroup").success(function (data) {
        $scope.bloodGroup = data;
    });
    $http.get("api/allState").success(function (data) {
        $scope.state = data;
    });
    $scope.findDistrict = function (stateId) {
        $http.get("api/allDistrict/" + stateId).success(function (data) {
            $scope.district = data;
        });
    };

    $http.get("api/allRequestLog/0/0/0").success(function (data) {
        $scope.Result = data;
    });
    $scope.search = function () {
        if ($scope.bloodGroupId == undefined && $scope.stateId == undefined && $scope.districtId == undefined) {
            $http.get("api/allRequestLog/0/0/0").success(function (data) {
                $scope.Result = data;
            });
        }
        else if ($scope.bloodGroupId != undefined && $scope.stateId == undefined && $scope.districtId == undefined) {
            $http.get("api/allRequestLog/" + $scope.bloodGroupId + "/0/0").success(function (data) {
                $scope.Result = data;
            });
        }
        else if ($scope.bloodGroupId != undefined && $scope.stateId != undefined && $scope.districtId == undefined) {
//            $http.get("api/allRequestLog/" + $scope.bloodGroupId + "/" + $scope.state + "/0").success(function (data) {
//                $scope.Result = data;
//            });
            alert("Select District");
        }
        else {
            $http.get("api/allRequestLog/" + $scope.bloodGroupId + "/" + $scope.stateId + "/" + $scope.districtId).success(function (data) {
                $scope.Result = data;
            });
        }


        //need to reduce 3 vaer into 2 var 
    };
    $scope.sendBank = function () {
        alert("Needs Updation");
    };
});
app.controller('aboutController', function ($scope, $http, $window) {
   
});
