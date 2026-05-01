import { expect, Locator, Page, TestInfo } from "@playwright/test"

export class LoginPage{

private readonly usernameTexbox : Locator
private readonly passwordTextbox : Locator
private readonly loginButton : Locator
private readonly shoppinCarIcon: Locator
private readonly page : Page


constructor(page: Page){
    this.page = page
    this.usernameTexbox = page.getByRole('textbox', {name:'Username'})
    this.passwordTextbox = page.getByRole('textbox', {name:'Password'})
    this.loginButton = page.getByRole('button', {name:'Login'})
    this.shoppinCarIcon = page.locator("xpath=//*[@id='shopping_cart_container']")
}

async fillUsername(username:string){

    await this.usernameTexbox.fill(username)
    //await this.page.screenshot({path:'Screenshots/loginusename.png'})
}


async fillPaswword(password:string){
   await this.passwordTextbox.fill(password)
   //await this.page.screenshot({path:'Screenshots/loginfillpass.png'})
}
 

async clicOnlogin (){
    await this.loginButton.click()
   // await this.page.screenshot({path:'Screenshots/login.png',fullPage: true})

    
}


async loginWithCredentials(username: string, password: string){
    await this.fillUsername(username)
    await this.fillPaswword(password)
    await this.clicOnlogin()

}

async chechSucessfullLogin(){
    await expect (this.shoppinCarIcon).toBeVisible()
}

}
