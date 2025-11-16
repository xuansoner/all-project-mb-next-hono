import { FlatCompat } from "@eslint/eslintrc";
import n from "eslint-plugin-n";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  // 正确的方式：使用对象格式配置插件
  {
    plugins: {
      n: n,
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      semi: ["error"],
      // n插件 带来的检测 如果出现 env.process会报错
      "n/no-process-env": ["error"],
    },
  },
];

export default eslintConfig;
