import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IpserviceService } from './ipservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private ip: IpserviceService,
    private formBuilder: FormBuilder
  ) {}
  icons = { faArrowRight };
  api: any;
  apiVal: any;

  ngOnInit(): void {
    this.apiVal = this.formBuilder.group({ location: [''] });
    // this.ipadressfind(location);
  }
  // ipadressfind(formValues: any) {
  //   this.ip.getApi(formValues.location).subscribe((data) => {
  //     this.api = Array.of(data);
  //     console.log('IPADDRESS', this.api);
  //   });
  // }
}
