import { MenuItem, MenuItemInput } from "../types/menuItem";
import { validateMenuItems } from "../validations";

/**class definition **/
export class MenuItems {
  //it is possible that all menu items will fail validation so we account for this
  private menuItems: MenuItem[] | [];
  private invalidMenuItems: MenuItem[] | [];
  //expecting sanitized array of menu items
  constructor(private _menuItem: MenuItemInput[]) {
    const { menuItemsArray, invalidItemsArray } = validateMenuItems(
      this._menuItem
    );
    this.menuItems = menuItemsArray;
    this.invalidMenuItems = invalidItemsArray;
  }
  //getter for menu items to protect sensitive information
  get getAllItems() {
    return this.menuItems;
  }
  //method to add new menu items, expecting an array of menu items
  public addMenuItem(items: MenuItemInput[]) {
    if (items.length > 0) {
      const newItems = validateMenuItems(
        items,
        this.menuItems.length
      ).menuItemsArray?.filter((item: MenuItem) => item?.isInvalid === false);
      this.menuItems = [...this.menuItems, ...newItems];
    }
  }

  public getItemById(id: string): MenuItem | [] {
    if (this.menuItems.length > 0) {
      return this.menuItems[this.menuItems.findIndex((item) => item.id === id)];
    } else {
      return [];
    }
  }
}
