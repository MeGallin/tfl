import { Component, OnInit } from "@angular/core";
import { ClockService } from "src/app/services/clock.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  displayDateTime;
  constructor(private clockService$: ClockService) {}

  ngOnInit() {
  this.displayDateTime =  this.clockService$.getTime();
  }
}
