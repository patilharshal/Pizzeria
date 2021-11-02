import { Customization } from './customization';
import { MenuItem } from '../../services/menu-item';

export class Order {
    public OrderId!: number;
    public MenuItem!: MenuItem;
    public Quantity!: number;
    public Customization!: Customization;
    public Price!: number;
}
