import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { asapScheduler } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection('items');
  }

  getItems(){
    return this.itemsCollection.valueChanges();
  }

  addItem(t: any) {
    this.itemsCollection.add({
      text: t
    });
  }
}
