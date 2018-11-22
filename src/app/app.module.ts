import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Third party modules
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CircleComponent } from './components/circle/circle.component';
import { RoutesModule } from './routes.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstWordPipe } from './pipes/first-word.pipe';
import { SecondWordPipe } from './pipes/second-word.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CircleComponent,
    NotFoundPageComponent,
    HeaderComponent,
    FooterComponent,
    FirstWordPipe,
    SecondWordPipe
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,   
    RoutesModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
