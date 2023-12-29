import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  
  projects: Project[] = [
    {id: 0, name: "Inventory Management Application", 
      pictures: ["../../assets/project images/c968-addPart.png","../../assets/project images/c968-addPartWithValidation.png","../../assets/project images/c968-home.png", "../../assets/project images/c968-modifyproduct.png"], 
      projectLink: "//www.github.com", 
      summary: "A fullstack inventory management tool for organizing and sorting items and data. Uses C# for back-end design, Windows Forms for front-end design and MySql for a database service. ", 
      description: "C# application built in Visual Studio. Uses MySql for data storage and ", 
      tags: [Tag.CSHARP, Tag.DOTNET, Tag.SQL]},
    {id: 1, name: "Client Scheduling Application", 
      pictures: ["../../assets/project images/c969_addNewAppointment.png","../../assets/project images/c969_appointmentHomeScreen.png","../../assets/project images/c969_GenerateReports.png", "../../assets/project images/c969_loginSplash.png"], 
      projectLink: "//www.github.com", 
      summary: "", 
      description: "This complex scheduling system features a login component with user validation, access logs, and a complex date and time validation system to ensure no overlapping appointments. Uses C# and WindowsForms, as well as a MySQL database. ", 
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    {id: 2, name: "Angular Website Application", 
      pictures: ["../../assets/coolcatpic.jpg"], 
      projectLink: "https://ms-swe-portfolio.azurewebsites.net/", 
      summary: "A web application developed using Angular and Microsoft Azure ", 
      description: "This very website was designed and developed in Angular and hosted using Microsoft Azure.", 
      tags: [Tag.REACT ,Tag.CSHARP, Tag.ASPNET]},
    {id: 3, name: "Student Dashboard Mobile App", 
      pictures: ["../../assets/project images/c971-addCourse.png","../../assets/project images/c971-assessmentAdd.png","../../assets/project images/c971-courseDetail.png", "../../assets/project images/c971-addCourse.png", "../../assets/project images/c971-home.png", "../../assets/project images/c971-termDash.png", "../../assets/project images/c971-termDetail.png"], 
      projectLink: "//www.github.com", 
      summary: "Student schedule and term informaiton dashboard", 
      description: "The project uses C#, Xamarin/Maui and SQLite. This is an application for Android. The application allows a student to log in and manage their classes, tests, and semester schedule. ", 
      tags: [Tag.CSHARP, Tag.SQL]},
    {id: 4, name: "Joke Repository Web API (in Progress)", 
      pictures: ["../../assets/img1.png"], 
      projectLink: "//www.github.com", 
      summary: "A fullstack web application that stores jokes and allows CRUD operations.", 
      description: "This web app was built using C#, ASP.NET and a MySQL database.", 
      tags: [Tag.CSHARP, Tag.ASPNET]},
    //{id: 5, name: "Regression Test Suite", pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], projectLink: "//www.github.com", summary: "regression testing suite", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA, Tag.SERENITY, Tag.CUCUMBER]}
  ];

  constructor() {
     
   }

   GetProjects(){
    return this.projects;
   }

   GetProjectById(id: number) : Project {
    //will return the project that matches the id supplied by the parameter
    let project = this.projects.find(project => project.id === id);

    if (project === undefined)
    {
      throw new TypeError("There is no project with the id: " + id);
    }

    return project;
   }

   GetProjectsByFilter(filterTags: Tag[]){
      let filteredProjects: Project[] = [];
  
      this.projects.forEach(function (project){
        let foundAll = true;
      
        filterTags.forEach(function(filterTag){
          if (project.tags.includes(filterTag) == false){
            foundAll = false;
          }
        });

          if (foundAll) {
            filteredProjects.push(project);
          }
        });

        return filteredProjects;
   }
}
