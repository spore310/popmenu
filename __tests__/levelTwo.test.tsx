/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { Restaurant } from '@/utils/models/Restaurant'
import { RestaurantInput } from '@/utils/types/Restaurant'

const test=  [{name: 'lunch', menus: [{name: 'burger', price:12}]}]
const test2=  [{name: 'dinner', menus: [{name: 'pasta', price:13}]}]
const test3=  [{name: 'lunch', menus: [{name: 'burger', price:12}]}]
describe('Level 2', () => {
  it('Creates a Restaurant with menu items', () => {
    const menus: any[]= [];
    const store = new Restaurant('Chets',test);
    store.addMenu(test2);
    store.getAllMenus.map((item)=>{
        const menuObject = {name: item.getMenuName, menu: item.getAllItems}
        menus.push({...menuObject})
    })
    const RestaurantObject = {name: store.getName,menus}
    expect(RestaurantObject.menus[1].menu[0].name === 'pasta').toBeTruthy();
  })
  it('Should not allow users to make duplicate menu', ()=>{
    const store = new Restaurant('Chets', test);
    try{
        store.addMenu(test3);
    }catch(err){
        console.log(err)
    }
  })
})