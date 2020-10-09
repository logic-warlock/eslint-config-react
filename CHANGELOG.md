# @logic-warlock/eslint-config-react

This package is all about React based rules for `.jsx` files. The base rules are in place to make it easier to write code with good functional components, and hopefully promote better React component habits in general.

# Installation

With Yarn:

```
yarn add -D @logic-warlock/eslint-config-react
```

With NPM:

```
npm install --save @logic-warlock/eslint-config-react
```

All you need to do is add `@logic-warlock/react` to your `.eslintrc` file within `extends`.

```
{
  extends: ["@logic-warlock/react"]
}
```

# Rules

## Base

This base style rules mainly adopt those from [airbnb.](https://www.npmjs.com/package/eslint-config-airbnb-base)

## Style

Although eslint shouldn't be used to enforce code style, there are several rules stated in order to work with code formatters, like Prettier. This makes writing code so much easier when you don't have to worry about style!
