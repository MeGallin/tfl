import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: "app-circle",
  templateUrl: "./circle.component.html",
  styleUrls: ["./circle.component.css"]
})
export class CircleComponent implements OnInit {
  @ViewChild("input") input: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  timer$;
  circleData: any = [];

  circleLineStatus;

  displayedColumns: string[] = [
    "stationName",
    "platformName",
    "destinationName",
    "timeToStation",
    "currentLocation",
    "expectedArrival"
  ];
  dataSource: any = new MatTableDataSource();
  constructor(private httpCircleLineService$: HttpGetService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.timer$ = timer(1000, 60000)
      .pipe(switchMap(() => this.httpCircleLineService$.getCircleLine()))
      .subscribe(res => {
        this.dataSource.data = res;
        this.circleData = res;
        console.log(this.circleData);
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
