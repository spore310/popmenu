import { RestaurantInput } from "../types/Restaurant";
import { MenuItemInput } from "../types/menuItem";
import { hasNoDuplicateNames, isNameValid } from "../validations";
import { Menu } from "./menu";

export class Restaurant {
  private name: string = "";
  private menus: Menu[] = [];
  constructor(private _name: string, private _menus: RestaurantInput[]) {
    if (!isNameValid(this._name)) {
      throw {
        popmenu: true,
        message: "Restaurant name cannot be empty or special characters",
      };
    } else {
      this.name = this._name;
    }
    if (this._menus.length > 0 && hasNoDuplicateNames(this._menus)) {
      this.menus = this._menus.map((menu) => new Menu(menu.name, menu.menus));
    } else {
      throw {
        popmenu: true,
        message: "Restaurant menus cannot be empty",
      };
    }
  }
  public addMenu(menus: RestaurantInput[]) {
    this.menus = [
      ...this.menus,
      ...menus.map((menu) => new Menu(menu.name, menu.menus)),
    ];
  }
  get getAllMenus(): Menu[] {
    return this.menus;
  }
  get getName(): string {
    return this.name;
  }
}
