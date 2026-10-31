import { test } from '@playwright/test';
import { SelectProducts } from '../src/pages/men-cloth.page';

test('Tommy - tenis', async ({ page }) => {
  await page.goto('/');

  const addProducts = new SelectProducts(page);
  await addProducts.addProducts();
});

