import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  constructor() {}

  addToCart(product: Product): void {
    const item = this.cart.find((item) => item.name === product.name);
    if (item) {
      item.quantity += product.quantity;
    } else {
      this.cart.push({ ...product });
    }
  }

  removeFromCart(product: Product): void {
    this.cart = this.cart.filter((item) => item.name !== product.name);
  }

  getCart(): Product[] {
    return this.cart;
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => {
      return total + item.quantity * item.pricenumber;
    }, 0);
  }
}
