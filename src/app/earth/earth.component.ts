import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css'],
})
export class EarthComponent implements OnInit {
  constructor(private ipservice: ApiServiceService) {}
  EarthData: any;
  ngOnInit(): void {
    // currently turn of api call methods.
    // this.earthValue(this.ipservice);
  }
  viewMode = 'map';
  img = false;
  event() {
    if (!this.img) {
      this.img = true;
    } else if (this.img) {
      this.img = false;
    }
  }
  day: number = 0;
  // currently turn of api call methods.
  // earthValue(form: any) {
  //   this.ipservice.gatApi(form.value).subscribe((data) => {
  //     this.EarthData = Array.of(data);
  //     console.log('Earth values', this.EarthData);
  //   });
  // }
}
