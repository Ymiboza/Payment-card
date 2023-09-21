export const root = true;
export const extendsConfig = ['airbnb-base'];
export const parserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'moduleL',
};
export const env = {
  browser: true,
};
export const rules = {
  'no-alert': 0,
  'no-param-reassign': [2, { props: false }],
  'no-plusplus': 0,
  'no-iterator': 0,
  'no-restricted-syntax': [2, 'WithStatement'],
  'func-style': 0,
};
