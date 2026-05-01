import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');
  await page.getByRole('button', { name: 'Conocer medios de pago Medios' }).click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'Conocer medios de pago Medios' }).click();
  await page.getByRole('button', { name: 'Conocer medios de pago Medios' }).click();
});