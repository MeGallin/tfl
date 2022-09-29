import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: "app-elizabeth",
  templateUrl: "./elizabeth.component.html",
  styleUrls: ["./elizabeth.component.css"],
})
export class ElizabethComponent implements OnInit {
  @ViewChild("input") input: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  timer$;
  elizabethData: any = [];

  districtLineStatus;

  displayedColumns: string[] = [
    "stationName",
    "platformName",
    "destinationName",
    "timeToStation",
    "currentLocation",
    "expectedArrival",
  ];
  dataSource: any = new MatTableDataSource();
  constructor(private httpDistrictLineService$: HttpGetService) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.timer$ = timer(1000, 60000)
      .pipe(switchMap(() => this.httpDistrictLineService$.getElizabethLine()))
      .subscribe((res) => {
        this.dataSource.data = res;
        this.elizabethData = res;
        console.log(this.elizabethData);
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
