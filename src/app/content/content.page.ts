import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.text) {
        this.data = params.text;
      }
    });
  }

  ngOnInit() {
  }

}
