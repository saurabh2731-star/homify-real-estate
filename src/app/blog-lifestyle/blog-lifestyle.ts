import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-blog-lifestyle',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-lifestyle.html',
  styleUrl: './blog-lifestyle.css'
})
export class BlogLifestyle {
   posts = [
    {
      id: 1,
      category: 'Blog',
      title: 'Top Tips for Buying Luxury Homes',
      image: '/new/Modern luxury villa exterior during golden hour..jpg',
      shortDescription: 'Discover the key strategies to secure your dream luxury home at the best price.'
    },
    {
      id: 2,
      category: 'Lifestyle',
      title: 'Creating a Modern Luxury Home Interior',
      image: '/new/Minimalist, elegant luxury living room..jpg',
      shortDescription: 'Transform your home with elegant, minimalist, and timeless design concepts.'
    },
    {
      id: 3,
      category: 'Blog',
      title: 'Luxury Real Estate Market Trends 2025',
      image: '/new/Contemporary penthouse with city view..jpg',
      shortDescription: 'Stay ahead in the market with the latest insights into luxury property trends.'
    },
    {
      id: 4,
      category: 'Lifestyle',
      title: 'Outdoor Living in Luxury Homes',
      image: '/new/Poolside outdoor luxury lounge..jpg',
      shortDescription: 'Create the perfect outdoor oasis with pools, cabanas, and gourmet kitchens.'
    },
    {
      id: 5,
      category: 'Blog',
      title: 'Smart Home Technology for Luxury Properties',
      image: '/new/Aerial view of a luxury neighborhood..jpg',
      shortDescription: 'Integrating cutting-edge smart home tech for comfort, security, and efficiency.'
    },
    {
      id: 6,
      category: 'Lifestyle',
      title: 'Sustainable Luxury Home Designs',
      image: '/new/Sleek modern kitchen with marble counter.jpg',
      shortDescription: 'Blend eco-friendly materials with luxury aesthetics for the future of living.'
    }
  ];
}
