import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-villa-detail',
  imports: [CommonModule,RouterModule],
  templateUrl: './villa-detail.html',
  styleUrl: './villa-detail.css'
})
export class VillaDetail implements OnInit {


  villa: any;

 villas = [
  {
    id: 1,
    name: 'Oceanfront Villa',
    location: 'Goa',
    price: '2.5 Cr',
    bhk: 4,
    area: 3200,
    image: '/new/OceanFront Villa.jpg',
    description: 'Wake up to the sound of waves in this luxury oceanfront villa. With floor-to-ceiling windows, infinity pool, and direct beach access, this property is the ultimate coastal retreat.',
    features: [
      'Private infinity pool',
      'Beachfront deck',
      'Fully furnished interiors',
      '24/7 security',
      'Smart home automation',
      'Covered parking for 3 cars'
    ]
  },
  {
    id: 2,
    name: 'Modern Luxury Villa',
    location: 'Bangalore',
    price: '3 Cr',
    bhk: 5,
    area: 4000,
    image: '/new/Morden Villa.jpg',
    description: 'A contemporary masterpiece in the heart of Bangalore, featuring open-plan living, landscaped gardens, and a state-of-the-art home theatre.',
    features: [
      'Home theatre with Dolby Atmos',
      'Glass façade design',
      'Automated lighting & blinds',
      'Landscaped private garden',
      'Servant quarters',
      'Indoor gym & sauna'
    ]
  },
  {
    id: 3,
    name: 'Hilltop Mansion',
    location: 'Lonavala',
    price: '2.2 Cr',
    bhk: 4,
    area: 3500,
    image: '/new/Hilltop mansion.jpg',
    description: 'Perched atop lush green hills, this mansion offers panoramic views, luxury finishes, and a serene escape from the city.',
    features: [
      'Mountain-view infinity pool',
      'Private terrace lounge',
      'Indoor fireplace',
      'Wine cellar',
      'Meditation & yoga deck',
      'Jacuzzi in master bath'
    ]
  },
  {
    id: 4,
    name: 'Palm Grove Retreat',
    location: 'Pune',
    price: '1.8 Cr',
    bhk: 3,
    area: 2800,
    image: '/new/Palm Grove retreat.jpg',
    description: 'Surrounded by palm trees, this tropical-inspired villa blends luxury and nature with open-air dining and eco-friendly features.',
    features: [
      'Eco-friendly solar panels',
      'Open-air dining area',
      'Private plunge pool',
      'Organic vegetable garden',
      'Rainwater harvesting system',
      'Natural stone interiors'
    ]
  },
  {
    id: 5,
    name: 'Sunset View Villa',
    location: 'Kerala',
    price: '2.7 Cr',
    bhk: 4,
    area: 3000,
    image: '/new/Sunset View Villa.webp',
    description: 'Enjoy spectacular sunsets every evening from your private balcony, with interiors inspired by Kerala’s traditional architecture.',
    features: [
      'Sunset-view balcony',
      'Traditional Kerala woodwork',
      'Private boathouse access',
      'Infinity-edge pool',
      'Spa & massage room',
      'Private library'
    ]
  },
  {
    id: 6,
    name: 'Green Escape Villa',
    location: 'Chandigarh',
    price: '2 Cr',
    bhk: 4,
    area: 3100,
    image: '/new/Alleppey 🌸🌼.jpg',
    description: 'A green sanctuary in Chandigarh, surrounded by lush lawns, landscaped gardens, and eco-conscious luxury.',
    features: [
      'Rooftop garden terrace',
      'Private greenhouse',
      'Waterfall feature in garden',
      'Solar power backup',
      'Outdoor BBQ area',
      'Modern minimalist interiors'
    ]
  },
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
];


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.villa = this.villas.find(v => v.id === id);
  }
}
