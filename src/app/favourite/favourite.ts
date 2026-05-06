import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favourite',
  imports: [CommonModule,RouterModule],
  templateUrl: './favourite.html',
  styleUrl: './favourite.css'
})
export class Favourite implements OnInit {
favoriteVillas: any[] = [];
  favoriteStudios: any[] = [];
  favoritePenthouses: any[] = [];

  ngOnInit(): void {
    this.loadFavorites();
    this.favoriteStudios = JSON.parse(localStorage.getItem('favoriteStudios') || '[]');
    this.favoritePenthouses = JSON.parse(localStorage.getItem('favoritePenthouses') || '[]');
  }

  loadFavorites() {
    const data = localStorage.getItem('favoriteVillas');
    this.favoriteVillas = data ? JSON.parse(data) : [];
  }

  removeFromFavorites(id: number) {
    this.favoriteVillas = this.favoriteVillas.filter(v => v.id !== id);
    localStorage.setItem('favoriteVillas', JSON.stringify(this.favoriteVillas));
  }

  removeStudio(id: number) {
    this.favoriteStudios = this.favoriteStudios.filter(s => s.id !== id);
    localStorage.setItem('favoriteStudios', JSON.stringify(this.favoriteStudios));
  }

  removePenthouse(id: number) {
    this.favoritePenthouses = this.favoritePenthouses.filter(p => p.id !== id);
    localStorage.setItem('favoritePenthouses', JSON.stringify(this.favoritePenthouses));
  }

}
