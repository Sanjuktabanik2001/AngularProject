import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: Product[] =[];

  constructor() { }

  addToWishlist(product: Product): void{
    const item =this.wishlist.find((item)=>item.name==product.name);
    if(item){
      item.quantity+=product.quantity;
    }else{
      this.wishlist.push({...product});
    }
  }
  removeFromWishlist(product: Product): void {
    this.wishlist = this.wishlist.filter((item) => item.name !== product.name);
  }
  getwishlist(): Product[] {
    return this.wishlist;
  }

} 
