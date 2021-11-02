import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customization } from 'src/app/shared/models/customization';
import { MenuItem } from 'src/app/services/menu-item';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-customize-pizza',
  templateUrl: './customize-pizza.component.html',
  styleUrls: ['./customize-pizza.component.css']
})
export class CustomizePizzaComponent implements OnInit {

  public isLinear = false;
  public crustFormGroup!: FormGroup;
  public sauceFormGroup!: FormGroup;
  public cheeseFormGroup!: FormGroup;
  public toppingsFormGroup!: FormGroup;
  public customization!: Customization;
  public orderId!: number;
  public currentPrice!: number;
  @Input() public menuItem!: MenuItem;
  @Input() public quantity!: number;

  private previousCrust!: string;
  private previousSauce!: string;

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.crustFormGroup = this.formBuilder.group({
      crustCtrl: ['', Validators.required]
    });
    this.sauceFormGroup = this.formBuilder.group({
      sauceCtrl: ['', Validators.required]
    });
    this.cheeseFormGroup = this.formBuilder.group({
      cheeseCtrl: ['', Validators.nullValidator]
    });
    this.toppingsFormGroup = this.formBuilder.group({
      pepperoni: ['', Validators.nullValidator],
      mushrooms: ['', Validators.nullValidator],
      sausage: ['', Validators.nullValidator],
      blackOlives: ['', Validators.nullValidator],
      paneer: ['', Validators.nullValidator],
      goldenCorn: ['', Validators.nullValidator],
      jalapeno: ['', Validators.nullValidator],
      greenPeppers: ['', Validators.nullValidator],
      redPeppers: ['', Validators.nullValidator],
      babycorn: ['', Validators.nullValidator],
    });

    this.route.params.subscribe({
      next: (data) => {
        this.menuItem = JSON.parse(data.item);
        this.quantity = JSON.parse(data.quantity);
        this.currentPrice = this.menuItem.Price;
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

  public placeOrder() {
    this.customization = new Customization();
    if (this.crustFormGroup.dirty && this.crustFormGroup.valid) {
      this.customization.CrustSize = this.crustFormGroup.value.crustCtrl;
    }
    if (this.sauceFormGroup.dirty && this.sauceFormGroup.valid) {
      if (this.crustFormGroup.value.sauceCtrl) {
        this.customization.Sauce = this.crustFormGroup.value.sauceCtrl;
      }
    }
    if (this.cheeseFormGroup.dirty && this.cheeseFormGroup.valid) {
      if (this.crustFormGroup.value.cheeseCtrl) {
        this.customization.ExtraCheese = this.crustFormGroup.value.cheeseCtrl;
      }
    }

    if (this.toppingsFormGroup.dirty && this.toppingsFormGroup.valid) {
      if (this.toppingsFormGroup.value.pepperoni) {
        this.customization.Toppings.push('Pepperoni');
      }
      if (this.toppingsFormGroup.value.mushrooms) {
        this.customization.Toppings.push('Mushrooms');
      }
      if (this.toppingsFormGroup.value.sausage) {
        this.customization.Toppings.push('sausage');
      }
      if (this.toppingsFormGroup.value.blackOlives) {
        this.customization.Toppings.push('Black Olives');
      }
      if (this.toppingsFormGroup.value.paneer) {
        this.customization.Toppings.push('Paneer');
      }
      if (this.toppingsFormGroup.value.goldenCorn) {
        this.customization.Toppings.push('Golden Corn');
      }
      if (this.toppingsFormGroup.value.jalapeno) {
        this.customization.Toppings.push('Jalapeno');
      }
      if (this.toppingsFormGroup.value.greenPeppers) {
        this.customization.Toppings.push('Green Peppers');
      }
      if (this.toppingsFormGroup.value.redPeppers) {
        this.customization.Toppings.push('Red Peppers');
      }
      if (this.toppingsFormGroup.value.babycorn) {
        this.customization.Toppings.push('Baby Corn');
      }
    }

    this.order();
  }

  public selectCrust(event:any) {
    if (this.previousCrust) {
      this.updatePrice(-20);
    }
    this.previousCrust = event.value;
    if (event.value) {
      this.updatePrice(20);
    } else {
      this.updatePrice(-20);
    }
  }

  public selectSauce(event:any) {
    if (this.previousSauce) {
      this.updatePrice(-20);
    }
    this.previousSauce = event.value;
    if (event.value) {
      this.updatePrice(10);
    } else {
      this.updatePrice(-10);
    }
  }

  public selectExtraCheese(event:any) {
    if (event.checked) {
      this.updatePrice(20);
    } else {
      this.updatePrice(-20);
    }
  }

  public selectToppings(event:any) {
    if (event.checked) {
      this.updatePrice(20);
    } else {
      this.updatePrice(-20);
    }
  }

  public resetItems() {
    this.currentPrice = this.menuItem.Price;
  }

  private updatePrice(value: number) {
    this.currentPrice += value;
  }


  private order() {
    const order = new Order();
    order.Customization = this.customization;
    order.MenuItem = this.menuItem;
    order.Quantity = this.quantity;
    order.Price = this.currentPrice;
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
