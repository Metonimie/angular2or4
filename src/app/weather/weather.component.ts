import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../../weather';
import { MOCKWEATHERDATA } from '../../mock-weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {

  data: Weather[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    // must populate the data here.
    // this.data = MOCKWEATHERDATA;
    this.getData();
  }
  
  getData(): void {
    this.weatherService.getWeatherData().subscribe(data => this.data = data);
  }

}
