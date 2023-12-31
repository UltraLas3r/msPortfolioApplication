import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
   isWorkExperienceOpen = false;
   isEducationOpen = false;
   isCertificationsOpen = false;
   isSkillsOpen = false;


  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Michael Schreiber - Resume');
   }

   DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank')
    link.setAttribute('href', '../../assets/msresume.pdf')
    link.setAttribute('download', 'msresume.pdf');
    link.click();
    link.remove();

   }






}
