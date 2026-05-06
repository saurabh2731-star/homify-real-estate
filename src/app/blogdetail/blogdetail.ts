import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogLifestyle } from '../blog-lifestyle/blog-lifestyle';

@Component({
  selector: 'app-blogdetail',
  imports: [CommonModule , RouterModule],
  templateUrl: './blogdetail.html',
  styleUrl: './blogdetail.css'
})
export class Blogdetail {
post: any;

  posts = [
    {
      id: 1,
      category: 'Blog',
      title: 'Top Tips for Buying Luxury Homes',
      image: '/new/Wide shot of a luxury mansion with a pool.jpg',
      content: `
        <p>Buying a luxury home requires careful planning and understanding of the market.</p>
        <p>Start by researching premium neighborhoods and identifying the amenities that matter most to you.</p>
        <p>Work with a trusted real estate agent who specializes in luxury properties to negotiate the best deal.</p>
        <p>Ensure you have financial pre-approval before making offers to avoid delays.</p>
      `
    },
    {
      id: 2,
      category: 'Lifestyle',
      title: 'Creating a Modern Luxury Home Interior',
      image: '/new/Wide angle shot of a spacious, minimal luxury living room..jpg',
      content: `
        <p>Modern luxury interiors focus on clean lines, open spaces, and high-end materials.</p>
        <p>Consider neutral tones, statement furniture, and curated artwork to elevate your space.</p>
        <p>Lighting plays a crucial role — opt for large windows, skylights, and designer light fixtures.</p>
        <p>Minimalism combined with comfort is the key to timeless elegance.</p>
      `
    },
    {
      id: 3,
      category: 'Blog',
      title: 'Luxury Real Estate Market Trends 2025',
      image: '/new/Contemporary architecture with panoramic perspective..jpg',
      content: `
        <p>The luxury real estate market in 2025 is witnessing a surge in demand for waterfront and smart homes.</p>
        <p>International buyers are returning, driving competition in prime locations.</p>
        <p>Sustainable building materials and wellness-focused amenities are becoming must-haves.</p>
        <p>Investors are increasingly looking for long-term value rather than short-term flips.</p>
      `
    },
    {
      id: 4,
      category: 'Lifestyle',
      title: 'Outdoor Living in Luxury Homes',
      image: '  /new/Elegant outdoor seating area with landscaping..jpg',
      content: `
        <p>Outdoor living spaces are now considered essential in luxury homes.</p>
        <p>From infinity pools to fully equipped outdoor kitchens, these areas are designed for entertainment and relaxation.</p>
        <p>Consider adding fire pits, pergolas, and lush landscaping to enhance the outdoor experience.</p>
        <p>Blend indoor and outdoor spaces for a seamless luxury feel.</p>
      `
    },
    {
      id: 5,
      category: 'Blog',
      title: 'Smart Home Technology for Luxury Properties',
      image: '/new/Aerial view of a luxury neighborhood..jpg',
      content: `
        <p>Smart home technology is redefining luxury living in 2025.</p>
        <p>Homeowners can now control lighting, security, temperature, and entertainment systems remotely.</p>
        <p>Voice assistants and AI-powered energy management systems are increasingly popular.</p>
        <p>Investing in smart technology not only adds convenience but also increases property value.</p>
      `
    },
    {
      id: 6,
      category: 'Lifestyle',
      title: 'Sustainable Luxury Home Designs',
      image: '/new/Bright, airy kitchen banner with modern finishes..jpg',
      content: `
        <p>Sustainability and luxury are no longer mutually exclusive.</p>
        <p>Designers are incorporating solar panels, rainwater harvesting, and eco-friendly insulation in high-end homes.</p>
        <p>Using recycled and locally sourced materials adds both character and environmental benefits.</p>
        <p>The future of luxury is green, without compromising comfort and style.</p>
      `
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.posts.find(p => p.id === id);
  }
}
