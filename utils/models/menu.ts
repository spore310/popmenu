import { MenuItem, MenuItemInput } from "../types/menuItem";
import { isNameValid } from "../validations";
import { MenuItems } from "./menuItem";

export class Menu {
  private name: string = "";
  private menu: MenuItems;
  private isActive: boolean = false;
  constructor(private _name: string, private _menu: MenuItemInput[]) {
    if (!isNameValid(this._name)) {
      throw {
        message: "Menu name cannot be empty or contain special characters",
        popmenu: true,
      };
    }
    this.name = this._name;
    this.menu = new MenuItems(this._menu);
  }
  get getAllItems() {
    return this.menu.getAllItems;
  }
  get getMenuName() {
    return this.name;
  }
  public addMenuItem(item: MenuItemInput[]) {
    this.menu.addMenuItem(item);
  }
  get getInvalidItems() {
    return this.menu.invalidItems;
  }
  public getItemById(id: string) {
    return this.menu.getItemById(id);
  }
}
