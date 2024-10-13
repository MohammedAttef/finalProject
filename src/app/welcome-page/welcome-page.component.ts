import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  PersonalData: any[] = [
    {
      image:"../../assets/img/mohammed.png",
      websiteLink:"",
      title:"Mohammed's Portfolio",
    },
    {
      image:"../../assets/img/WhatsApp Image 2024-10-12 at 3.17.51 PM (1).jpeg",
      websiteLink:"",
      title:"Ashrqat's Portfolio",
    },
    {
      image:"../../assets/img/toqa.jpeg",
      websiteLink:"",
      title:"Toqa's Portfolio",
    },

    {
      image:"../../assets/img/laila-final.jpeg",
      websiteLink:"",
      title:"Laila's Portfolio",
    }

  ];

}
