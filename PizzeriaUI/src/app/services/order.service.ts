import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public constructor(private http: HttpClient) { }

  public placeOrder(order: Order) {
    return this.http.post(`https://localhost:44350/api/order`, order);
  }
}
