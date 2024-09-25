import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuOpen: boolean = false;

  constructor(private router: Router) { }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toursSection() {
    this.router.navigate(['']);
    setTimeout(() => {
      const element = document.getElementById('container-3');
      if (element) {
        console.log(element);
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);

  }

}
