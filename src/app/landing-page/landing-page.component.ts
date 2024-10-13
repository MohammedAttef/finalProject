import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../finalproject/header/header.component";
import { MainComponent } from "../finalproject/main/main.component";
import { AboutComponent } from "../finalproject/about/about.component";
import { ProjectservComponent } from "../finalproject/projectserv/projectserv.component";
import { WorkComponent } from "../finalproject/work/work.component";
import { TestimonialComponent } from "../finalproject/testimonial/testimonial.component";
import { ContactComponent } from "../finalproject/contact/contact.component";
import { FooterComponent } from "../finalproject/footer/footer.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, MainComponent, AboutComponent, ProjectservComponent, WorkComponent, TestimonialComponent, ContactComponent, FooterComponent, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
