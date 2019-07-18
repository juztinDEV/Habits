import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ProductsServices } from '../products.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../product.model';
import { Injectable } from '@angular/core';
import { config } from '../product.config';


@Component({
  selector: 'app-bluetooth-headphones',
  templateUrl: './bluetooth-headphones.component.html',
  styleUrls: ['./bluetooth-headphones.component.css']
})
export class BluetoothHeadphonesComponent implements OnInit {


  headphones = [];
  loader = false;
  headphoneAdded: AngularFirestoreCollection<Product>;
  private gamingAdded: AngularFirestoreDocument<Product>;
  addHeadphones = [];
  disableButton: boolean;
  constructor(private db: AngularFirestore, public prodService: ProductsServices, private toastrService: ToastrService) {
    this.headphoneAdded = db.collection<Product>(config.collection_endpoint);
  }

  ngOnInit() {
    this.disableButton = false;
    this.db.collection('bluetooth').valueChanges().subscribe(
      (data) => {
        this.headphones = data;
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
         this.toastrService.success('Item added');
      }
    }

  }
}
