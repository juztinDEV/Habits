import { Component, OnInit, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Product } from '../products/product.model';
import { ProductDeleted } from '../navigation/header/product-deleted.inteface';
import { config } from '../products/product.config';
import { keyframes } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  headphones = [];
  showItem: boolean;
  initialPrice = [];
  loader = false;
  sum: any;
  elPrice: number;
  addHeadphones = [];
  prices: number;
  totalSum: number;
  totalPerItem = [];
  imgData = [];
  dateForDelete = [];
  noProductInCart: boolean;
  itemForDelete: string;
  headphoneAdded: AngularFirestoreCollection<Product>;
  private productAdded: AngularFirestoreDocument<Product>;
  constructor(private db: AngularFirestore, private toastrService: ToastrService) {
    this.headphoneAdded = db.collection<Product>(config.collection_endpoint);
  }

  @Output() public childEvent = new EventEmitter();

  ngOnInit() {
    this.noProductInCart = false;
    this.db.collection('headphoneAdded').get().toPromise().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        this.dateForDelete.push(new ProductDeleted(doc.id, doc.data().name));
      });
    });

    this.db.collection('headphoneAdded').valueChanges().subscribe(
      (data) => {
        this.headphones = data;
        console.log('aaada', this.headphones);
        for (let i = 0; i < this.headphones.length; i++) {
          this.initialPrice[i] = 1;
          this.totalSum = (this.initialPrice[i] * this.headphones[i].price);
        }
        if (this.headphones.length > 0) {
          this.noProductInCart = true;
        } else {
          this.noProductInCart = false;
        }
        if (data) {
          this.loader = true;
        }
      }
    );
    setTimeout(() => {
      this.updateValue();
    }, 500);
  }

  updateValue() {
    this.totalSum = 0;
    for (let i = 0; i < this.headphones.length; i++) {
      this.totalPerItem[i] = this.headphones[i].price * this.initialPrice[i];
    }
    for (let i = 0; i < this.totalPerItem.length; i++) {
      this.totalSum = this.totalSum + this.totalPerItem[i];
    }
  }




  deleteProduct(val) {
    for (let i = 0; i < this.dateForDelete.length; i++) {
      if (val === this.dateForDelete[i].name) {
        this.itemForDelete = this.dateForDelete[i].key;
        this.db.collection('headphoneAdded').doc(this.itemForDelete).delete();
      }
    }
    setTimeout(() => {
      this.updateValue();
    }, 500);
    this.toastrService.warning('Item deleted');
  }

}
