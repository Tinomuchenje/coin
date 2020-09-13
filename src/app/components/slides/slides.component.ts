import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  slides = [
    {
      title: 'Silver',
      description: ' Some info here...',
      image: 'assets/silver.png',
    },
    {
      title: 'Gold',
      description: 'Some info here...',
      image: 'assets/gold.png',
    },
    {
      title: 'Platinum',
      description: 'Some info here...',
      image: 'assets/platinum.png',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
