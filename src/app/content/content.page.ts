import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {
  data: any;
  items: Observable<any[]>;

  constructor(private route: ActivatedRoute, private router: Router, private itemsService: ItemsService) { 
    // Method 1: Query params
    this.route.queryParams.subscribe(params => {
      if (params && params.text) {
        this.data = params.text;
        this.itemsService.addItem(this.data);
      }
    });

    // Method 2: State
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.text;
        this.itemsService.addItem(this.data);
      }
    })
  }

  ngOnInit() {
    this.itemsService.getItems().subscribe(res => {
      console.log('my items', res);
    })
    this.items = this.itemsService.getItems();
  }

  goBack(){
    this.router.navigate(['home']);
  }

  editItem(idItem) {
    // pasar parametro a edit-item
    let navigationExtras: NavigationExtras = {
      state: {
        id: idItem
      }
    }
    this.router.navigate(['edit-item'], navigationExtras);
  }

  deleteItem(idItem) {
    if (window.confirm("Realmente desea eliminar el item?")) {
      this.itemsService.deleteItem(idItem);
    }
  }

}
