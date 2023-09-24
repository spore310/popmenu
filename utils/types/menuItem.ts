export interface MenuItemInput {
  name: string;
  price: number;
}

export interface MenuItem extends MenuItemInput {
  id: string;
  isInvalid?: boolean;
}
