import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { retry } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class HttpGetService {
  constructor(private httpGet$: HttpClient) {}

  getTFLLineService() {
    const tflLineStatus =
      "https://api.tfl.gov.uk/line/mode/tube,overground,dlr,elizabeth-line/status";
    return this.httpGet$.get(tflLineStatus).pipe(retry(5));
  }

  getCircleLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/circle/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getBakerlooLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/bakerloo/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getCentralLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/central/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getDistrictLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/district/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getPiccadillyLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/piccadilly/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getJubileeLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/jubilee/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getVictoriaLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/victoria/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getNorthernLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/northern/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getDlrLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/dlr/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getLondonOvergroundLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/london-overground/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getWaterlooCityLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/waterloo-city/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getMetropolitanLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/metropolitan/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getHammersmithCityLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/hammersmith-city/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getTflRailLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/tfl-rail/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }

  getElizabethLine() {
    const lineUrl = "https://api.tfl.gov.uk/line/elizabeth/arrivals";
    return this.httpGet$.get(lineUrl).pipe(retry(5));
  }
}
