import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-villas',
  imports: [RouterModule,CommonModule ],
  templateUrl: './villas.html',
  styleUrl: './villas.css'
})
export class Villas implements OnInit {

 villas: any[] = [];
  favoriteVillas: any[] = [];

  ngOnInit(): void {
    // Initialize villa data inside ngOnInit
    this.villas = [
      {
        id: 1,
        name: 'Oceanfront Villa',
        location: 'Goa',
        price: '2.5 Cr',
        bhk: 4,
        area: 3200,
        image: '/new/OceanFront Villa.jpg'
      },
      {
        id: 2,
        name: 'Modern Luxury Villa',
        location: 'Bangalore',
        price: '3 Cr',
        bhk: 5,
        area: 4000,
        image: '/new/Morden Villa.jpg'
      },
      {
        id: 3,
        name: 'Hilltop Mansion',
        location: 'Lonavala',
        price: '2.2 Cr',
        bhk: 4,
        area: 3500,
        image: "/new/Hilltop mansion.jpg"
      },
      {
        id: 4,
        name: 'Palm Grove Retreat',
        location: 'Pune',
        price: '1.8 Cr',
        bhk: 3,
        area: 2800,
        image: '/new/Palm Grove retreat.jpg'
      },
      {
        id: 5,
        name: 'Sunset View Villa',
        location: 'Kerala',
        price: '2.7 Cr',
        bhk: 4,
        area: 3000,
        image: '/new/Sunset View Villa.webp'
      },
      {
        id: 6,
        name: 'Green Escape Villa',
        location: 'Chandigarh',
        price: '2 Cr',
        bhk: 4,
        area: 3100,
        image: '/new/Alleppey 🌸🌼.jpg'
      },
      {
      id: 7,
      name: 'Luxury Villa in Beverly Hills',
      image: '/new/Luxury Villa in Beverly Hills 5 Beds.jpg',
      location: 'Beverly Hills',
      price: '$3,500,000',
      link: '/property/1'
    }   
   ];

    this.loadFavorites();
  }

  loadFavorites() {
    const stored = localStorage.getItem('favoriteVillas');
    this.favoriteVillas = stored ? JSON.parse(stored) : [];
  }

  addToFavorites(villa: any) {
    if (!this.isFavorite(villa.id)) {
      this.favoriteVillas.push(villa);
      localStorage.setItem('favoriteVillas', JSON.stringify(this.favoriteVillas));
    }
  }

  removeFromFavorites(id: number) {
    this.favoriteVillas = this.favoriteVillas.filter(v => v.id !== id);
    localStorage.setItem('favoriteVillas', JSON.stringify(this.favoriteVillas));
  }

  isFavorite(id: number): boolean {
    return this.favoriteVillas.some(v => v.id === id);
  }
}