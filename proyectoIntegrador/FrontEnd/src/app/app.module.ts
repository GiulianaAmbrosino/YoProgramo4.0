import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MainComponent } from './components/main/main.component';
import { NombrePerfilComponent } from './components/nombre-perfil/nombre-perfil.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ProyectsSectionComponent } from './components/proyects-section/proyects-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    LogoAPComponent,
    SocialComponent,
    HeaderComponent,
    BannerComponent,
    PerfilComponent,
    MainComponent,
    NombrePerfilComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    SkillsSectionComponent,
    ProyectsSectionComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
