import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {
  isNavLinkSelected= false;
  bgColorIsChanged = false;
  backgroundColor = '#C2CAE5';

  selectedNavBarItem: string | null = null;

  selectedItem(item: string): void {
    // Reset the previous item's background color
    if (this.selectedNavBarItem) {
      this.resetBackgroundColor();
    }

    // Set the new selected item and its background color
    this.selectedNavBarItem = item;
    this.backgroundColor = '#C2CAE5';
  }

  resetBackgroundColor(): void {
    // Reset the background color of the previous item
    this.backgroundColor = '#C2CAE5';
  }
}
