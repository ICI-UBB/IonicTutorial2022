import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userText: string = "";

  constructor(private router: Router) {}

  nextPageWithQueryParams() {
    //this.router.navigateByUrl('/content?text=adasdadasd');

    let navigationExtras: NavigationExtras = {
      queryParams: {
        text: this.userText
      }
    }

    this.router.navigate(['content'], navigationExtras);
  }

}
