import { Component ,OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import productsData from 'productlisting.json';
import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-middlesection',
  templateUrl: './middlesection.component.html',
  styleUrls: ['./middlesection.component.css']
})
export class MiddlesectionComponent implements OnInit {
  name='Angular';
    products: Product[] =productsData;
    
    showPrompt: boolean = false;
    promptMessage: string = '';
    isInwishlist:boolean =false;
    // ### LIKE BUTTON ###
    public isButtonHeartOn = false;
    public size: number = 70;
    onClickButtonHeart() {
      this.isButtonHeartOn = !this.isButtonHeartOn;
    }
    // 
    constructor(private cartService: CartService,private wishlistService:WishlistService) {
  
    }
  
    ngOnInit(): void {}
    addtoWishList(product:Product): void{
        this.wishlistService.addToWishlist(product);
        this.showPrompt =true;
        this.promptMessage='Added to Wishlist';
  
        setTimeout(() => {
          this.showPrompt = false;
        }, 2000); // Hide prompt after 2 seconds
    }
    addToCart( product: Product): void {
      this.cartService.addToCart(product);
      this.showPrompt = true;
      this.promptMessage = 'Added to Cart';
  
      setTimeout(() => {
        this.showPrompt = false;
      }, 2000); // Hide prompt after 2 seconds
    }
  
    decreaseQuantity(product: Product): void {
      if (product.quantity > 1) {
        product.quantity--;
      }
    }
  
    increaseQuantity(product: Product): void {
      product.quantity++;
    }
  }
  