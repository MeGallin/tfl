import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { CircleComponent } from "./components/circle/circle.component";
import { BakerlooComponent } from "./components/bakerloo/bakerloo.component";
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

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "bakerloo",
    component: BakerlooComponent,
  },
  {
    path: "circle",
    component: CircleComponent,
  },
  {
    path: "central",
    component: CentralComponent,
  },
  {
    path: "district",
    component: DistrictComponent,
  },
  {
    path: "piccadilly",
    component: PiccadillyComponent,
  },
  {
    path: "jubilee",
    component: JubileeComponent,
  },
  {
    path: "victoria",
    component: VictoriaComponent,
  },
  {
    path: "northern",
    component: NorthernComponent,
  },
  {
    path: "dlr",
    component: DlrComponent,
  },
  {
    path: "london-overground",
    component: LondonOvergroundComponent,
  },
  {
    path: "waterloo-city",
    component: WaterlooCityComponent,
  },
  {
    path: "hammersmith-city",
    component: HammersmithCityComponent,
  },
  {
    path: "metropolitan",
    component: MetropolitanComponent,
  },
  {
    path: "tfl-rail",
    component: TflRailComponent,
  },
  {
    path: "elizabeth",
    component: ElizabethComponent,
  },
  {
    path: "**",
    component: NotFoundPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class RoutesModule {}
