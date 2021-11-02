import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CustomizePizzaComponent } from './customize-pizza/customize-pizza.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent, pathMatch: 'full' },
  {path: '', component: MenuComponent, pathMatch: 'full' },
  {path: 'cart-page', component: CartPageComponent, pathMatch: 'full' },
  {path: 'customize', component: CustomizePizzaComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
