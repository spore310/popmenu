import data from "@/utils/json/restaurant_data.json";
import { Restaurants } from "./models/chainRestaurant";

export const popmenuDataConvert = () => {
  const inputObject: any = {
    name: "testGroup",
    restaurants: [],
  };
  //loops through the restaurants
  data.restaurants.forEach((_restaurant) => {
    const restaurants: any = { name: _restaurant.name, menus: [] };
    //loops through the menus
    _restaurant.menus.map((menu: any) => {
      const menus: any = { name: menu.name };
      //loops through the individual menus
      if (menu?.dishes?.length > 0) {
        menus.menus = [...menu?.dishes];
      } else {
        menus.menus = [...menu.menu_items];
      }
      restaurants.menus.push(menus);
    });
    inputObject.restaurants = [...inputObject.restaurants, restaurants];
  });
  return new Restaurants(inputObject.name, inputObject.restaurants);
};
export const JSONConvertTool = (_restaurants: Restaurants) => {
  let restaurants: any[] = [];
  let obj: any = {};
  //   restaurants.getRestaurants.forEach((restaurant) => {
  //     const obj: any = {};
  //     obj.name = restaurant.getName;
  //     restaurant.getAllMenus.map((menus) => {
  //       const temp3: any = [];
  //       const invalidItems: any[] = [];
  //       menus.getAllItems.forEach((item) => {});
  //       temp3.push({
  //         name: menus.getMenuName,
  //         menus: menus.getAllItems,
  //         invalidItems: menus.getInvalidItems,
  //       });
  //       obj.menus = [...obj.menus, temp3];
  //       console.log(obj);
  //     });
  //     list.push(obj);
  //   });

  //loop through restaurant class
  _restaurants.getRestaurants.forEach((restaurant) => {
    obj = {};
    obj.menus = [];
    obj.name = restaurant.getName;
    let list2: any = [];
    restaurant.getAllMenus.forEach((menu) => {
      list2.push({
        MenuName: menu.getMenuName,
        menu: menu.getAllItems,
        invalidItems: menu.getInvalidItems,
      });
    });
    obj.menus.push(...list2);

    restaurants.push(obj);
  });
  return { restaurants };
};
