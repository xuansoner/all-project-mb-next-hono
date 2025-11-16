/**
 * @type {import('prettier').Options}
 */
// prettier格式化配置信息
const config = {
  // 使用分号作为结尾
  semi: true,
  // 字符串使用双引号非单引号
  singleQuote: false,
  // 缩进为2个空格
  tabWidth: 2,
  // 对象最后一个元素后加,
  trailingComma: "es5",
  // 引入插件 (引入插件后需要重启cursor)
  plugins: [
    // 1.依赖自动排序插件 (先pnpm安装同名插件依赖包)
    "@trivago/prettier-plugin-sort-imports",
    // 2.tailwind 原子classname自动排序插件
    "prettier-plugin-tailwindcss",
  ],
  // 1.A.设置自动排序分组顺序规则
  //    react/next相关包放到最前边
  //    放其他第三方包
  //    当前项目中其他模块 @
  //    当前项目中相对路径引入的模块
  importOrder: [
    "^(react|next?/?([a-zA-Z/]*))$",
    // "^next",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^[./]",
  ],
  // 1.B.不同分组的依赖之间增加空行
  importOrderSeparation: true,
  // 1.C.同组依赖之间按照字母顺序排序
  importOrderSortSpecifiers: true,
};

module.exports = config;
