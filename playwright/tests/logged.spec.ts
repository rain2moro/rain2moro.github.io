/*
 * @Description: 
 * @Autor: Tlx
 * @Date: 2025-06-03 16:23:15
 * @LastEditors: Tlx
 * @LastEditTime: 2025-06-06 10:12:36
 */
import { test, expect } from '@playwright/test';
test('logged', async ({ page }) => {
  await page.goto('https://oa.cyitce.com/spa/coms/static4mobile/index.html#/menu-preview?id=appDefaultPage&checkAccess=1');
  await expect(page.getByRole('listitem').filter({ hasText: '已办事宜' }).getByRole('img')).toBeVisible();
  await page.screenshot({path: 'screenshot/logged.png', fullPage: true});
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('listitem').filter({ hasText: '新建流程' }).getByRole('img').click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: '数藤云计算-项目管理类 (9)' }).click();
  await page1.getByText('数藤云计算-周报填写审批表单').click();
  await page1.getByText('请选择').click();
  // const el  = await page1.locator('.am-picker-col-indicator');
  const el  = await page1.locator('.am-picker-col-mask');
  // const el1= await page1.locator('am-picker-col-content');
  // await expect(el1).toBeVisible();
  await page1.evaluate(() => {
    const element = document.querySelector('.am-picker--col-content');
    element.setAttribute('style', 'transform: translate3d(0px, -34px, 0px);');
  })
  const top = (await el.boundingBox()).y;
  const width = (await el.boundingBox()).width;
  // await page1.mouse.move(width/2, 300, { steps: 10 });
  await page1.mouse.move(100, 100, { steps: 10 });
  await page1.click('document');
  await page1.mouse.move(width/2, top + 17, { steps: 10 });
  // 鼠标按下
  await page1.mouse.down();
  // 鼠标上移34px
  await page1.mouse.move(width/2, top - 17, { steps: 10 });
  // 鼠标松开
  await page1.mouse.up();
  await page1.mouse.move(width/2, top + 17, { steps: 10 });
  // 鼠标按下
  await page1.mouse.down();
  // 鼠标上移34px
  await page1.mouse.move(width/2, top - 17, { steps: 10 });
  // 鼠标松开
  await page1.mouse.up();
  await page1.getByText('确定').click();
})