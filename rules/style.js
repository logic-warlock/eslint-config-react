module.exports = {
  rules: {
    // Try to catch extra jsx characters from accidentally rendering.
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    /**
     * Functional components can declare their own default props
     * This rule is no longer necessary and will be deprecated soon.
     */
    'react/require-default-props': 0,
    // Allows spreading props
    'react/jsx-props-no-spreading': 0,
    // JSX expressions can be on the same line
    'react/jsx-one-expression-per-line': 0,
    // jsx should only be in .jsx/.tsx since it's non-standard js
    // @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    // prefer <React.Fragment> over <>
    'react/jsx-fragments': [2, 'element'],
  },
}
