import { Pipe, PipeTransform } from "@angular/core";
import { TypeWriterService } from "src/app/services/type-writer.service";

@Pipe({
  name: "circleDestination"
})
export class CircleDestinationPipe implements PipeTransform {
  constructor(private typeWriter$: TypeWriterService) {}

  transform(value: any, args?: any): any {
    if (value === "Edgware Road (Circle Line) Underground Station") {
      return  this.typeWriter$.typeWriter("Edgware Road (Circle Line)");
    }
    if (value === "Hammersmith (H&C Line) Underground Station") {
      return this.typeWriter$.typeWriter("Hammersmith (H&C Line)");
    }
  }
}
