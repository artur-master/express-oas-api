module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'jasmine': true
  },
  'extends': 'eslint:recommended',
  'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-var': 'error',
    'curly': 'error',
    'no-extra-parens': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'keyword-spacing': ['error', { 'before': true }],
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs'],
    'camelcase': 'error',
    'comma-spacing': 'error',
    'comma-style': ['error', 'last'],
    'func-call-spacing': 'error',
    'one-var': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    'default-case': 'error',
    'no-alert': 'error',
    'no-eq-null': 'error',
    'no-implicit-coercion': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-useless-call': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'global-require': 'error',
    'no-mixed-requires': 'error',
    'no-unmodified-loop-condition': 'error',
    'array-callback-return': 'error',
    'no-loop-func': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-global-assign': 'error',
    'no-template-curly-in-string': 'error',
    'no-else-return': 'error',
    'no-useless-concat': 'error',
    'no-multi-spaces': 'error',
    'complexity': ['warn', 4],
    'no-floating-decimal': 'error',
    'no-unsafe-finally': 'warn'
  }
};