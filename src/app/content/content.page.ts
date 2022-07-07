import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private router: Router) { 
    // Method 1: Query params
    this.route.queryParams.subscribe(params => {
      if (params && params.text) {
        this.data = params.text;
      }
    });

    // Method 2: State
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.text;
      }
    })
  }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['home']);
  }

}
