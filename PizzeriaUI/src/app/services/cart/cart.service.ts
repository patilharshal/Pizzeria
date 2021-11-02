import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { MenuItem } from '../menu-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();

  addToCart(menuItem:MenuItem){

    let cartItem = this.cart.items.find(item=> item.menuItem.Id == menuItem.Id);
    if(cartItem){

      this.changeItemQuantity(menuItem.Id,cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(menuItem));

  }

  removeFromCartItem(menuItemId:number){
    this.cart.items = this.cart.items.filter(item=>item.menuItem.Id != menuItemId);
  }

  changeItemQuantity(menuItemId: number, quantity: number) {
    let cartItem = this.cart.items.find(item=> item.menuItem.Id == menuItemId);
    if(!cartItem){
      return;
    }
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
