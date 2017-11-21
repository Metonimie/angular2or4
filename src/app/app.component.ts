import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  
  constructor(private weatherService: WeatherService) {
  
  }
  
  @Input() requestedWeatherLocation: string;
  
  requestWeather() {
    console.log("Request weather called");
    console.log(this.requestedWeatherLocation.trim());
    if (this.requestedWeatherLocation != "") {
      this.weatherService.requestWeatherForCity(this.requestedWeatherLocation.trim());
    }
  }
}
