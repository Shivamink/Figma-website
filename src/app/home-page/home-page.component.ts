import { Component, OnInit } from '@angular/core';
declare let tns: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  ngAfterViewInit() {
    let slider = tns({
      container: '.my-slider',
      slideBy: 1,
      // speed: 400,
      nav: false,
      controlsContainer: '#controls',
      prevButton: '.previous',
      nextButton: '.next',
      responsive: {
        1600: {
          items: 4,
          gutter: 20,
        },
        1024: {
          items: 3,
          gutter: 20,
        },
        768: {
          items: 2,
          gutter: 20,
        },
        480: {
          items: 1,
        },
      },
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
