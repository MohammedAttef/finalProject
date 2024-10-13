import { LandingPageComponent } from './landing-page/landing-page.component';
import { Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { MainComponent } from './finalproject/main/main.component';
import { AboutComponent } from './finalproject/about/about.component';
import { ProjectservComponent } from './finalproject/projectserv/projectserv.component';
import { TestimonialComponent } from './finalproject/testimonial/testimonial.component';
import { ContactComponent } from './finalproject/contact/contact.component';
import { WorkComponent } from './finalproject/work/work.component';
import { ClonePortfolioComponent } from './clone-portfolio/clone-portfolio.component';

export const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"home",component:MainComponent},
  {path:"about",component:AboutComponent},
  {path:"services",component:ProjectservComponent},
  {path:"portfolio",component:WorkComponent},
  {path:"testimonial",component:TestimonialComponent},
  {path:"contact",component:ContactComponent},
  {path:"tempForm",component:TemplateFormComponent},
  {path:"userTemplate",component:ClonePortfolioComponent},

];
