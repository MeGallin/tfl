import { Injectable } from "@angular/core";
import { from, timer } from "rxjs";
import { scan, zip } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TypeWriterService {

  constructor() {}
  typeWriter(text) {
    return from(text.split(""))
      .pipe(scan((x, y) => x + y, ""))
      .pipe(zip(timer(100, 150), x => x));
  }
}
