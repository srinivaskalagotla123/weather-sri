import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weathercomp',
  templateUrl: './weathercomp.component.html',
  styleUrls: ['./weathercomp.component.css']
})
export class WeathercompComponent implements OnInit {
  props:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
