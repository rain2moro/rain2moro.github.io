/*
 * @Description: 
 * @Autor: Tlx
 * @Date: 2025-05-28 15:49:07
 * @LastEditors: Tlx
 * @LastEditTime: 2025-05-30 09:27:47
 */
import { test, expect } from '@playwright/test';
test.describe('Submit Form Tests', () => {

  // test.beforeEach(async ({ page }) => {

  // });
  test('get started link', async ({ page }) => {

    await page.goto('https://rain2moro.github.io/');
    await expect(page.url()).toBe('https://rain2moro.github.io/');
  });
});