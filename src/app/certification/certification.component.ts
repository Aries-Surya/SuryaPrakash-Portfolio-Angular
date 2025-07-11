import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css',
})
export class CertificationComponent implements OnInit, OnDestroy {
  certificateImages: string[] = [
    'assets/img/certify/Using BigML Unsupervised Learning Infosys_page_1.png',
    'assets/img/certify/Unsupervised Learning Models Infosys_page_1.png',
    'assets/img/certify/Supervised Learning Models Infosys_page_1.png',
    'assets/img/certify/SAEC Meachine Learning Paper Presentaion Certificate_page_3.png',
    'assets/img/certify/Nvidia Deep learning Wrkshop certificate_page_1.png',
    'assets/img/certify/Networking_Basics_Badge20250104-27-z8ysa_page_1.png',
    'assets/img/certify/MSME IOT Certificate_page_1.png',
    'assets/img/certify/Introduction to Artificial Intelligence_page_1.png',
    'assets/img/certify/Google Cloud Fundamentals Core Infrastructure_page_1.png',
    'assets/img/certify/DevOps_Essentials_Badge20240906-7-hke9i3_page_1.png',
    'assets/img/certify/Design a dream destination using Microsoft_page_1.png',
    'assets/img/certify/Defsecone Networking WrkShop_page_1.png',
    'assets/img/certify/Data Visualisation_page_1.png',
    'assets/img/certify/Cybersecurity Analyst Job Simulation_page_1.png',
    'assets/img/certify/Create an Azure Storage account_page_1.png',
    'assets/img/certify/Coursera IntroductiontoCybersecurityToolsCyberAttacks_Badge_page_1.png',
    'assets/img/certify/Coursera Introduction to DevOps_page_1.png',
    'assets/img/certify/Coursera Introduction to Cybersecurity Tools & Cyber Tools_page_1.png',
    'assets/img/certify/Coursera Introduction to Containers, Docker, Kubernetes_page_1.png',
    'assets/img/certify/Coursera Google Foundations of Cybersecurity_page_1.png',
    'assets/img/certify/Coursera Google Cloud Fundamentals Core Infrastructure_page_1.png',
    'assets/img/certify/Coursera Google AI Essentials QRBN9X7S8VUC_page_1.png',
    'assets/img/certify/Coursera Cybersecurity for Everyone (Maryland, College Park)_page_1.png',
    'assets/img/certify/ContainerKubernetesEssentialsV2_Badge20241101-27-8cuire_page_1.png',
    'assets/img/certify/Blockchain & Hyperledger Fabric An Overview of Blockchain Technology Infosys_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Microservices_and_CI_CD_Pipeline_Builder_Badge20240526-8-s7g1th_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Machine_Learning_Foundations_Badge20240526-8-dl9as_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Machine_Learning_for_Natural_Language_Processing_Badge20240523-8-rj1gi1_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Introduction_to_Cloud_Semester_2_Badge20240607-8-3s7yw0_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Introduction_to_Cloud_Semester_1_Badge20240505-8-67ra8z_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Engineering_Operations_Technicians_Badge20240607-8-rpyutj_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Data_Engineering_Badge20240526-8-7gehva_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Data_Center_Technician_Badge20240530-9-xruy6l_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Cloud_Web_Application_Builder_Badge20240526-8-8izhnq_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Cloud_Security_Foundations_Badge20240523-7-ehzizi_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Cloud_Security_Builder_Badge20240526-8-k886m8_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Cloud_Operations_Badge20240505-8-8dvhyk_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20240321-29-7frefy_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Cloud_Developing_Badge20240512-8-d9zzkp_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Cloud_Data_Pipeline_Builder_Badge20240526-8-s9evyc_page_1.png',
    'assets/img/certify/AWS_Academy_Graduate___AWS_Academy_Cloud_Architecting_Badge20240428-8-2cjygz_page_1.png',
    'assets/img/certify/AWS Certificates_page_16.png',
    'assets/img/certify/AWS Certificates_page_15.png',
    'assets/img/certify/AWS Certificates_page_14.png',
    'assets/img/certify/AWS Certificates_page_13.png',
    'assets/img/certify/AWS Certificates_page_12.png',
    'assets/img/certify/AWS Certificates_page_11.png',
    'assets/img/certify/AWS Certificates_page_10.png',
    'assets/img/certify/AWS Certificates_page_9.png',
    'assets/img/certify/AWS Certificates_page_8.png',
    'assets/img/certify/AWS Certificates_page_7.png',
    'assets/img/certify/AWS Certificates_page_6.png',
    'assets/img/certify/AWS Certificates_page_5.png',
    'assets/img/certify/AWS Certificates_page_4.png',
    'assets/img/certify/AWS Certificates_page_3.png',
    'assets/img/certify/AWS Certificates_page_2.png',
    'assets/img/certify/AWS Certificates_page_1.png',
    'assets/img/certify/ANPR Certificates_AIDCCSP-2024_page_1.png',
  ];
  currentIndex: number = 0;
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000); // Change image every 3 seconds
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.certificateImages.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.certificateImages.length) %
      this.certificateImages.length;
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }
}
