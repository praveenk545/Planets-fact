import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IpserviceService {
  value: any;

  constructor(private http: HttpClient) {}

  apikey = 'tgkU6ZyimSQKXw6qW8dkfQ==STlAWneX7F2gHrGm';
  // getApi(location: any = 'earth') {
  //   return this.http.get(
  //     'https://api.api-ninjas.com/v1/planets?name=' + location,
  //     {
  //       headers: {
  //         'X-Api-Key': this.apikey,
  //       },
  //     }
  //     //  headers: {
  //     //   'X-Api-Key': this.apikey;
  //     // },
  //   );
  // }
}
