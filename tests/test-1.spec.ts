import { randomUUID } from 'crypto';
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/dashboard/product');
  await page.goto('https://shopdemo-alex-hot.koyeb.app/login');
  await page.getByRole('link', { name: 'Contact Us' }).first().click();
  await page.locator('li').filter({ hasText: 'Contact Us' }).first().click();
  await page.getByPlaceholder('You Full Name').click();
  await page.getByPlaceholder('You Full Name').fill('test');
  await page.getByPlaceholder('Your Email Address').click();
  await page.getByPlaceholder('Your Email Address').fill('xotabu4@gmail.com');
  await page.getByPlaceholder('Please Describe Your Message').click();
  await expect(page.getByPlaceholder('Please Describe Your Message')) toBeEmpty();
  await page.getByRole('button', { name: 'Submit' }).click();
});