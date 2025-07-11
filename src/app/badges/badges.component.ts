import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.css',
})
export class BadgesComponent implements OnInit, OnDestroy {
  badgeImages: string[] = [
    'assets/img/badges/networking-basics.png',
    'assets/img/badges/container-kubernetes-essentials-v2.png',
    'assets/img/badges/DevOps Essentials.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-engineering-operations-technicians.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-introduction-to-cloud-semester-2.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-data-center-technician.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-cloud-web-applicat.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-cloud-security-bui.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-cloud-data-pipelin.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-machine-learning-foundations.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-data-engineering.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-microservices-and-.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-cloud-security-foundations.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-machine-learning-for-natural-language-processing.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-cloud-developing.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-cloud-architecting.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-cloud-foundations.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-introduction-to-cloud-semester-1.png',
    'assets/img/badges/aws-academy-graduate-aws-academy-cloud-operations.png',
  ];
  currentBadgeIndex: number = 0;
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextBadge();
    }, 3000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextBadge() {
    this.currentBadgeIndex =
      (this.currentBadgeIndex + 1) % this.badgeImages.length;
  }

  prevBadge() {
    this.currentBadgeIndex =
      (this.currentBadgeIndex - 1 + this.badgeImages.length) %
      this.badgeImages.length;
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }
}
