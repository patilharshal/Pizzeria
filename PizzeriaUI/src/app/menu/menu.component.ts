import { Component, OnInit,OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';
import { SubscribableOrPromise, Subscription } from 'rxjs';
import { MenuItem } from 'src/app/services/menu-item';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,OnDestroy  {

  constructor(private readonly menuService: MenuService, private router: Router,private readonly cartService: CartService) { }

  public menuItems: MenuItem[] = [];
  private subscription!: Subscription;


  ngOnInit(): void {
    this.subscription = this.menuService.getMenuItems().subscribe({
      next: (menuItems) => {
        this.menuItems = menuItems;
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('done!');
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public customize(item: MenuItem, quantity: number) {
    this.router.navigate(['/customize', { item: JSON.stringify(item), quantity }]);
  }

  addToCart(menuItem:MenuItem){
    this.cartService.addToCart(menuItem);
    this.router.navigateByUrl('/cart-page');
  }

}
