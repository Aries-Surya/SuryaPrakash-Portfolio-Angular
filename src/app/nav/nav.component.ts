import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  activeSection: string = 'hero';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sectionIds = [
      'hero',
      'about',
      'resume',
      'certification',
      'badges',
      'projects',
      'contact',
    ];
    for (let id of sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          this.activeSection = id;
          break;
        }
      }
    }
  }
}
