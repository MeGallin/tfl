import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { CircleComponent } from "./components/circle/circle.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "Circle",
    component: CircleComponent
  },
  {
    path: "**",
    component: NotFoundPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class RoutesModule {}
