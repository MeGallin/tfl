import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: 'app-hammersmith-city',
  templateUrl: './hammersmith-city.component.html',
  styleUrls: ['./hammersmith-city.component.css']
})
export class HammersmithCityComponent implements OnInit {
  @ViewChild("input") input: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  timer$;
  hammersmithCityData: any = [];

  hammersmithCityLineStatus;

  displayedColumns: string[] = [
    "stationName",
    "platformName",
    "destinationName",
    "timeToStation",
    "currentLocation",
    "expectedArrival"
  ];
  dataSource: any = new MatTableDataSource();
  constructor(private httpHammersmithCityLineService$: HttpGetService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.timer$ = timer(1000, 60000)
      .pipe(switchMap(() => this.httpHammersmithCityLineService$.getHammersmithCityLine()))
      .subscribe(res => {
        this.dataSource.data = res;
        this.hammersmithCityData = res;
        console.log(this.hammersmithCityData);
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
