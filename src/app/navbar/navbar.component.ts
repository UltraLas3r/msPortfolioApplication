import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedNavBarItem: string | null = null;

  selectedItem(navbarItemName: string){
    this.selectedNavBarItem = navbarItemName;
  }

}
