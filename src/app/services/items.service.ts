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
    return this.itemsCollection.valueChanges( {idField: 'idField'} );
  }

  getItemsByCategory(selectedCategory: string) {
    return this.afs.collection("items", ref =>
    ref.where("category", "==", selectedCategory)).valueChanges();
  }

  addItem(t: any) {
    this.itemsCollection.add({
      text: t
    });
  }

  addItemWithCategory(text: any, category: any) {
    this.itemsCollection.add({
      text: text,
      category: category
    });
  }

  deleteItem(id: string) {
    return this.itemsCollection.doc(id).delete();
  }

  getItem(id: string) {
    return this.itemsCollection.doc(id);
  }

  updateItem(id: string, newData: any){
    return this.itemsCollection.doc(id).update(newData);
  }
}
