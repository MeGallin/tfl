import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-hammersmith-city",
  templateUrl: "./hammersmith-city.component.html",
  styleUrls: ["./hammersmith-city.component.css"],
})
export class HammersmithCityComponent implements OnInit {
  @ViewChild(MatInputModule) input: MatInputModule;
  @ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;
  @ViewChild(MatSortModule) sort: MatSortModule;

  timer$;
  hammersmithCityData: any = [];

  hammersmithCityLineStatus;

  displayedColumns: string[] = [
    "stationName",
    "platformName",
    "destinationName",
    "timeToStation",
    "currentLocation",
    "expectedArrival",
  ];
  dataSource: any = new MatTableModule();
  constructor(private httpHammersmithCityLineService$: HttpGetService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.timer$ = timer(1000, 60000)
      .pipe(
        switchMap(() =>
          this.httpHammersmithCityLineService$.getHammersmithCityLine()
        )
      )
      .subscribe((res) => {
        this.dataSource.data = res;
        this.hammersmithCityData = res;
        console.log(this.hammersmithCityData);
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
