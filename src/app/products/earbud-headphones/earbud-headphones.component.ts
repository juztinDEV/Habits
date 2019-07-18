import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ProductsServices } from '../products.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../product.model';
import { Injectable } from '@angular/core';
import { config } from '../product.config';

@Component({
  selector: 'app-earbud-headphones',
  templateUrl: './earbud-headphones.component.html',
  styleUrls: ['./earbud-headphones.component.css']
})
export class EarbudHeadphonesComponent implements OnInit {

  headphones = [];
  loader = false;
  productName: string;
  headphoneAdded: AngularFirestoreCollection<Product>;
  private gamingAdded: AngularFirestoreDocument<Product>;
  addHeadphones = [];
  constructor(private db: AngularFirestore, public prodService: ProductsServices, private toastrService: ToastrService) {
    this.headphoneAdded = db.collection<Product>(config.collection_endpoint);
  }

  ngOnInit() {
    this.db.collection('earbud').valueChanges().subscribe(
      (data) => {
        this.headphones = data;
        console.log('aici', this.headphones );
        if (data) {
          this.loader = true;
        }
      }
    );
  }

  onAddItem(val) {
    for (let i = 0; i < this.headphones.length; i++) {
      if (val === this.headphones[i].id) {
        this.headphoneAdded.add(this.headphones[val]);
        console.log('Id-ul selectat', this.headphones[val]);
         this.toastrService.success('Item added');
      } else {
        console.log('Id DIFERIT');
      }
      if ( this.headphones[i].name === this.productName) {
        console.log('MERGE');
      }
    }
  }

}
