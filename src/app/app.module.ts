import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { EarbudHeadphonesComponent } from './products/earbud-headphones/earbud-headphones.component';
import { BluetoothHeadphonesComponent } from './products/bluetooth-headphones/bluetooth-headphones.component';
import { GamingHeadphonesComponent } from './products/gaming-headphones/gaming-headphones.component';
import { FitnessHeadphonesComponent } from './products/fitness-headphones/fitness-headphones.component';
import { HeaderShopComponent } from './header-shop/header-shop.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { ProductsServices } from './products/products.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';


export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ShoppingComponent,
    PageErrorComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    EarbudHeadphonesComponent,
    BluetoothHeadphonesComponent,
    GamingHeadphonesComponent,
    FitnessHeadphonesComponent,
    HeaderShopComponent,
    ShoppingCartComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AngularFirestore, ProductsServices, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
