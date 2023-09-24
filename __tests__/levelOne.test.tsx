/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import { MenuItems } from '@/utils/models/menuItem'
import { Menu } from '@/utils/models/menu'

const test = [{name: 'burger', price:2.5}]
describe('Level 1', () => {
  it('Creates a menu and adds a new menu item', () => {
    const menu = new Menu('lunch',test);
    menu.addMenuItem([{name:'chicken', price: 4}])
    expect(menu.getAllItems.length === 2).toBeTruthy()
  })
  it('Menu cannot have no name or invalid characters', ()=>{
    const menu = new Menu('lunch',test);
    const invlaidName = [{name:'', price: 3}];
    try{
    menu.addMenuItem(invlaidName)
    }catch(e){
    expect(menu.getAllItems).toBeTruthy()
  }
  })
})