import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from "../_models/Project";
import { Tag } from "../_models/Tag";
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  project: Project = {
    id: 0,
    name: "Inventory Management App",
    summary: "",
    description:"A warehouse inventory management tool",
    projectLink: "",
    pictures: [],
    tags: [Tag.CSHARP, Tag.SQL, Tag.WINFORM ]
  }



  constructor(private titleService: Title){
    this.titleService.setTitle('Michael Schreiber - Portfolio');
   }

}
