import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pent-houses',
  imports: [CommonModule, RouterModule],
  templateUrl: './pent-houses.html',
  styleUrl: './pent-houses.css'
})
export class PentHouses {
penthouses: any[] = [];
  favoritePenthouses: any[] = [];

  ngOnInit(): void {
    this.penthouses = [
      {
        id: 1,
        name: 'Skyline Retreat',
        location: 'Mumbai',
        price: '3.5 Cr',
        bhk: 4,
        area: 2800,
        image:'/new/Modern glass-wall high-rise overlooking city skyline (Mumbai).jpg'
      },
      {
        id: 2,
        name: 'Cloud Nine Penthouse',
        location: 'Delhi',
        price: '4.2 Cr',
        bhk: 5,
        area: 3100,
        image: '/new/Royal white marble interiors with private terrace (Delhi).jpg'
      },
      {
        id: 3,
        name: 'Ocean Crest Residence',
        location: 'Goa',
        price: '5 Cr',
        bhk: 4,
        area: 3000,
        image: '/new/Beachfront rooftop luxury suite with infinity pool (Goa).jpg'
      },
      {
        id: 4,
        name: 'Royal Heights Penthouse',
        location: 'Bangalore',
        price: '4.8 Cr',
        bhk: 5,
        area: 3200,
        image:'/new/Sleek contemporary design with panoramic city view (Bangalore.jpg'
      },
      {
        id: 5,
        name: 'Sunset Crown Suite',
        location: 'Hyderabad',
        price: '3.9 Cr',
        bhk: 4,
        area: 2900,
        image: '/new/Golden sunset view with plush interiors (Hyderabad).jpg'
      },
      {
        id: 6,
        name: 'Elite Horizon Penthouse',
        location: 'Pune',
        price: '4.5 Cr',
        bhk: 4,
        area: 3050,
        image: '/new/Elegant wooden finish and garden balcony (Pune).jpg'
      }
    ];
    this.loadFavorites();
  }

  loadFavorites() {
    const stored = localStorage.getItem('favoritePenthouses');
    this.favoritePenthouses = stored ? JSON.parse(stored) : [];
  }

  addToFavorites(penthouse: any) {
    if (!this.isFavorite(penthouse.id)) {
      this.favoritePenthouses.push(penthouse);
      localStorage.setItem('favoritePenthouses', JSON.stringify(this.favoritePenthouses));
    }
  }

  removeFromFavorites(id: number) {
    this.favoritePenthouses = this.favoritePenthouses.filter(p => p.id !== id);
    localStorage.setItem('favoritePenthouses', JSON.stringify(this.favoritePenthouses));
  }

  isFavorite(id: number): boolean {
    return this.favoritePenthouses.some(p => p.id === id);
  }
}
