/*
 * @Description: 
 * @Autor: Tlx
 * @Date: 2025-06-03 16:06:10
 * @LastEditors: Tlx
 * @LastEditTime: 2025-06-13 09:34:21
 */
/*
 * @Description:
 * @Autor: Tlx
 * @Date: 2025-05-28 15:49:07
 * @LastEditors: Tlx
 * @LastEditTime: 2025-06-10 14:33:51
 */
import { test, expect } from '@playwright/test'
test.describe('Submit Form Tests', () => {
  test('get started link', async ({page}) => {
    await page.goto('/');
    await page.getByRole('textbox', { name: '姓名：' }).click();
    await page.getByRole('textbox', { name: '姓名：' }).fill('张三');
    await page.getByRole('textbox', { name: '邮箱：' }).click();
    await page.getByRole('textbox', { name: '邮箱：' }).fill('888888');
    await page.getByRole('textbox', { name: '密码：' }).click();
    await page.getByRole('textbox', { name: '密码：' }).fill('123456');
    await page.getByRole('button', { name: '提交表单' }).click();
    await expect(page.getByText('提交成功')).toBeVisible();

  })
  test('test1', async({page}) => {
    await page.goto('https://www.baidu.com');
  })

  test('test2', async({page}) => {
    await page.goto('https://www.baidu.com');
  })

  test('test3', async({page}) => {
    await page.goto('https://www.baidu.com');
  })
})
