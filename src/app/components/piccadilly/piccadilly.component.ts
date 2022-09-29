import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-piccadilly",
  templateUrl: "./piccadilly.component.html",
  styleUrls: ["./piccadilly.component.css"],
})
export class PiccadillyComponent implements OnInit {
  @ViewChild(MatInputModule) input: MatInputModule;
  @ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;
  @ViewChild(MatSortModule) sort: MatSortModule;

  timer$;
  piccadillyData: any = [];

  piccadillyLineStatus;

  displayedColumns: string[] = [
    "stationName",
    "platformName",
    "destinationName",
    "timeToStation",
    "currentLocation",
    "expectedArrival",
  ];
  dataSource: any = new MatTableModule();
  constructor(private httpPiccadillyLineService$: HttpGetService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.timer$ = timer(1000, 60000)
      .pipe(
        switchMap(() => this.httpPiccadillyLineService$.getPiccadillyLine())
      )
      .subscribe((res) => {
        this.dataSource.data = res;
        this.piccadillyData = res;
        console.log(this.piccadillyData);
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
