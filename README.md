# nuxt-a11y

This module integrates [Axe](https://github.com/dequelabs/axe-core/) tool for auditing website against common Accessibility (A11Y) issues.

## Setup

```sh
yarn add --dev nuxt-a11y # yarn
npm i --save-dev nuxt-a11y # npm
```

## Usage

The only thing you need to do to use the module in the default configuration is to register the module in the `modules` array in `nuxt.config.ts`:

```javascript
// nuxt.config.js

{
  modules: ["nuxt-a11y"],
}
```

And that's it! You can now use the `useA11y` composable in your Nuxt app:

```html
<script setup lang="ts">
  const violations = useA11y()
</script>
```

Now, you have access to the violations that were found by the Axe A11Y tool on the current page. The structure of each violation objects looks more or less like this:

```ts
interface Result {
  description: string;
  help: string;
  helpUrl: string;
  id: string;
  impact?: ImpactValue;
  tags: TagValue[];
  nodes: NodeResult[];
}
```

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
