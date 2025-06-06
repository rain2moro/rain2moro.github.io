/*
 * @Description: 
 * @Autor: Tlx
 * @Date: 2025-06-03 16:17:51
 * @LastEditors: Tlx
 * @LastEditTime: 2025-06-03 16:39:06
 */
import { test as setup, expect } from '@playwright/test';
import { STORAGE_STATE } from 'playwright/playwright.config';

setup('do login', async ({ page }) => {
  await page.goto('https://oa.cyitce.com/spa/portal/static4mobilelogin/index.html#/login?logintype=1');
  await page.getByRole('textbox', { name: '登录名' }).fill('tlx0812');
  await page.getByRole('textbox', { name: '登录密码' }).fill('Abcd#1234');
  await page.getByRole('button', { name: '登 录' }).click();
  await expect(page.getByRole('listitem').filter({ hasText: '已办事宜' }).getByRole('img')).toBeVisible();
  await page.context().storageState({ path: STORAGE_STATE });
  await page.close();
})