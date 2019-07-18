import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import $ from 'jquery';
import { ProductsServices } from 'src/app/products/products.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { config } from '../../products/product.config';
import { Product } from '../../products/product.model';
import { ToastrService } from 'ngx-toastr';
import { ProductDeleted } from './product-deleted.inteface';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  headphones = [];
  showItem: boolean;
  totalItemsInCart: number;
  public message = '';

  constructor(private db: AngularFirestore, public prodService: ProductsServices, private toastrService: ToastrService) {
  }

  ngOnInit() {
    const elements = $('.modal-overlay, .modal');
    $('button').click(function () {
      elements.addClass('active');
    });
    $('.close-modal').click(function () {
      elements.removeClass('active');
    });

    this.db.collection('headphoneAdded').valueChanges().subscribe(
      (data) => {
        this.headphones = data;
        for (let i = 0; i < this.headphones.length; i++) {
          this.totalItemsInCart = this.headphones.length;
          if ( this.headphones.length > 0) {
            this.showItem = true;
          }
        }
      }
    );
  }


  onToggleSidenav() {
    this.sidenavToggle.emit();
  }


}
