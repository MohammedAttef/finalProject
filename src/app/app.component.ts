
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './finalproject/header/header.component';
import { MainComponent } from './finalproject/main/main.component';
import { AboutComponent } from './finalproject/about/about.component';
import { ProjectservComponent } from './finalproject/projectserv/projectserv.component';
import { WorkComponent } from './finalproject/work/work.component';
import { TestimonialComponent } from './finalproject/testimonial/testimonial.component';
import { ContactComponent } from './finalproject/contact/contact.component';
import { FooterComponent } from './finalproject/footer/footer.component';
import { TemplateFormComponent } from "./template-form/template-form.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ClonePortfolioComponent } from "./clone-portfolio/clone-portfolio.component";
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, AboutComponent, ProjectservComponent, WorkComponent, TestimonialComponent, ContactComponent, FooterComponent, TemplateFormComponent, LandingPageComponent, ClonePortfolioComponent,WelcomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  }

  // handleNavMenu(): void {
  //   const navToggle = document.getElementById('nav-toggle');
  //   const navClose = document.getElementById('nav-close');
  //   const navMenu = document.getElementById('nav-menu');

  //   if (navToggle && navClose && navMenu) {
  //     navToggle.addEventListener('click', () => {
  //       navMenu.classList.add('show-menu');
  //     });

  //     navClose.addEventListener('click', () => {
  //       navMenu.classList.remove('show-menu');
  //     });
  //   }
  // }

  // handleBackgroundHeader(): void {
  //   window.addEventListener('scroll', () => {
  //     const header = document.getElementById('header');
  //     if (header) {
  //       window.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
  //     }
  //   });
  // }

  // handleDarkLightTheme(): void {
  //   const toggleThemeButton = document.getElementById('theme-button'); // Update this to match your HTML

  //   if (toggleThemeButton) {
  //     toggleThemeButton.addEventListener('click', () => {
  //       document.body.classList.toggle('dark-theme');

        // Store the user's theme preference in localStorage
      //   if (document.body.classList.contains('dark-theme')) {
      //     localStorage.setItem('theme', 'dark');
      //   } else {
      //     localStorage.setItem('theme', 'light');
      //   }
      // });

      // Check for the user's theme preference in localStorage on load
  //     const userTheme = localStorage.getItem('theme');
  //     if (userTheme === 'dark') {
  //       document.body.classList.add('dark-theme');
  //     }
  //   }
  // }

//   handleScrollUp(): void {
//     window.addEventListener('scroll', () => {
//       const scrollUp = document.getElementById('scroll-up');
//       if (scrollUp) {
//         window.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
//       }
//     });
//   }

//   handleServicesModal(): void {
//     const modals = document.querySelectorAll('.services__modal');
//     const modalButtons = document.querySelectorAll('.services__button');
//     const modalCloses = document.querySelectorAll('.services__modal-close');

//     const closeModal = () => {
//       for (const modal of Array.from(modals)) {
//         modal.classList.remove('active-modal');
//       }
//     }

//     const openModal = (index: number) => {
//       modals[index].classList.add('active-modal');
//     }

//     modalButtons.forEach((button, index) => {
//       button.addEventListener('click', () => {
//         openModal(index);
//       });
//     });

//     modalCloses.forEach((close) => {
//       close.addEventListener('click', () => {
//         closeModal();
//       });
//     });
//   }
// }
//
