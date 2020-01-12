import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './structure/header/header.component';
import { FooterComponent } from './structure/footer/footer.component';
import { ContentComponent } from './structure/content/content.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { MeComponent } from './elements/me/me.component';
import { NavBarComponent } from './elements/nav-bar/nav-bar.component';
import { MenuItemComponent } from './elements/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    AboutMeComponent,
    MeComponent,
    NavBarComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
