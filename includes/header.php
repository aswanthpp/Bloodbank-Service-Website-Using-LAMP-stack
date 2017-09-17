<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<div ng-controller="headerController"> 
    <div class="col col-lg-6 col-xs-6 padding-5  margin-bottom-5" style="padding: 8px; background-color: red;color: white;width: 100%;height:50px" >
        <button class="w3-button w3-hover-blue"  ng-click="gotoParam = 'views/register'" style="float: right;">Register</button>
        <button class="w3-button w3-hover-blue"  ng-click="gotoParam = 'views/home'" style="float: right"> Home</button>
    </div>
    <div class="col col-lg-12 no-padding no-margin" ng-include="gotoParam">
    </div> 
</div>