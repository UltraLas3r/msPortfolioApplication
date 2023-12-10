import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from "../_models/Project";
import { Tag } from "../_models/Tag";
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
   projects = {} as Project[];
   isCollapsed: boolean = true;
    //LANGUAGES
   typescript: boolean = false;
   python: boolean = false;
   csharp: boolean = false;
   javascript: boolean = false;
   java: boolean = false;
   ruby: boolean = false;
    //FRAMEWORKS
   angular: boolean = false;
   serenity: boolean = false;
   cucumber: boolean = false;
   react: boolean = false;
   nodejs: boolean = false;
   aspnet: boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Michael Schreiber - Portfolio');
   }
   
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags : Tag[] = [];

    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT)
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP)
    }
    if(this.python){
      filterTags.push(Tag.PYTHON)
    }
    if(this.ruby){
      filterTags.push(Tag.RUBY)
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT)
    }
    if(this.java){
      filterTags.push(Tag.JAVA)
    }

    if(this.angular){
      filterTags.push(Tag.ANGULAR)
    }
    if(this.react){
      filterTags.push(Tag.REACT)
    }
    if(this.aspnet){
      filterTags.push(Tag.ASPNET)
    }
    if(this.nodejs){
      filterTags.push(Tag.NODEJS)
    }
    if(this.serenity){
      filterTags.push(Tag.SERENITY)
    }
    if(this.cucumber){
      filterTags.push(Tag.CUCUMBER)
    }


    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }



}
