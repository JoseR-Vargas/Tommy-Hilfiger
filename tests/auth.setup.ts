import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
    await page.goto('/');
    const myAccount = page.locator('[class="gray flex items-center nr4"]')
    await myAccount.click()
    await page.getByRole('button', { name: 'Ingresar con e-mail y contraseña' }).click()
    const emailInput = page.locator('[placeholder="Ej: ejemplo@gmail.com"]')
    await emailInput.pressSequentially('jrafaelvargasn@gmail.com', { delay: 100 })

    await expect(emailInput).toHaveValue('jrafaelvargasn@gmail.com')

    await page.locator('[placeholder="Ingresa tu contraseña"]').pressSequentially('Lgmd2233.', { delay: 100 })
    await page.getByRole('button', { name: 'Entrar' }).click()

    await expect(page.getByRole('link', {name: 'TOMMY'})).toBeVisible()

    await page.context().storageState({ path: authFile });
});

