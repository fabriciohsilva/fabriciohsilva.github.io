import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutTecsComponent } from './about-tecs/about-tecs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';

import { AboutTecsService } from './services/about-tecs/about-tecs.service';
import { ProjectsService } from './services/projects/projects.service';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    AboutMeComponent,
    AboutTecsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [
    AboutTecsService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
