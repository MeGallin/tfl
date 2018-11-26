import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: 'app-piccadilly',
  templateUrl: './piccadilly.component.html',
  styleUrls: ['./piccadilly.component.css']
})
export class PiccadillyComponent implements OnInit {

  @ViewChild("input") input: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  timer$;
  piccadillyData: any = [];

  piccadillyLineStatus;

  displayedColumns: string[] = [
    "stationName",
    "platformName",
    "destinationName",
    "timeToStation",
    "currentLocation",
    "expectedArrival"
  ];
  dataSource: any = new MatTableDataSource();
  constructor(private httpPiccadillyLineService$: HttpGetService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.timer$ = timer(1000, 60000)
      .pipe(switchMap(() => this.httpPiccadillyLineService$.getPiccadillyLine()))
      .subscribe(res => {
        this.dataSource.data = res;
        this.piccadillyData = res;
        console.log(this.piccadillyData);
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
