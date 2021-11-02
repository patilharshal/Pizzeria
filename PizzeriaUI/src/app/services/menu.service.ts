import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  public getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`https://localhost:44350/api/menu`);
  }

}
