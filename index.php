<!DOCTYPE html>
<html lang="en-us" data-ng-app="blankApp">
    <head>
        <meta charset="utf-8">
        <title>Blank</title>
    </head>
    <body data-ng-controller="GlobalController">
        <header id="header" data-ng-include="'includes/header.php'"></header>
        <!--<div id="dashboard" data-ng-include="'views/dashboard.php'"></div>-->
        <!--<div id="content"  data-ng-view="" autoscroll="true" class="view-animate" style="padding: 8px;background-color: #eee;"></div>-->
        <script src="js/jquery-2.0.2.min.js"></script> 
        <script src="js/angular/angular.js"></script>
        <script src="js/angular/angular-route.js"></script>
        <script src="js/ng/blankController.js"></script>
    </body>
</html>