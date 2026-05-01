import { expect, Locator, Page } from "@playwright/test"

export class Checkout{

private readonly checkout : Locator
private readonly firstname : Locator
private readonly lastname : Locator
private readonly postal: Locator
private readonly continue: Locator
private readonly finish: Locator
private readonly page : Page

constructor(page: Page){
    this.page = page
    this.checkout = page.getByRole('button', {name:'Checkout'})
    this.firstname = page.getByRole('textbox', {name:'First Name'})
    this.lastname = page.getByRole('textbox', {name:'Last Name'})
    this.postal = page.getByRole('textbox', {name:'Zip/Postal Code'})
    this.continue = page.getByRole('button', {name:'Continue'})
    this.finish = page.getByRole('button', {name:'Finish'})

}  


async clicheckout (){
    await this.checkout.click()
}


async fillfisrtname(){

    await this.firstname.fill('Brolly')
}


async fillLastname(){
   await this.lastname.fill('Sayayin')
   
}
 

async fillpostal(){
    await this.postal.fill('05422')
 }


 async cliccontinue (){
    await this.continue.click()
}

async clicfinish (){
    await this.finish.click()

   // await this.page.waitForTimeout(3000);
    await expect (this.page.getByRole('heading', {name:'Thank you for your order!'})).toBeVisible()

    await this.page.waitForTimeout(6000);
    await this.page.close()
}

async allcalls (){
    await this.clicheckout()
    await this.fillfisrtname()
    await this.fillLastname()
    await this.fillpostal()
    await this.cliccontinue()
    await this.clicfinish()

}

}
