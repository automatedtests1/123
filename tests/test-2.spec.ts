import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/dashboard/product');
  await page.goto('https://shopdemo-alex-hot.koyeb.app/login');
});await page.getByPlaceholder('Search Products').click();
await page.getByPlaceholder('Search Products').fill('1');
await page.getByPlaceholder('Search Products').press('Enter');
await page.getByPlaceholder('Search Products').fill('');
await page.getByRole('button', { name: 'your cart is empty' }).click();
await page.getByLabel('close the cart').click();
await page.getByRole('link', { name: 'MERN Store' }).click();
await page.getByRole('img').nth(1).click();
await page.getByRole('img').first().click();
await page.getByLabel('Go to next slide').click();
