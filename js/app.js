(function() {
  var app = angular.module("cuzziekelwinlee", []);

  app.directive("appNavigation", function(){
    return {
      restrict: "E",
      templateUrl: "directives/app-navigation.html",
      controller: function(){
        this.navigationMenus = [
          {
            navLink: "#about-me",
            navTitle: "About Me"
          },
          {
            navLink: "#working-experience",
            navTitle: "Working Experience"
          },
          {
            navLink: "#education",
            navTitle: "Education"
          },
          {
            navLink: "#skills",
            navTitle: "Skills"
          },
          {
            navLink: "#contact-me",
            navTitle: "Contact Me"
          }
        ];
      },
      controllerAs: "navCtrl"
    };
  });

  app.directive("appHeader", function(){
    return {
      restrict: "E",
      templateUrl: "directives/app-header.html",
      controller: function(){
        this.header = {
          imageSrc: "images/myphotocrop.jpg",
          headerText: "Kelwin Lee",
          headerTag: "Web Application Developer",
        };
      },
      controllerAs: "headerCtrl"
    };
  });
})();
