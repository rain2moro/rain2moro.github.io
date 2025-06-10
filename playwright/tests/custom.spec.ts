/*
 * @Description:
 * @Autor: Tlx
 * @Date: 2025-05-28 15:49:07
 * @LastEditors: Tlx
 * @LastEditTime: 2025-06-10 11:15:09
 */
import { test, expect, chromium } from '@playwright/test'
import { playAudit } from 'playwright-lighthouse'
test.describe('Submit Form Tests', () => {
  // test.beforeEach(async ({ page }) => {

  // });
  test('get started link', async ({page}) => {
    await page.goto('/');
    await expect(page.url()).toBe('https://rain2moro.github.io/')
    // await expect(page).toHaveScreenshot('screenshot/get-started-link.png',  {
    //   mask: [page.locator('.xxx')]
    // } );
    // const browser = await chromium.launch({
    //   args: ['--remote-debugging-port=9222'],
    // })
    // const context = await browser.newContext()
    // const page = await context.newPage()

    // await page.goto('https://rain2moro.github.io/')
    // await expect(page.url()).toBe('https://rain2moro.github.io/')

    // await playAudit({
    //   page: page,
    //   port: 9222,
    //   reports: {
    //     formats: {
    //       json: true,
    //       html: true,
    //       csv: true,
    //     },
    //   },
    //   thresholds: {
    //     performance: 50,
    //   },
    // })
  })
})
