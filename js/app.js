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

  app.directive("appAboutme", function(){
    return {
      restrict: "E",
      templateUrl: "directives/app-aboutme.html",
      controller: function(){
        this.aboutMe = {
          imageSrc: "images/myphotocrop2.jpg",
          aboutMeTitle: "Kelwin Lee",
          aboutMeSubtitle: "Web Application Developer",
          aboutMeText: "I am a software developer who's mainly working on \
          Java/J2EE web applications development. I graduated from the \
          University of Nottingham in 2013, and have been working in software \
          vendors ever since, which includes banking solutions company and \
          planning solutions company. As of now, I have 3 years and 8 months \
          of working experience.",
          aboutMeText2: "I consider myself a passionate programmer as I'm very \
          enthusiastic and self-motivated to learn new technologies and improve \
          my programming skills. I am also an open-minded individual who is \
          open to ideas and is willing to learn from criticism. I've also been \
          told that I'm easy to work with. While I'm a team worker, I am also \
          able to work independently in busy environments."
        };
      },
      controllerAs: "aboutMeCtrl"
    };
  });
})();
