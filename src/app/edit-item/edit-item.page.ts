import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.scss'],
})
export class EditItemPage implements OnInit {
  idField: any;
  updateItemForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsService: ItemsService,
    private formBuilder: FormBuilder
  ) { 
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.idField = this.router.getCurrentNavigation().extras.state.id;
        this.itemsService.getItem(this.idField).valueChanges().subscribe( res => {
          this.updateItemForm.setValue(res);
        })
      }
    })
   }

  ngOnInit() {
    this.updateItemForm = this.formBuilder.group({
      text: ['']
    })
  }

  updateForm() {
    this.itemsService.updateItem(this.idField, this.updateItemForm.value)
    .then(() => {
      this.router.navigate(['/content']);
    })
    .catch(error => console.log(error));
  }

}
