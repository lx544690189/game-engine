module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'no-unused-vars': 1,
    'indent': ['error', 2], // 缩进风格
    'semi': [2, 'always'], // 句尾强制分号
    'eqeqeq': 2, // 要求使用 === 和 !==
    'no-alert': [2], // 禁止使用alert confirm prompt
    'quotes': [2, 'single'], // 单引号
    'arrow-parens': 2, // 箭头函数用小括号括起来
    'comma-spacing': ['error', { 'before': false, 'after': true }], // 逗号前后的空格
    'no-trailing-spaces': [2], // 语句前后空格
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }], // 对象字面量中冒号的前后空格
    'no-unreachable': 2, // 不能有无法执行的代码
    'block-spacing': 2, // 函数开括号前和闭括号后有空格
    'object-curly-spacing': [2, 'always'], // 花括号前后空格
    'spaced-comment': 2, // 注释风格，//后加空格
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'comma-dangle': ['error', { // 数组、对象逗号风格
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'ignore',
    }],
    'jsx-quotes': [2, 'prefer-double'], // 强制在JSX属性（jsx-quotes）中一致使用双引号
    'react/display-name': 0, // 防止在React组件定义中丢失displayName
    'react/jsx-key': 2, // 在数组或迭代器中验证JSX具有key属性
    'react/jsx-max-props-per-line': [1, { 'maximum': 3 }], // 限制JSX中单行上的props的最大数量
    'react/jsx-wrap-multilines': ['error', { // jsx属性风格
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'ignore',
    }],
  },
};