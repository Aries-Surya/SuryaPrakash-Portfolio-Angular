import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import Typed from 'typed.js'; // Import Typed.js

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'] // Fix styleUrl to styleUrls
})
export class HeroComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Code to run only in the browser
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
}
