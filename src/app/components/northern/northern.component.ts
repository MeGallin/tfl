import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: "app-northern",
  templateUrl: "./northern.component.html",
  styleUrls: ["./northern.component.css"],
})
export class NorthernComponent implements OnInit {
  @ViewChild("input") input: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  timer$;
  northernData: any = [];

  northernLineStatus;

  displayedColumns: string[] = [
    "stationName",
    "platformName",
    "destinationName",
    "timeToStation",
    "currentLocation",
    "expectedArrival",
  ];
  dataSource: any = new MatTableDataSource();
  constructor(private httpNorthernLineService$: HttpGetService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.timer$ = timer(1000, 60000)
      .pipe(switchMap(() => this.httpNorthernLineService$.getNorthernLine()))
      .subscribe((res) => {
        this.dataSource.data = res;
        this.northernData = res;
        console.log(this.northernData);
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
