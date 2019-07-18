import { Injectable } from '@angular/core';
import { ShopModel } from './product.interface';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable()

export class ProductsServices {
    gamingStore = [];
    bluetoothStore = [];
    earbudStore = [];
    fitnessStore = [];

    allProducts = [];
    constructor(private db: AngularFirestore, private toastrService: ToastrService) { }

}
