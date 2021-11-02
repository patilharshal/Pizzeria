import { MenuItem } from "src/app/services/menu-item";

export class CartItem{

  constructor(menuItem:MenuItem){
    this.menuItem =menuItem;
    this.price;
  }

  menuItem!: MenuItem;
  quantity:number=1;

  get price() : number{
    return this.menuItem.Price * this.quantity;
  }

}
