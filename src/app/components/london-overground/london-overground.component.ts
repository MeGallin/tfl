import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: 'app-london-overground',
  templateUrl: './london-overground.component.html',
  styleUrls: ['./london-overground.component.css']
})
export class LondonOvergroundComponent implements OnInit {

  @ViewChild("input") input: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  timer$;
  londonOvergroundData: any = [];

  londonOvergroundLineStatus;

  displayedColumns: string[] = [
    "stationName",
    "platformName",
    "destinationName",
    "timeToStation",
    "currentLocation",
    "expectedArrival"
  ];
  dataSource: any = new MatTableDataSource();
  constructor(private httpLondonOvergroundLineService$: HttpGetService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.timer$ = timer(1000, 60000)
      .pipe(switchMap(() => this.httpLondonOvergroundLineService$.getLondonOvergroundLine()))
      .subscribe(res => {
        this.dataSource.data = res;
        this.londonOvergroundData = res;
        console.log(this.londonOvergroundData);
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}