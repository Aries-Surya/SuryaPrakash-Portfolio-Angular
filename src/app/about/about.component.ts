import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  birthDate: Date = new Date('2003-10-11');

  get age(): number {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const monthDifference = today.getMonth() - this.birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < this.birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }
}
