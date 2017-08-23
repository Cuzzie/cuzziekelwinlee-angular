(function () {
    var app = angular.module("cuzziekelwinlee", []);

    app.directive("appNavigation", function () {
        return {
            restrict: "E",
            templateUrl: "directives/app-navigation.html",
            controller: function () {
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

    app.directive("appHeader", function () {
        return {
            restrict: "E",
            templateUrl: "directives/app-header.html",
            controller: function () {
                this.header = {
                    imageSrc: "images/myphotocrop.jpg",
                    headerText: "Kelwin Lee",
                    headerTag: "Web Application Developer",
                };
            },
            controllerAs: "headerCtrl"
        };
    });

    app.directive("appAboutme", function () {
        return {
            restrict: "E",
            templateUrl: "directives/app-aboutme.html",
            controller: function () {
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

    app.directive("appWorkingExperience", function () {
        return {
            restrict: "E",
            templateUrl: "directives/app-workingexperience.html",
            controller: function () {
                this.workingExperience = {
                    title: "Working Experience",
                    experiences: [
                        {
                            company: "Quintiq Sdn Bhd",
                            role: "Java Developer",
                            duration: "February 2017 - Present",
                            companyLink: "http://www.quintiq.com",
                            descriptions: [
                                "I switched my role back to Java developer and joined the \ " +
                                "Java team, where I'm currently working on enhancements \ " +
                                "and new features on a system call the Tiger platform, \ " +
                                "which automates the whole process of setting up and \ " +
                                "deploying Quintiq projects on Quintiq's cloud system.",
                                "I use Java as the main programming language, Spring for \ " +
                                "dependency injection and aspect-oriented programming, Hibernate \ " +
                                "for object relational mapping, JSF as the UI framework (PrimeFaces \ " +
                                "and RichFaces), Apache Ant Build for automated build and \ " +
                                "deployment, Hessian to send binary data among components, and \ " +
                                "Maven for dependency management, with both Tomcat and Tom EE \ " +
                                "as web containers."
                            ]
                        },
                        {
                            company: "Quintiq Sdn Bhd",
                            role: "Application Consultant",
                            duration: "December 2015 - January 2017",
                            companyLink: "http://www.quintiq.com",
                            descriptions: [
                                "As a QS (Quintiq Specialist), my responsibilities included liaising with business consultants regarding project requirement, having solution sessions with lead QS to design the whole framework, coding modules per requirement, performing unit testing, releasing bug fixes during UAT phase etc.",
                                "The biggest project I worked on was for a customer call Kerneos, a cement manufacturing company. We provided them a demand planning system which can import Kerneos' historical sales data, preprocess and remove outliers, and perform statistical forecast on future sales.",
                                "I was also involved in LSG SkyChef project, a planning solutions system for in-flight catering and cabin handling services. I was mainly tasked with bug fixing and change requests.",
                                "I used Quill (Quintiq's proprietary language) to code modules for all the projects. The language is object-oriented based."
                            ]
                        },
                        {
                            company: "Theta SP Sdn Bhd",
                            role: "Junior Java Developer",
                            duration: "August 2013 - November 2015",
                            companyLink: "http://www.thetasp.com",
                            descriptions: [
                                "Over the 2 years+ in the company, I was put into various project teams to develop loan application systems for banks. These banks include: Hong Leong Bank, DBS Singapore Bank, DBS Indonesia Bank etc.",
                                "My responsibilities include: having discussion with business analysts to understand the requirements, translating functional requirement document to technical design document, adopting Scrum throughout the development phase, writing codes to create both front-end and back-end logic, performing unit testing and regression testing, and bug fixing during UAT phase.",
                                "I was involved in whole life cycle of the projects. This has given me the opportunity to not only improve my software development skills, but to also learn the business logic behind the banking solutions.",
                                "I used technologies such as Spring, Hibernate, Struts, JSP, ZK framework, Oracle SQL, JasperReport etc."
                            ]
                        },
                        {
                            company: "Theta SP Sdn Bhd",
                            role: "Intern Java Developer",
                            duration: "June 2012 - September 2012",
                            companyLink: "http://www.thetasp.com",
                            descriptions: [
                                "Along with another 2 interns and a mentor, we were tasked to create a fully functioning timesheets and expenses management application from scratch for the staff to use.",
                                "We had to gather requirements from each employee, come up with a draft of the application design, split the modules among the 3 of us and develop them. We had to perform unit testing as well to ensure quality.",
                                "We managed to finish developing the application before the end of my internship period, so we provided support and bug fixing until then. Until now, the staff of the company are still using the application to manage their timesheets and expenses."
                            ]
                        }
                    ]
                };
            },
            controllerAs: "workingExperienceCtrl"
        }
    });
})();
