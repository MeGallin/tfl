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
  defaultText: string;

  constructor(
    private httpGet$: HttpGetService,
    private typeWriter$: TypeWriterService
  ) {}

  ngOnInit() {
    this.timer$ = timer(1000, 60000)
      .pipe(switchMap(() => this.httpGet$.getTFLLineService()))
      .subscribe(res => {
        this.tubeData = res;

        console.log(this.tubeData);

        for (let i = 0; i < this.tubeData.length; i++) {
          let service = this.tubeData[i].lineStatuses[0]
            .statusSeverityDescription;

          let tempService = service.trim();
          if (tempService !== "Good Service") {
            this.typeWriterText = tempService;

            console.log(this.typeWriterText);

            // switch (this.typeWriterText) {
            //   case "Severe Delays":
            //     let textSD = "Severe Delays";
            //     setInterval(() => {
            //       this.MessageSevere = this.typeWriter$.typeWriter(textSD);
            //     }, 3000);
            //     break;

            //   case "Minor Delays":
            //     let textMD = "Minor Delays";
            //     setInterval(() => {
            //       this.MessageSevere = this.typeWriter$.typeWriter(textMD);
            //     }, 2000);
            //     break;

            //   case "Part Closure":
            //     let textPC = "Part Closure";
            //     setInterval(() => {
            //       this.MessageSevere = this.typeWriter$.typeWriter(textPC);
            //     }, 2000);
            //     break;

            //   case "Service Closed":
            //     let textSV = "Service Closed";
            //     setInterval(() => {
            //       this.MessageSevere = this.typeWriter$.typeWriter(textSV);
            //     }, 2000);
            //     break;

            //   case "Part Suspended":
            //     let textPS = "Part Suspended";
            //     setInterval(() => {
            //       this.MessageSevere = this.typeWriter$.typeWriter(textPS);
            //     }, 2000);
            //     break;
            //   default:
            //     this.defaultText = "Looking forward to the Weekend";
            // } 

            if (this.typeWriterText === "Severe Delays") {
              let text = "Severe Delays";
              setInterval(() => {
                this.MessageSevere = this.typeWriter$.typeWriter(
                  text
                );
              }, 3000);
            }

            if (this.typeWriterText === "Minor Delays") {
              let text = "Minor Delays";
              setInterval(() => {
                this.MessageMinor = this.typeWriter$.typeWriter(
                  text
                );
              }, 3000);
            }

            if (this.typeWriterText === "Part Closure") {
              let text = "Part Closure";
              setInterval(() => {
                this.MessagePartClosure = this.typeWriter$.typeWriter(
                  text
                );
              }, 3000);
            }

            if (this.typeWriterText === "Service Closed") {
              let text = "Service Closed";
              setInterval(() => {
                this.MessageServiceClosed = this.typeWriter$.typeWriter(
                  text
                );
              }, 3000);
            }

            if (this.typeWriterText === "Part Suspended") {
              let text = "Part Suspended";
              setInterval(() => {
                this.MessagePartSuspended = this.typeWriter$.typeWriter(
                  text
                );
              }, 3000);
            }
          }
        }
      });
  }
}
