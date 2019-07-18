import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ProductsServices } from '../products.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../product.model';
import { Injectable } from '@angular/core';
import { config } from '../product.config';

@Component({
  selector: 'app-gaming-headphones',
  templateUrl: './gaming-headphones.component.html',
  styleUrls: ['./gaming-headphones.component.css']
})
export class GamingHeadphonesComponent implements OnInit {

  headphones = [];
  loader = false;
  headphoneAdded: AngularFirestoreCollection<Product>;
  private gamingAdded: AngularFirestoreDocument<Product>;
  addHeadphones = [];
  constructor(private db: AngularFirestore, public prodService: ProductsServices, private toastrService: ToastrService) {
    this.headphoneAdded = db.collection<Product>(config.collection_endpoint);
  }

  ngOnInit() {
    this.db.collection('gaming').valueChanges().subscribe(
      (data) => {
        this.headphones = data;
        console.log(this.headphones);
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
        console.log('Id-ul selectat', this.headphones[val]);
      } else {
        console.log('ID DIFERIT');
      }
    }
  }


}
