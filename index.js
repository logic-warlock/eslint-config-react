const baseRules = ['eslint-config-airbnb/rules/react', 'eslint-config-airbnb/rules/react-a11y']

const customRules = ['./rules/style']

module.exports = {
  extends: [...baseRules, ...customRules, 'eslint-config-prettier/react'].map((path) =>
    require.resolve(path),
  ),
  rules: {},
}
