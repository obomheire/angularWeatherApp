import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    const apiUrl = `${environment.weatherAPIBaseUrl}/${cityName}`;

    return this.http.get<WeatherData>(apiUrl, {
      headers: new HttpHeaders()
        .set(
          environment.xRapidAPIHostHeaderName,
          environment.xRapidAPIHostHeaderValue
        )
        .set(
          environment.xRapidAPIKeyHeaderName,
          environment.xRapidAPIKeyHeaderValue
        ),
      // params: new HttpParams()
      //   .set('q', cityName)
      //   .set('units', 'metric')
      //   .set('mode', 'json'),
    });
  }
}
