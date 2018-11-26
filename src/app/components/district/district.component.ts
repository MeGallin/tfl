import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpGetService } from "src/app/services/http-get.service";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  @ViewChild("input") input: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  timer$;
  districtData: any = [];

  districtLineStatus;

  displayedColumns: string[] = [
    "stationName",
    "platformName",
    "destinationName",
    "timeToStation",
    "currentLocation",
    "expectedArrival"
  ];
  dataSource: any = new MatTableDataSource();
  constructor(private httpDistrictLineService$: HttpGetService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.timer$ = timer(1000, 60000)
      .pipe(switchMap(() => this.httpDistrictLineService$.getDistrictLine()))
      .subscribe(res => {
        this.dataSource.data = res;
        this.districtData = res;
        console.log(this.districtData);
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
