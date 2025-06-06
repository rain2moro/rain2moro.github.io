/*
 * @Description: 
 * @Autor: Tlx
 * @Date: 2025-06-04 09:57:57
 * @LastEditors: Tlx
 * @LastEditTime: 2025-06-05 14:08:45
 */
import { test, expect, chromium } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse'
test('PAAS Test', async () => {
  const browser = await chromium.launch({
    args: ['--remote-debugging-port=9222', '--start-maximized'],
  })
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto('https://v2-0-app-dev.cqcyit.com:20305/')
  await page.waitForTimeout(2000);
  await playAudit({
    page: page,
    port: 9222,
    reports: {
      formats: {
        // json: true,
        html: true,
        // csv: true,
      },
      name: 'page Audit Report' + page.title(),
      
    },
    thresholds: {
      performance: 20,
    },
  })
  

  await page.getByRole('textbox', { name: '用户名' }).click();
  await page.getByRole('textbox', { name: '用户名' }).fill('13123456789');
  await page.getByRole('textbox', { name: '密码' }).fill('123456'); 
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('main').locator('div').filter({ hasText: '安全生产中心' }).nth(3).click();
  const page1 = await page1Promise; // 等待新页面打开
  await playAudit({
    page: page1,
    port: 9222,
    reports: {
      formats: {
        // json: true,
        html: true,
        // csv: true,
      },
      name: 'page Audit Report' + page1.title(),
    },
    thresholds: {
      performance: 20,
    },
  })
  await page1.getByRole('combobox', { name: '岗位名称' }).click();
  await page1.getByTitle('清洁工').locator('div').click();
  await page1.getByRole('button', { name: '查询' }).click();

})