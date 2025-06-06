/*
 * @Description: 
 * @Autor: Tlx
 * @Date: 2025-06-04 10:27:10
 * @LastEditors: Tlx
 * @LastEditTime: 2025-06-04 10:36:25
 */
import { test as teardown } from '@playwright/test';
import { STORAGE_STATE } from 'playwright/playwright.config';
import fs from 'fs';
teardown('do logout', async ({ page }) => {
  console.log('do logout');
  if(!fs.existsSync(STORAGE_STATE)) {
    console.log('storage state file does not exist, skipping logout');
    return;
  } else {
    fs.writeFileSync(STORAGE_STATE, '{}', 'utf-8')
     await page.close();
  }
  await page.close();
})