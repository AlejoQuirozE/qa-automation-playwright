import { test, expect } from '@playwright/test';
import { LoginPage } from './pagesobjets/LoginPage';
import { ProdutsPage } from './pagesobjets/ProductsPage';
import { Checkout } from './pagesobjets/Checkout';

test('purchase am item', async ({ page },testInfo) => {

    await page.goto('https://www.saucedemo.com/')
    const login =new LoginPage(page)
    await login.loginWithCredentials('standard_user','secret_sauce')
    //Se hace esto para tomar captura y que aparezca en el reporte se llama antes loginWithCredentials que es la que contiene todas clases para
    //luego tomar el screenshoot, esto es para que aparezca en el reporte. lo comento y lo hago dentro de cada funcion
    //await testInfo.attach('fillusername', {
      //body: await page.screenshot(),
      //contentType: 'image/png'
      //});

    await login.chechSucessfullLogin()
    const products =new ProdutsPage(page)
    const item = await products.getRandomItemData();
    const checkout= new Checkout(page)
    await checkout.allcalls()

    // De aca para abajo es sin POM
    //await checkout.CheckOutCredentials('Brolly', 'Sayayin', '05422')
    
    //await page.getByRole('textbox', {name:'Username'}).fill('standard_user')
    //await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce')
    //await page.getByRole('button', {name:'Login'}).click()

   

    //traer todos los elementos de la pagina
    //const itemContainer = await page.locator('#inventory_container .inventory_item').all() 

    //Calcular un numero random basado en la longitud del contenedor
    //const randomIndex = Math.floor(Math.random() * itemContainer.length)

    // se saca el item random
    //const randomItem = itemContainer[randomIndex]

    //const expectDescription = await randomItem.locator('.inventory_item_desc').innerText()
    //const expectName = await randomItem.locator('.inventory_item_name').innerText()
    //const expectPrice = await randomItem.locator('.inventory_item_price').innerText()

    //console.log(`Price: ${expectPrice} Name: ${expectName} Description: ${expectDescription}` )

    //await randomItem.getByRole('button', {name:'Add to cart'}).click()

    //se utiliza locator porque ya no es un elemento random
    //await page.locator('a.shopping_cart_link').click()

    //await page.pause()

    //expect (page.getByRole('button', {name:'Checkout'})).toBeVisible()
    
    //const actualName = await page.locator('.inventory_item_name').innerText()
    //const actualDescription = await page.locator('.inventory_item_desc').innerText()
    //const actualPrice = await page.locator('.inventory_item_price').innerText()

    //expect(actualName).toEqual(expectName)
    //expect(actualDescription).toEqual(expectDescription)
    //expect(actualPrice).toEqual(expectPrice)

    //Con esta prueba se busca tomar un elemento de aleatorio y luego de ser seleecionado validar en el carrito de compras que sea igual 
    //al seleccionado aleatoriamente
    //await page.getByRole('button', {name:'Checkout'}).click()
    //await page.getByRole('textbox', {name:'First Name'}).fill('Brolly')
    //await page.getByRole('textbox', {name:'Last Name'}).fill('Sayayin')
    //await page.getByRole('textbox', {name:'Zip/Postal Code'}).fill('05422')

    //await page.getByRole('button', {name:'Continue'}).click()
    //await page.getByRole('button', {name:'Finish'}).click()

    //await page.pause()
    //await expect (page.getByRole('heading', {name:'Thank you for your order!'})).toBeVisible()

   // await page.waitForTimeout(6000);
    //await page.close()

    //Termina de hacer el check out y retorna al home
  
  
  });

  test('purchaseanitem2', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/')
  const login =new LoginPage(page)
  await login.loginWithCredentials('standard_user','secret_sauce')
 // await ejecucion.fillUsername('standard_user')
 // await ejecucion.fillPaswword('secret_sauce')
 // await ejecucion.clicOnlogin()

  //await page.getByRole('textbox', {name:'Username'}).fill('standard_user')
    //await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce')
    //await page.getByRole('button', {name:'Login'}).click()
    await page.waitForTimeout(2000)
    await page.close()

});