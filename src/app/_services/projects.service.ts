import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  
  projects: Project[] = [
    {id: 0, name: "Inventory Management Application", 
      pictures: ["../../assets/project images/c968-addPart.png","../../assets/project images/c968-addPartWithValidation.png","../../assets/c968-home", "../../assets/c968-home.png", "../../assets/c968-modifyProduct.png"], 
      projectLink: "//www.github.com", 
      summary: "A fullstack inventory management tool for organizing and sorting items and data. Uses C# for back-end design, Windows Forms for front-end design and MySql for a database service. ", 
      description: "C# application built in Visual Studio. Uses MySql for data storage and ", 
      tags: [Tag.CSHARP, Tag.DOTNET, Tag.SQL]},
    {id: 1, name: "Client Scheduling Application", 
      pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], 
      projectLink: "//www.github.com", 
      summary: "", 
      description: "This complex scheduling system features a login component with user validation, access logs, and a complex date and time validation system to ensure no overlapping appointments. Uses C# and WindowsForms, as well as a MySQL database. ", 
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    {id: 2, name: "Angular Website Application", 
      pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], 
      projectLink: "https://ms-swe-portfolio.azurewebsites.net/", 
      summary: "Fullstack web app developed using React and ASP.NET", 
      description: "A web application built using Angular and hosted using Microsoft Azure", 
      tags: [Tag.REACT ,Tag.CSHARP, Tag.ASPNET]},
    {id: 3, name: "Student Dashboard Mobile App", 
      pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], 
      projectLink: "//www.github.com", 
      summary: "Web API Project that was developed for a class project.", 
      description: "This is a Xamrin application for a student dashboard. The application allows a student to log in and manage their classes, tests, and semester schedule. The project uses C#, Xamarin/Maui and SQLite.", 
      tags: [Tag.CSHARP, Tag.ASPNET]},
    {id: 4, name: "Extra", 
      pictures: ["../../assets/img1.png","../../assets/img2.png","../../assets/img3.png"], 
      projectLink: "//www.github.com", 
      summary: "Mobile app developed in java that tracks the departure and arrival of trains.", 
      description: "Lorem  est laborum.", 
      tags: [Tag.JAVA]},
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
