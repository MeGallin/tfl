import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: "app-metropolitan",
  templateUrl: "./metropolitan.component.html",
  styleUrls: ["./metropolitan.component.css"],
})
export class MetropolitanComponent implements OnInit {
  @ViewChild("input") input: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
  dataSource: any = new MatTableDataSource();
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
