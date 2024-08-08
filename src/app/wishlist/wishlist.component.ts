import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
    wishlistItems: Product[]=[];

    constructor(private wishlistService: WishlistService){}

    ngOnInit(): void {
      this.loadWishlist();
    }
    
    loadWishlist():void{
      this.wishlistItems=this.wishlistService.getwishlist();
    }
    removeWishlist(product:Product):void{
      this.wishlistService.removeFromWishlist(product);
      this.loadWishlist();
    }


}
