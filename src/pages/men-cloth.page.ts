import test, { expect, Page } from "@playwright/test"

export class SelectProducts {
    protected readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async addProducts() {

        test.slow()
        await this.page.getByRole('link', { name: 'Hombre', exact: true }).hover()
        const panel = this.page.locator('.qaaswpanama-tommyapps-0-x-panel')
        await panel.locator('a[href="/hombre/zapatos"]').hover()

        await panel.getByRole('link', { name: 'Tenis', exact: true }).click()

       await expect(this.page.getByRole('heading', { name: 'Tenis para Hombre' })).toBeVisible()

        //await this.page.waitForTimeout(1000);
        await this.page.getByRole('button', { name: 'Tallas' }).click()
        //agregar este coemnt

    }




}
