import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

// Third party modules
import { MaterialModule } from "./material.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { CircleComponent } from "./components/circle/circle.component";
import { RoutesModule } from "./routes.module";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FirstWordPipe } from "./pipes/first-word.pipe";
import { SecondWordPipe } from "./pipes/second-word.pipe";
import { CircleDestinationPipe } from "./pipes/circle-destination.pipe";
import { BakerlooComponent } from "./components/bakerloo/bakerloo.component";
import { BakerlooDestinationPipe } from "./pipes/bakerloo-destination.pipe";
import { CentralComponent } from "./components/central/central.component";
import { DistrictComponent } from "./components/district/district.component";
import { PiccadillyComponent } from "./components/piccadilly/piccadilly.component";
import { JubileeComponent } from "./components/jubilee/jubilee.component";
import { VictoriaComponent } from "./components/victoria/victoria.component";
import { NorthernComponent } from "./components/northern/northern.component";
import { DlrComponent } from "./components/dlr/dlr.component";
import { LondonOvergroundComponent } from "./components/london-overground/london-overground.component";
import { WaterlooCityComponent } from "./components/waterloo-city/waterloo-city.component";
import { MetropolitanComponent } from "./components/metropolitan/metropolitan.component";
import { HammersmithCityComponent } from "./components/hammersmith-city/hammersmith-city.component";
import { TflRailComponent } from "./components/tfl-rail/tfl-rail.component";
import { ElizabethComponent } from "./components/elizabeth/elizabeth.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CircleComponent,
    NotFoundPageComponent,
    HeaderComponent,
    FooterComponent,
    FirstWordPipe,
    SecondWordPipe,
    CircleDestinationPipe,
    BakerlooComponent,
    BakerlooDestinationPipe,
    CentralComponent,
    DistrictComponent,
    PiccadillyComponent,
    JubileeComponent,
    VictoriaComponent,
    NorthernComponent,
    DlrComponent,
    LondonOvergroundComponent,
    WaterlooCityComponent,
    MetropolitanComponent,
    HammersmithCityComponent,
    TflRailComponent,
    ElizabethComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutesModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
