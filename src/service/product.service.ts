import { Injectable, inject } from '@angular/core';
import { collectionData ,Firestore, collection, addDoc} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Product, Products } from '../model/product.interface';

const PATH = 'product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore,PATH);


  getProducts(){
    return collectionData(this._collection) as Observable<Product[]>
  }

  createProduct(product: Products){
    return addDoc(this._collection,product)

  }



}
