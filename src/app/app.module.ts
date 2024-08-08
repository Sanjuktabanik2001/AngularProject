import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';

// import { FooterComponent } from './footer/footer.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { AboutsectionComponent } from './aboutsection/aboutsection.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ProductListingComponent } from './productlisting/productlisting.component';
import { CartService } from './services/cart.service';
import { RouterModule, Routes } from '@angular/router';
import { MiddlesectionComponent } from './middlesection/middlesection.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { FinalpageComponent } from './finalpage/finalpage.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';
// import { ButtonModule } from 'primeng/button';



const routes: Routes = [
  { path: '', component: MiddlesectionComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'aboutsection', component: AboutsectionComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'productlisting', component: ProductListingComponent },
  {path:'wishlist',component: WishlistComponent},
  {path:'payment',component: PaymentComponent},
  {path:'payment',component: PaymentComponent},
  {path:'finalpage',component: FinalpageComponent},
  

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginpageComponent,
    FooterComponent,
    AboutsectionComponent,
    GalleryComponent,
    ContactComponent,
    CartComponent,
    ProductListingComponent,
    MiddlesectionComponent,
    PaymentComponent,
    FinalpageComponent,
    WishlistComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
