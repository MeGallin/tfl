import { Pipe, PipeTransform } from "@angular/core";
import { TypeWriterService } from "../services/type-writer.service";

@Pipe({
  name: "bakerlooDestination"
})
export class BakerlooDestinationPipe implements PipeTransform {
  constructor(private typeWriter$: TypeWriterService) {}

  transform(value: any, args?: any): any {
    if (value === "Stonebridge Park Underground Station") {
      return this.typeWriter$.typeWriter("Stonebridge Park");
    }
    if (value === "Elephant & Castle Underground Station") {
      return this.typeWriter$.typeWriter("Elephant & Castle");
    }
    if (value === "Harrow & Wealdstone Underground Station") {
      return this.typeWriter$.typeWriter("Harrow & Wealdstone");
    }
    if (value === "Queen's Park Underground Station") {
      return this.typeWriter$.typeWriter("Queen's Park");
    }    
  }
}
