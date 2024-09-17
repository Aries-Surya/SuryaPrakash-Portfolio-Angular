import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js'; // Import Typed.js

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      const typedStrings = typedElement.getAttribute('data-typed-items');
      if (typedStrings) {
        const stringsArray = typedStrings.split(','); // Convert data-typed-items string to an array
        
        const options = {
          strings: stringsArray,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          loop: true
        };
        
        new Typed('.typed', options); // Initialize Typed.js
      }
    }
  }
}
