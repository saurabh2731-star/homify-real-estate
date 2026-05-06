import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-studiodetails',
  imports: [CommonModule, RouterModule],
  templateUrl: './studiodetails.html',
  styleUrl: './studiodetails.css'
})
export class Studiodetails {
 studio: any;
  
  studios = [
    {
      id: 1,
      name: 'Urban Studio',
      location: 'Mumbai',
      price: '₹65 Lakh',
      bhk: 1,
      area: 600,
      image: '/new/Urban Studio (Mumbai).jpg',
      description: 'A modern urban studio located in the heart of Mumbai. Designed with a sleek and functional layout, perfect for young professionals.',
      features: ['Prime City Location', 'Modern Kitchen', 'Panoramic City View', '24x7 Security']
    },
    {
      id: 2,
      name: 'Compact Comfort',
      location: 'Pune',
      price: '₹55 Lakh',
      bhk: 1,
      area: 550,
      image: '/new/Compact Comfort (Pune).jpg',
      description: 'An intelligently designed compact studio in Pune, offering maximum comfort in minimal space.',
      features: ['Space-Saving Furniture', 'Balcony View', 'Close to IT Parks', 'Ample Parking']
    },
    {
      id: 3,
      name: 'Skyline Studio',
      location: 'Bangalore',
      price: '₹70 Lakh',
      bhk: 1,
      area: 650,
      image: '/new/Skyline Studio (Bangalore).jpg',
      description: 'Enjoy breathtaking city skyline views from this modern Bangalore studio.',
      features: ['High-Rise View', 'Rooftop Garden Access', 'Gym Facility', 'Smart Home Features']
    },
    {
      id: 4,
      name: 'Coastal Retreat',
      location: 'Goa',
      price: '₹80 Lakh',
      bhk: 1,
      area: 620,
      image: '/new/Coastal Retreat.jpg',
      description: 'A serene beachside studio in Goa for those who love coastal living.',
      features: ['Beachfront Location', 'Sea View Balcony', 'Fully Furnished', 'Swimming Pool Access']
    },
    {
      id: 5,
      name: 'City Edge Studio',
      location: 'Delhi',
      price: '₹60 Lakh',
      bhk: 1,
      area: 580,
      image: '/new/City Edge Studio.jpg',
      description: 'Located at the edge of the bustling city, this studio offers quick connectivity and a peaceful environment.',
      features: ['Metro Connectivity', 'Minimalist Design', '24x7 Security', 'Nearby Markets']
    },
    {
      id: 6,
      name: 'Luxury Loft',
      location: 'Hyderabad',
      price: '₹75 Lakh',
      bhk: 1,
      area: 700,
      image: '/new/Luxury Loft.jpg',
      description: 'A luxurious loft-style studio in Hyderabad with open spaces and modern aesthetics.',
      features: ['Loft-Style Layout', 'Designer Interiors', 'Smart Lighting', 'Private Terrace']
    }
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studio = this.studios.find(v => v.id === id);
  }
}
