import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-metropolitan",
  templateUrl: "./metropolitan.component.html",
  styleUrls: ["./metropolitan.component.css"],
})
export class MetropolitanComponent implements OnInit {
  @ViewChild(MatInputModule) input: MatInputModule;
  @ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;
  @ViewChild(MatSortModule) sort: MatSortModule;

  timer$;
  metropolitanData: any = [];

  metropolitanLineStatus;

  displayedColumns: string[] = [
    "stationName",
    "platformName",
    "destinationName",
    "timeToStation",
    "currentLocation",
    "expectedArrival",
  ];
  dataSource: any = new MatTableModule();
  constructor(private httpMetropolitanLineService$: HttpGetService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.timer$ = timer(1000, 60000)
      .pipe(
        switchMap(() => this.httpMetropolitanLineService$.getMetropolitanLine())
      )
      .subscribe((res) => {
        this.dataSource.data = res;
        this.metropolitanData = res;
        console.log(this.metropolitanData);
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
