import { Injectable } from "@angular/core";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ClockService {
  constructor() {}
  getTime() {
    return interval(1000).pipe(map(() => new Date()));
  }
}
