import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weathercomp',
  templateUrl: './weathercomp.component.html',
  styleUrls: ['./weathercomp.component.css']
})
export class WeathercompComponent implements OnInit {
  props:string='';
  srini:string='sri';
  constructor() { }

  ngOnInit(): void {
  }

}
