import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

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
}
