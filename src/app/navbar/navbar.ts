import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
ngOnInit(): void {
    // @ts-ignore
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  
}
