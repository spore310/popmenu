import { RestaurantInput } from "../types/Restaurant";
import { RestaurantsInput } from "../types/chainRestaurant";
import { hasNoDuplicateNames, isNameValid } from "../validations";
import { Restaurant } from "./Restaurant";

export class Restaurants {
  private restaurants: Restaurant[] = [];
  private restaurantGroup: string = "";
  constructor(private _name: string, private _restaurants: RestaurantsInput[]) {
    if (hasNoDuplicateNames(_restaurants) && isNameValid(this._name)) {
      this.restaurantGroup = this._name;
      this.restaurants =
        this._restaurants.length > 0
          ? this._restaurants?.map((rest: any) => {
              return new Restaurant(rest.name, rest.menus);
            })
          : [];
    }
  }
  public addRestaurant(restaurant: RestaurantsInput[]) {
    this.restaurants = [
      ...this.restaurants,
      ...restaurant.map((rest) => new Restaurant(rest.name, rest.Restaurants)),
    ];
  }
  get getRestaurants(): Restaurant[] | [] {
    return this.restaurants;
  }
}
