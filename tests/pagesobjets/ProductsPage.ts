import { expect, Locator, Page } from "@playwright/test"
import { count } from "node:console"

export class ProdutsPage{

private readonly itemContainer : Locator
private readonly shoppingLink : Locator
private readonly page : Page
private readonly actualName : Locator
private readonly actualDescription : Locator
private readonly actualPrice : Locator
private readonly checkout : Locator



constructor(page: Page){
    this.page = page
    this.itemContainer = page.locator("#inventory_container .inventory_item")
    this.shoppingLink = page.locator("a.shopping_cart_link")
    //this.expectPrice = page.locator(".inventory_item_price")
    this.actualName = page.locator(".inventory_item_name")
    this.actualPrice = page.locator('.inventory_item_price')
    this.actualDescription = page.locator(".inventory_item_desc")
    this.checkout = page.getByRole('button', {name:'Checkout'})
 

}
async getRandomItemData(){
    //traer todos los elementos de la pagina
    const items = await this.itemContainer.all()
    //Calcular un numero random basado en la longitud del contenedor
    const randomIndex = Math.floor(Math.random() * items.length)
    // se saca el item random
    const randomItem = items[randomIndex]
    const expectDescription = await randomItem.locator('.inventory_item_desc').innerText()
    const expectName = await randomItem.locator('.inventory_item_name').innerText()
    const expectPrice = await randomItem.locator('.inventory_item_price').innerText()
    console.log(`Price: ${expectPrice} Name: ${expectName} Description: ${expectDescription}` )
    await randomItem.getByRole('button', {name:'Add to cart'}).click()
    //se utiliza locator porque ya no es un elemento random
    await this.shoppingLink.click()
    await this.page.waitForTimeout(3000);
    await expect (this.checkout).toBeVisible()
    const actualName1 = await this.actualName.innerText()
    const actualDescription1 = await this.actualDescription.innerText()
    const actualPrice1 = await this.actualPrice.innerText()
    expect(actualName1).toEqual(expectName)
    expect(actualDescription1).toEqual(expectDescription)
    expect(actualPrice1).toEqual(expectPrice)
    return { expectDescription, expectName, expectPrice  };
}
 
}
