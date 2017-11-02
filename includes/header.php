<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'>
<div ng-controller="headerController"> 
    <div class="col col-lg-6 col-xs-6 padding-5  margin-bottom-5" style=" padding: 8px; background-color: #0000FF;color: white;width: 100%;height:50px" >
        <img src="./img/logo.png">
        <button class="w3-button w3-hover-red"   ng-click="gotoParam = 'views/about'" style="float: right;" >About</button> 
        <button class="w3-button w3-hover-red"  ng-click="gotoParam = 'views/status'" style="float: right;" >History</button>
        <button class="w3-button w3-hover-red"  ng-click="gotoParam = 'views/organization'" style="float: right;" >Blood Bank</button>
        <button class="w3-button w3-hover-red"  ng-click="gotoParam = 'views/register'" style="float: right;" >Donor</button>
        <button class="w3-button w3-hover-red"  ng-click="gotoParam = 'views/home'" style="float: right"> Home</button>
    </div>
    <div class="col col-lg-12 no-padding no-margin" ng-include="gotoParam">
    </div> 

</div>