import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public objectFormed: any;
  public weatherDetails: any;
  public cityName: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDetails('Mysore');
  }

  // Get climatic details of cities

  public getDetails (city) {
    if (!city) {
      alert ('Enter City Name');
      return;
    }
    this.cityName = '';
    const staticUrl = 'https://openweathermap.org/data/2.5/find?q=';
    const appid = '&appid=b6907d289e10d714a6e88b30761fae22&_=1549732737450';
    const url = staticUrl + city  + appid ;

    this.http.get(url).subscribe(res => {
      this.objectFormed = res;
      this.weatherDetails = this.objectFormed.list[0];
    });
  }

}

// import { Component, OnInit } from '@angular/core';
// import { HttpServiceService } from '../services/http-service.service';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {

//   public weatherDetails: any;
//   public cityName: string;

//   constructor(private httpService: HttpServiceService) { }

//   ngOnInit() {
//     this.getDetails('Mysore');
//   }

//   // Get climatic details of cities

//   public getDetails (city) {
//     if (!city) {
//       alert ('Enter City Name');
//       return;
//     }
//     this.cityName = '';
//     this.weatherDetails = this.httpService.getServiceDetails(city);

//   }

// }
