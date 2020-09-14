import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  slides = [
    {
      title: 'Silver Coin',
      description: 'Cost R500 rands <br> Matures 24 hours <br> At 25%  interest',
      image: 'assets/silver.png',
    },
    {
      title: 'Gold Coin',
      description: 'Cost R1000 <br> Matures in 12 hours <br> At 30 % interest',
      image: 'assets/gold.png',
    },
    {
      title: 'Platinum Coin',
      description: 'Cost R2500 <br> Matures in 6 hours <br> At 50 % interest',
      image: 'assets/platinum.png',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
