import { Component, Input } from '@angular/core';
import { Project } from "../_models/Project";
import { Tag } from "../_models/Tag";
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

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
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState:{
        project: this.project
      }
    };


    this.bsModalref = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
