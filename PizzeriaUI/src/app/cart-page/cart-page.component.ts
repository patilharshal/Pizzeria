import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { MenuItem } from '../services/menu-item';
import { MenuService } from '../services/menu.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart
  orderId!: number;

  constructor(private cartService:CartService,private orderService: OrderService) {
    this.setCart();
  }

  ngOnInit(): void {
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCartItem(cartItem.menuItem.Id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem,quantityStr:string){
    const quantity = parseInt(quantityStr);
    this.cartService.changeItemQuantity(cartItem.menuItem.Id,quantity);
  }

  placeOrder(){
    const order = new Order();
    var menus:MenuItem[] = [];
    this.cart.items.forEach(
      item=>menus.push(item.menuItem)
      );

    order.Quantity = this.cart.items.length;
    order.Price = this.cart.totalPrice;
    this.orderService.placeOrder(order).subscribe({
      next: (orderId: any) => {
        this.orderId = orderId;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}
