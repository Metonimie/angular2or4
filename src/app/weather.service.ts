import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Weather } from '../weather';
import { MOCKWEATHERDATA } from '../mock-weather';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WeatherService {

  // I don't care if my key is public.
  private apiCityUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=d975d9bdc6f18827fe492b4bba3160f6&q=";
  data: Weather[];

  constructor(private http: HttpClient) {
      this.data = Array();
      // save to localstorage?
      // get from localstorage?
  }
  
  // https://openweathermap.org/current
  requestWeatherForCity(cityName: string) {
      console.log("requestWeatherForCity");
      let response = this.http.get(this.apiCityUrl + cityName)
      .subscribe(resp => {
          this.cleanData(resp);
      });
  }
  
  private cleanData(response): void {
    console.log(response);
    
    this.data.push({ 
        id: 0, 
        status: response.weather["0"].main, 
        min: response.main.temp_min - 273.15, 
        max: response.main.temp_max - 273.15, 
        location: response.name 
    });
  }

  getWeatherData(): Observable<Weather[]> {
      return of(this.data); // replace /w this.data
    //   return of(MOCKWEATHERDATA);
  }
}
