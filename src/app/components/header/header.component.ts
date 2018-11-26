import { Component, OnInit } from '@angular/core';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayDateTime;
  constructor(private clockService$: ClockService) {}

  ngOnInit() {
  this.displayDateTime =  this.clockService$.getTime();
  }

}
