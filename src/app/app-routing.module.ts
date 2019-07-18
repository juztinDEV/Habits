import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { EarbudHeadphonesComponent } from './products/earbud-headphones/earbud-headphones.component';
import { BluetoothHeadphonesComponent } from './products/bluetooth-headphones/bluetooth-headphones.component';
import { GamingHeadphonesComponent } from './products/gaming-headphones/gaming-headphones.component';
import { FitnessHeadphonesComponent } from './products/fitness-headphones/fitness-headphones.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'products',  children: [
        {path: '', component: ProductsComponent},
        { path: 'earbud-headphones', component: EarbudHeadphonesComponent },
        { path: 'bluetooth-headphones', component: BluetoothHeadphonesComponent },
        { path: 'gaming-headphones', component: GamingHeadphonesComponent },
        { path: 'fitness-headphones', component: FitnessHeadphonesComponent },
    ]
},
    { path: 'special-offers', component: ShoppingComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: '**', component: NotFoundComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
