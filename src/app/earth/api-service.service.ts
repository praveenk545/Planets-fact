import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService implements OnInit {
  constructor(private http: HttpClient) {}
  apikey = 'tgkU6ZyimSQKXw6qW8dkfQ==STlAWneX7F2gHrGm';

  // currently turn of api call methods.
  // gatApi(value: any = 'earth') {
  //   return this.http.get(
  //     'https://api.api-ninjas.com/v1/planets?name=' + value,
  //     {
  //       headers: {
  //         'X-Api-Key': this.apikey,
  //       },
  //     }
  //   );
  // }
  ngOnInit(): void {}
}
