import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-central",
  templateUrl: "./central.component.html",
  styleUrls: ["./central.component.css"],
})
export class CentralComponent implements OnInit {
  @ViewChild(MatInputModule) input: MatInputModule;
  @ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;
  @ViewChild(MatSortModule) sort: MatSortModule;

  timer$;
  centralData: any = [];

  centralLineStatus;

  displayedColumns: string[] = [
    "stationName",
    "platformName",
    "destinationName",
    "timeToStation",
    "currentLocation",
    "expectedArrival",
  ];
  dataSource: any = new MatTableModule();
  constructor(private httpCentralLineService$: HttpGetService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.timer$ = timer(1000, 60000)
      .pipe(switchMap(() => this.httpCentralLineService$.getCentralLine()))
      .subscribe((res) => {
        this.dataSource.data = res;
        this.centralData = res;
        console.log(this.centralData);
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
