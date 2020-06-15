angularjsApp.controller('PresentationLogicCtrl', ['$scope', function ($scope) {
  $scope.$watch('[user.address, user.telephone]',
    () => {
      $scope.canProceed = $scope.user.address !== "" && $scope.user.telephone !== "";
    }
  );
  $scope.user = {
    email: 'user@mail.com',
    address: '',
    telephone: '',
    birthday: ''
  };
  $scope.selected = "address";
  $scope.canProceed = false;
  $scope.submit = () => { }
}]);


angularjsApp.factory('presentationLogicData', function () {
  const data = {
    section: {
      layer: "I. Deklaratives Rendern mit Angular",
      group: "1.2. Darstellungsbedingungen",
      spec: "1.2.1. Darstellungslogik"
    },
    article: {
      title: "ngSwitch, ngIf, ngShow, ngHide, ngDisable, ngReadonly",
      codeSnippets: [{
        name: "controller.js",
        lang: "js",
        code:
`app.controller('PresentationLogicCtrl', ['$scope', function ($scope) {
  $scope.$watch('[user.address, user.telephone]',
    () => {
      $scope.canProceed = $scope.user.address !== "" && $scope.user.telephone !== "";
    }
  );
  $scope.user = {
    email: 'user@mail.com',
    address: '',
    telephone: '',
    birthday: ''
  };
  $scope.selected = "address";
  $scope.canProceed = false;
  $scope.submit = () => { }
}]);`
      },
      {
        name: "index.html",
        lang: "html",
        code:
`<form class="result-box" novalidate ng-submit="submit()" name="NgFormCtrl" ng-controller="PresentationLogicCtrl">
<h5>Your profile data:</h5>
<div class="form-group">
  <label for="userInfoEmail">Username or Email</label>
  <input type="email" ng-model="user.email" class="form-control" id="userInfoEmail" ng-readonly="true">
</div>
<div class="form-group" ng-show="user.address !== ''">
  <label for="userInfoAddr">Adress</label>
  <input type="text" ng-model="user.address" class="form-control" id="userInfoAddr" ng-readonly="true">
</div>
<div class="form-group" ng-if="user.telephone !== ''">
  <label for="userInfoTel">Telephone</label>
  <input type="text" ng-model="user.telephone" class="form-control" id="userInfoTel" ng-readonly="true">
</div>
<div class="form-group" ng-if="user.birthday !== ''">
  <label for="userInfoBrth">Birthday</label>
  <input type="text" ng-model="user.birthday" class="form-control" id="userInfoBrth" ng-readonly="true">
</div>
<h5>Add info about you:</h5>
<div>
  <div class="form-group">
    <label for="userInfo">Add information about you</label>
    <select class="form-control" name="select" id="userInfo" ng-model="selected">
      <option value="address">Address</option>
      <option value="telephone">Telephone</option>
      <option value="birthday">Birthday</option>
    </select>
  </div>

  <div class="form-group">
    <div ng-switch on="selected">
      <div ng-switch-when="address">
        <div class="form-group">
          <label for="userAddress">Address</label>
          <input type="text" name="addressInput" ng-model="user.address" class="form-control" id="userAddress"
            placeholder="Address">
          <p class="help-block" ng-bind="'Specify your address'"></p>
        </div>
      </div>

      <div ng-switch-when="telephone">
        <div class="form-group">
          <label for="userTelephone">Telephone</label>
          <input type="text" name="telephoneInput" ng-model="user.telephone" class="form-control" id="userTelephone"
            placeholder="Telephone">
          <p class="help-block" ng-bind="'Specify your telephone number'"></p>
        </div>
      </div>
      <div ng-switch-when="birthday">
        <div class="form-group">
          <label for="userBirthday">Birthday</label>
          <input type="text" name="birthdayInput" ng-model="user.birthday" class="form-control" id="userBirthday"
            placeholder="Birthday">
          <p class="help-block" ng-bind="'Specify your birthday'"></p>
        </div>
      </div>
      <div ng-switch-default></div>
    </div>
  </div>
</div>
<div class="form-group">
  <p class="help-block" ng-hide="user.address !== ''">You have to specify your address</p>
  <p class="help-block" ng-hide="user.telephone !== ''">You have to specify your telephone number</p>
  <input id="submitBtn" name="submitBtn" type="submit" class="btn btn-default" ng-disabled="!canProceed"
    value="Proceed">
</div>
</form>`
      }],
      templateUrl: 'angularjs/declarativeRendering/presentationConstraints/presentaionLogic/presentationlogic.html',
      reactLink: "react-AlternativefürngSwitch,ngIf,ngShow,ngHide,ngDisable,ngReadonly"
    }
  };
  return function () {
    return data;
  };
});