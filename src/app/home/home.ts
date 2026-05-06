import { CommonModule } from '@angular/common';
import { Component, Input ,OnInit} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home  {
  villa: any;
 villas = [
   {
   id: 7,
  name: 'Luxury Villa in Beverly Hills',
  location: 'Beverly Hills, California',
  price: '$3,500,000',
  bhk: 5,
  area: 4500,
  image: '/new/Luxury Villa in Beverly Hills 5 Beds.jpg',
  description: 'A grand luxury estate in the heart of Beverly Hills, offering unmatched privacy, panoramic city views, and world-class amenities.',
  features: [
    'Infinity pool with skyline view',
    'Home theater with recliners',
    'Smart home automation',
    'Private wine cellar',
    'Five-car garage',
    'Designer Italian kitchen'
  ],
  link: '/property/1'
   }
 ]

constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.villa = this.villas.find(v => v.id === id);
  }



  
}


