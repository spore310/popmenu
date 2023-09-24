import { RestaurantInput } from "../types/Restaurant";
import { RestaurantsInput } from "../types/chainRestaurant";
import { hasNoDuplicateNames, isNameValid } from "../validations";
import { Restaurant } from "./Restaurant";

export class Restaurants {
  private Restaurants: Restaurant[] = [];
  constructor(private _name: string, private _Restaurants: RestaurantsInput[]) {
    if (hasNoDuplicateNames(_Restaurants) && !isNameValid(this._name)) {
      this.Restaurants = this._Restaurants.map(
        (rest) => new Restaurant(rest.name, rest.Restaurants)
      );
    }
  }
  public addRestaurant(restaurant: RestaurantsInput[]) {
    this.Restaurants = [
      ...this.Restaurants,
      ...restaurant.map((rest) => new Restaurant(rest.name, rest.Restaurants)),
    ];
  }
  get getRestaurants(): Restaurant[] | [] {
    return this.Restaurants;
  }
}
