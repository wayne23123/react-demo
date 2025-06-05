# TypeScript + Vite + TailwindCSS 開發筆記

## 專案初始化

```bash
npm create vite@latest
```

選擇框架：React

選擇語言：TypeScript

## 安裝 Tailwind CSS

```bash
npm install -D tailwindcss@3

npx tailwindcss init -p
```

這會產生兩個檔案：

tailwind.config.js

postcss.config.js

## 設定 TailwindCSS

編輯 tailwind.config.js：

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

編輯 src/index.css：

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

typescript

https://www.typescriptlang.org/

npm install -g typescript

tsc -v

cd 到資料夾

tsc test01.ts

得到

tsc test01.js

tsc --init

到 tsconfig.json 打開 "rootDir": "./", 功能

"rootDir": "./src",

到 tsconfig.json 打開  "outDir": "./",  功能

"outDir": "./dist",