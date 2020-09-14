import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accout-details',
  templateUrl: './accout-details.page.html',
  styleUrls: ['./accout-details.page.scss'],
})
export class AccoutDetailsPage implements OnInit {
  details: any = {};
  constructor() { }

  ngOnInit() {
  }
 
  save() {
    console.log(this.details);
  }

}
