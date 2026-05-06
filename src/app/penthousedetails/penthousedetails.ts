import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-penthousedetails',
  imports: [CommonModule,RouterModule],
  templateUrl: './penthousedetails.html',
  styleUrl: './penthousedetails.css'
})
export class Penthousedetails {
 penthouse: any;

  penthouses = [
    {
      id: 1,
      name: 'Skyline Retreat',
      location: 'Mumbai',
      price: '3.5 Cr',
      bhk: 4,
      area: 2800,
      image: '/new/Modern glass-wall high-rise overlooking city skyline (Mumbai).jpg',
      description: 'A luxurious 4 BHK penthouse with panoramic skyline views of Mumbai and modern interiors.'
    },
    {
      id: 2,
      name: 'Cloud Nine Penthouse',
      location: 'Delhi',
      price: '4.2 Cr',
      bhk: 5,
      area: 3100,
      image: '/new/Royal white marble interiors with private terrace (Delhi).jpg',
      description: 'Experience luxury living above the clouds in this spacious 5 BHK penthouse in the heart of Delhi.'
    },
    {
      id: 3,
      name: 'Ocean Crest Residence',
      location: 'Goa',
      price: '₹5 Cr',
      bhk: 4,
      area: 3000,
      image: '/new/Beachfront rooftop luxury suite with infinity pool (Goa).jpg',
      description: 'Wake up to ocean views in this stunning beachside penthouse with premium finishes.'
    },
    {
      id: 4,
      name: 'Royal Heights Penthouse',
      location: 'Bangalore',
      price: '₹4.8 Cr',
      bhk: 5,
      area: 3200,
      image: '/new/Sleek contemporary design with panoramic city view (Bangalore.jpg',
      description: 'Luxury meets elegance in this modern 5 BHK penthouse with a rooftop terrace in Bangalore.'
    },
    {
      id: 5,
      name: 'Sunset Crown Suite',
      location: 'Hyderabad',
      price: '₹3.9 Cr',
      bhk: 4,
      area: 2900,
      image: '/new/Golden sunset view with plush interiors (Hyderabad).jpg',
      description: 'Enjoy breathtaking sunsets in this 4 BHK penthouse with state-of-the-art amenities.'
    },
    {
      id: 6,
      name: 'Elite Horizon Penthouse',
      location: 'Pune',
      price: '₹4.5 Cr',
      bhk: 4,
      area: 3050,
      image: '/new/Elegant wooden finish and garden balcony (Pune).jpg',
      description: 'An elite lifestyle awaits in this spacious 4 BHK penthouse with stunning city views.'
    }
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.penthouse = this.penthouses.find(v => v.id === id);
  }
}
