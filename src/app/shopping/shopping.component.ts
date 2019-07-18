import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
declare var $: any;

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  headphones = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('special').valueChanges().subscribe(
      (data) => {
        this.headphones = data;
        console.log('aici', this.headphones );
      }
    );
  }


}
