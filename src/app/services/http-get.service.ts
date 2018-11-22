import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { retry } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpGetService {
  constructor(private httpGet$: HttpClient) {}

  getTFLLineService() {
    const tflLineStatus =
      "https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status";
    return this.httpGet$.get(tflLineStatus).pipe(retry(5));
  }
}
