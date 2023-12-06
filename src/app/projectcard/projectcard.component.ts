import { Component, Input } from '@angular/core';
import { Project } from "../_models/Project";
import { Tag } from "../_models/Tag";

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})

export class ProjectcardComponent {
  @Input() project = {} as Project; 
}
