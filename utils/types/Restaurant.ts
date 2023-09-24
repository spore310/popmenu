import { Menu } from "../models/menu";
import { MenuItemInput } from "./menuItem";

export interface RestaurantInput {
  name: string;
  menus: MenuItemInput[];
}
