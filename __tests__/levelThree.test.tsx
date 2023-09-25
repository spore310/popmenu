/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'
import dbData from '@/utils/json/restaurant_data.json'
import { popmenuDataConvert, JSONConvertTool} from '@/utils'
const test=  [{name: 'lunch', menus: [{name: 'burger', price:12}]}]
const test2=  [{name: 'dinner', menus: [{name: 'pasta', price:13}]}]
const test3=  [{name: 'lunch', menus: [{name: 'burger', price:12}]}]

describe('Level 3', () => {
    it('Creates a Restaurant with menu items', () => {
        const brand = popmenuDataConvert()
        expect(brand.getRestaurants.length >= 1).toBeTruthy()
    })
    it('Converts', ()=>{
        const brand = popmenuDataConvert()
        const {restaurants} = JSONConvertTool(brand);
        expect(restaurants.length === 2).toBeTruthy();
        expect(restaurants[0].name === `Poppo's Cafe`).toBeTruthy();
        expect(restaurants[0].menus.length === 2).toBeTruthy()
        console.log(restaurants[0].menus.length)
        expect(restaurants[1].menus.length === 2).toBeTruthy()
        expect(restaurants[1].name === `Casa del Poppo`).toBeTruthy();
    })
  })