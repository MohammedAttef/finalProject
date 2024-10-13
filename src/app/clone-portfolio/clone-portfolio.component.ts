// import { Component, Input } from '@angular/core';
import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplateFormComponent } from '../template-form/template-form.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clone-portfolio',
  standalone: true,
  imports: [RouterModule,TemplateFormComponent],
  templateUrl: './clone-portfolio.component.html',
  styleUrl: './clone-portfolio.component.css'
})
export class ClonePortfolioComponent{
  logoName: string = '';
  username: string = '';
  email: string = '';
  phone: string = '';
  resume: string = '';
  img: string = '';
  linkedin: string = '';
  facebook: string = '';
  twitter: string = '';
  info: string = '';
  // Work skills
  titleWorkSkill1: string = '';
  titleWorkSkill2: string = '';
  titleWorkSkill3: string = '';
  descriptionWorkSkill1: string = '';
  descriptionWorkSkill2: string = '';
  descriptionWorkSkill3: string = '';
  // Projects
  projectImg1: string = '';
  projectTitle1: string = '';
  projectTool1: string = '';
  projectImg2: string = '';
  projectTitle2: string = '';
  projectImg3: string = '';
  projectTitle3: string = '';
  constructor(private route: ActivatedRoute) {
    console.log(this.img);
    this.route.queryParams.subscribe(params => {
      this.logoName = params['logoName'] || 'Default logoName';
      this.username = params['username'] || 'Default Username';
      this.email = params['email'] || 'Default Email';
      this.phone = params['phone'] || 'Default Phone';
      this.resume = params['resume'] || '';
      this.info = params['info'] || '';
      this.img = params['img'] || '';
      this.linkedin = params['linkedin'] || '';
      this.facebook = params['facebook'] || '';
      this.twitter = params['twitter'] || '';
      // this.instagram = params['instagram'] || '';

      // Work skills
      this.titleWorkSkill1 = params['titleWorkSkill1'] || '';
      this.titleWorkSkill2 = params['titleWorkSkill2'] || '';
      this.titleWorkSkill3 = params['titleWorkSkill3'] || '';
      this.descriptionWorkSkill1 = params['descriptionWorkSkill1'] || '';
      this.descriptionWorkSkill2 = params['descriptionWorkSkill2'] || '';
      this.descriptionWorkSkill3 = params['descriptionWorkSkill3'] || '';

      // Projects
      this.projectImg1 = params['projectImg1'] || '';
      this.projectTitle1 = params['projectTitle1'] || '';
      this.projectImg2 = params['projectImg2'] || '';
      this.projectTitle2 = params['projectTitle2'] || '';
      this.projectImg3 = params['projectImg3'] || '';
      this.projectTitle3 = params['projectTitle3'] || '';
    });
  }
  }
