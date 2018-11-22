import { Component, OnInit } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { TypeWriterService } from "src/app/services/type-writer.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  tubeData: any = [];
  timer$;

  typeWriterDisplayMessage;
  typeWriterText = "TESTING TESTING";

  MessageMinor;
  MessageSevere;
  MessagePartClosure;
  MessageServiceClosed;
  MessagePartSuspended;

  constructor(
    private httpGet$: HttpGetService,
    private typeWriter$: TypeWriterService
  ) {}

  ngOnInit() {
    this.timer$ = timer(1000, 60000)
      .pipe(switchMap(() => this.httpGet$.getTFLLineService()))
      .subscribe(res => {
        this.tubeData = res;

        for (let i = 0; i < this.tubeData.length; i++) {
          let service = this.tubeData[i].lineStatuses[0]
            .statusSeverityDescription;
          // console.log(service.trim());
          let tempService = service.trim();
          if (tempService !== "Good Service") {
            this.typeWriterText = tempService;

            console.log(this.typeWriterText);

            if (this.typeWriterText === "Severe Delays") {
              let text = "Severe Delays";
              setInterval(() => {
                this.MessageSevere = this.typeWriter$.typeWriter(
                  text
                );
              }, 2000);
            }

            if (this.typeWriterText === "Minor Delays") {
              let text = "Minor Delays";
              setInterval(() => {
                this.MessageMinor = this.typeWriter$.typeWriter(
                  text
                );
              }, 2000);
            }

            if (this.typeWriterText === "Part Closure") {
              let text = "Part Closure";
              setInterval(() => {
                this.MessagePartClosure = this.typeWriter$.typeWriter(
                  text
                );
              }, 2000);
            }

            if (this.typeWriterText === "Service Closed") {
              let text = "Service Closed";
              setInterval(() => {
                this.MessageServiceClosed = this.typeWriter$.typeWriter(
                  text
                );
              }, 2000);
            }

            if (this.typeWriterText === "Part Suspended") {
              let text = "Part Suspended";
              setInterval(() => {
                this.MessagePartSuspended = this.typeWriter$.typeWriter(
                  text
                );
              }, 2000);
            }
          }
        }
      });
  }
}
