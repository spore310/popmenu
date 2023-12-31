import { MenuItem, MenuItemInput } from "./types/menuItem";

export const isPriceValid = (price: number): boolean => {
  const stringPrice = price.toString();
  const decimalCount = stringPrice?.slice(
    stringPrice?.indexOf(".") + 1
  )?.length;
  return decimalCount <= 2;
};
export const validateMenuItems = (
  items: MenuItemInput[],
  countId: number = 0
) => {
  /**
   * Using object keys to keep count of duplicates.
   * Using countId to count id instead of index of array for consistency against validation
   **/
  const nameChecker: any = {};
  //   let countId: number = 0;
  const invalidItems: MenuItem[] = [];
  const menuItems: MenuItem[] | [] = items?.map((item: MenuItemInput) => {
    const newItem: MenuItem | [] = {
      name: item?.name,
      price: item?.price,
      id: `${countId}`,
      isInvalid: false,
    };
    if (!isNameValid(item?.name)) {
      throw {
        message: "Menu item name cannot be empty or contain special characters",
        popmenu: true,
      };
    }
    //Checks if items is a new entry and if the price is valid
    if (
      !nameChecker[item?.name] &&
      isPriceValid(newItem?.price) &&
      isNameValid(item?.name)
    ) {
      newItem.price = Number(newItem?.price?.toFixed(3));
      countId++;
      nameChecker[item?.name] = 1;
    } else {
      newItem.isInvalid = true;
      newItem.id = "";
      invalidItems.push(newItem);
    }
    return newItem;
  });
  return {
    menuItemsArray: menuItems.filter(
      (item: MenuItem) => item.isInvalid === false
    ),
    invalidItemsArray: invalidItems,
  };
};

export const isNameNotEmpty = (name: string): boolean => !!name.trim();

export const isNameValid = (name: string): boolean => {
  return isNameNotEmpty(name) && !/[^a-zA-Z0-9 ' , !]/.test(name);
};
