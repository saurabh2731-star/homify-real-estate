import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-studios',
  imports: [CommonModule, RouterModule],
  templateUrl: './studios.html',
  styleUrl: './studios.css'
})
export class Studios {
 studios: any[] = [];
  favoriteStudios: any[] = [];

  ngOnInit(): void {
    this.studios = [
      {
        id: 1,
        name: 'Urban Studio',
        location: 'Mumbai',
        price: '65 Lakh',
        bhk: 1,
        area: 600,
        image: '/new/Urban Studio (Mumbai).jpg'
      },
      {
        id: 2,
        name: 'Compact Comfort',
        location: 'Pune',
        price: '55 Lakh',
        bhk: 1,
        area: 550,
        image: '/new/Compact Comfort (Pune).jpg'
      },
       {
        id: 3,
        name: 'Skyline Studio',
        location: 'Bangalore',
        price: '₹70 Lakh',
        bhk: 1,
        area: 650,
        image: '/new/Skyline Studio (Bangalore).jpg'
      },
      {
        id: 4,
        name: 'Coastal Retreat',
        location: 'Goa',
        price: '₹80 Lakh',
        bhk: 1,
        area: 620,
        image: '/new/Coastal Retreat.jpg'
      },
      {
        id: 5,
        name: 'City Edge Studio',
        location: 'Delhi',
        price: '₹60 Lakh',
        bhk: 1,
        area: 580,
        image: '/new/City Edge Studio.jpg'
      },
      {
        id: 6,
        name: 'Luxury Loft',
        location: 'Hyderabad',
        price: '₹75 Lakh',
        bhk: 1,
        area: 700,
        image: '/new/Luxury Loft.jpg'
      }
    ];
    
    this.loadFavorites();
  }

  loadFavorites() {
    const data = localStorage.getItem('favoriteStudios');
    this.favoriteStudios = data ? JSON.parse(data) : [];
  }

  addToFavorites(studio: any) {
    if (!this.isFavorite(studio.id)) {
      this.favoriteStudios.push(studio);
      localStorage.setItem('favoriteStudios', JSON.stringify(this.favoriteStudios));
    }
  }

  removeFromFavorites(id: number) {
    this.favoriteStudios = this.favoriteStudios.filter(s => s.id !== id);
    localStorage.setItem('favoriteStudios', JSON.stringify(this.favoriteStudios));
  }

  isFavorite(id: number): boolean {
    return this.favoriteStudios.some(s => s.id === id);
  }
}
