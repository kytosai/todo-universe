# Setup eslint

- Để eslint đọc được từng file config cho từng project con thì phải bổ sung thêm config sau vào setting của vscode

```js
// Seting for work with multi project in monorepo
// ref: https://www.codalas.com/en/2311/configuring-vscode-for-subfolder-projects-to-ensure-correct-eslint-operation
"eslint.workingDirectories": [
  {
    "mode": "auto"
  },
  {
    "pattern": "packages/*",
    "changeProcessCWD": true
  }
]
```