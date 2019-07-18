import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ProductsServices } from '../products.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../product.model';
import { Injectable } from '@angular/core';
import { config } from '../product.config';

@Component({
  selector: 'app-fitness-headphones',
  templateUrl: './fitness-headphones.component.html',
  styleUrls: ['./fitness-headphones.component.css']
})
export class FitnessHeadphonesComponent implements OnInit {
  headphones = [];
  addHeadphones = [];
  loader = false;
  headphoneAdded: AngularFirestoreCollection<Product>;
  private gamingAdded: AngularFirestoreDocument<Product>;

  constructor(private db: AngularFirestore, public prodService: ProductsServices, private toastrService: ToastrService) {
    this.headphoneAdded = db.collection<Product>(config.collection_endpoint);
   }

  ngOnInit() {
    this.db.collection('fitness').valueChanges().subscribe(
      (data) => {
        this.headphones = data;
        console.log('Id-ul selectat', this.headphones );
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
        console.log('ID DIFERIT');
      }
    }
  }

}
