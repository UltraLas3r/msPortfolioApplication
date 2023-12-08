import { Component, Input } from '@angular/core';
import { Project } from "../_models/Project";
import { Tag } from "../_models/Tag";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-projectcard',
  templateUrl: './projectcard.component.html',
  styleUrls: ['./projectcard.component.css']
})

export class ProjectcardComponent {
  @Input() project = {} as Project; 
  bsModalref?: BsModalRef;

  constructor(private modalService: BsModalService){

    
  }

  OpenProjectModal(){
    this.bsModalref = this.modalService.show("");
  }
}
