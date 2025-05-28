# Test info

- Name: Submit Form Tests >> get started link
- Location: C:\Users\admin\Desktop\z7z8\rain2moro.github.io\playwright\tests\test-submit.spec.ts:14:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "https://rain2moro.github.oi/"
Received: "https://rain2moro.github.io/"
    at C:\Users\admin\Desktop\z7z8\rain2moro.github.io\playwright\tests\test-submit.spec.ts:17:30
```

# Page snapshot

```yaml
- img "Vue logo"
- heading "Welcome to Your Vue.js App" [level=1]
- paragraph:
  - text: For a guide and recipes on how to configure / customize this project, check out the
  - link "vue-cli documentation":
    - /url: https://cli.vuejs.org
  - text: .
- heading "Installed CLI Plugins" [level=3]
- list:
  - listitem:
    - link "babel":
      - /url: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel
  - listitem:
    - link "eslint":
      - /url: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint
- heading "Essential Links" [level=3]
- list:
  - listitem:
    - link "Core Docs":
      - /url: https://vuejs.org
  - listitem:
    - link "Forum":
      - /url: https://forum.vuejs.org
  - listitem:
    - link "Community Chat":
      - /url: https://chat.vuejs.org
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/vuejs
  - listitem:
    - link "News":
      - /url: https://news.vuejs.org
- heading "Ecosystem" [level=3]
- list:
  - listitem:
    - link "vue-router":
      - /url: https://router.vuejs.org
  - listitem:
    - link "vuex":
      - /url: https://vuex.vuejs.org
  - listitem:
    - link "vue-devtools":
      - /url: https://github.com/vuejs/vue-devtools#vue-devtools
  - listitem:
    - link "vue-loader":
      - /url: https://vue-loader.vuejs.org
  - listitem:
    - link "awesome-vue":
      - /url: https://github.com/vuejs/awesome-vue
```

# Test source

```ts
   1 | /*
   2 |  * @Description: 
   3 |  * @Autor: Tlx
   4 |  * @Date: 2025-05-28 15:49:07
   5 |  * @LastEditors: Tlx
   6 |  * @LastEditTime: 2025-05-28 16:32:57
   7 |  */
   8 | import { test, expect } from '@playwright/test';
   9 | test.describe('Submit Form Tests', () => {
  10 |
  11 |   // test.beforeEach(async ({ page }) => {
  12 |
  13 |   // });
  14 |   test('get started link', async ({ page }) => {
  15 |
  16 |     await page.goto('https://rain2moro.github.io/');
> 17 |     await expect(page.url()).toBe('https://rain2moro.github.oi/');
     |                              ^ Error: expect(received).toBe(expected) // Object.is equality
  18 |   });
  19 | });
```