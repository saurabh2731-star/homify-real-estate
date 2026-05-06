import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [RouterModule,CommonModule],
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.css']
})
export class AboutUs {
    stats = [
    { label: 'Happy Clients', value: 1000 },
    { label: 'Properties Sold', value: 500 },
    { label: 'Listed Rentals', value: 200 },
    { label: 'Cities Covered', value: 50 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.animateStats();
  }

  animateStats(): void {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target')!;
        const count = +counter.innerHTML;
        const speed = 200;
        const increment = target / speed;

        if (count < target) {
          counter.innerHTML = Math.ceil(count + increment).toString();
          setTimeout(updateCount, 20);
        } else {
          counter.innerHTML = target.toString();
        }
      };

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) updateCount();
        });
      }, { threshold: 0.5 });

      observer.observe(counter);
    });
  }

}