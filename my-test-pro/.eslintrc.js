// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  // off或0–关闭规则
  // warn或1–开启规则，警告级别(不会导致程序退出)
  // error或2–开启规则，错误级别(当被触发的时候，程序会退出)
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    /* 以下规则均是重新添加的 */
    "eqeqeq": [0, "always"],// 必须使用全等
    "eol-last": 0,  // 文件以单一的换行符结束
    "one-var": 0, // 连续声明
    "curly": 1, // 必须使用 if(){} 中的{}
    "comma-dangle": [0, "never"],//对象字面量项尾不能有逗号
    "comma-spacing": 0,//逗号前后的空格
    "padded-blocks": 0, //块内行首行尾是否空行
    "no-alert": 0,//禁止使用alert confirm prompt
    "no-console": 0,//禁止使用console
    "no-trailing-spaces": 0,//一行结束后面不要有空格
    "no-extra-boolean-cast": 1, // 不必要的bool转换
    "no-extra-parens": 1, // 非必要的括号
    "complexity": [1, 10], // 循环复杂度
    "no-func-assign": 2, // 禁止重复的函数声明
    "no-multi-spaces": 0, //不允许出现多余的空格
    "no-multi-str": 0, //不允许用\来让字符串换行
    "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
    "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
    "semi": [0, "always"],//语句强制分号结尾
    "no-unused-vars": [0, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
    "space-infix-ops": 0,//中缀操作符周围要不要有空格
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "keyword-spacing":0,//强制关键字前后的一致间距
    "indent":0,//强制一致缩进
    "space-return-throw-case": 0,//return throw case后面要不要加空格
    "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
    "spaced-comment": 0,//注释风格要不要有空格什么的
    "quotes":0,//强制一致使用反勾号、双引号或单引号
  }
}
