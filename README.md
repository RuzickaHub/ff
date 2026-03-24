# VitePress Starter Template

This is a starter template for VitePress.

## VitePress Config

VitePress uses a powerful theme configuration system that allows you to customize your site's appearance and behavior. The theme config is defined in the `.vitepress/config.js` file:

```ts
export default {
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  
  // Theme related configurations
  themeConfig: {
    logo: '/logo.svg',
    nav: [...],
    sidebar: { ... }
  }
}
```

### Key Configuration Options

- **Logo**: Display a logo in the navigation bar with `logo: '/logo.svg'`
- **Navigation**: Configure top navigation with the `nav` array
- **Sidebar**: Set up sidebar navigation with the `sidebar` object
- **Social Links**: Add social media links with `socialLinks`
- **Footer**: Configure footer content with `footer.message` and `footer.copyright`
- **Search**: Enable search functionality with Algolia integration
- **Edit Links**: Allow users to edit pages with `editLink` configuration
- **Dark Mode**: Built-in dark mode support with customizable labels

For complete configuration options, see the [Default Theme Config reference](https://vitepress.dev/reference/default-theme-config).

## VitePress Markdown

VitePress extends standard Markdown with powerful features designed for technical documentation:

### Enhanced Markdown Features

**Header Anchors**: All headers automatically get anchor links for easy navigation and sharing.

**Internal Links**: Link to other pages using relative paths:

```md
[Getting Started](./getting-started)
[API Reference](/api/)
```

**Custom Containers**: Create styled callouts and alerts:

```md
::: tip
This is a helpful tip for users.
:::

::: warning
This is an important warning.
:::

::: danger
This is a critical warning.
:::
```

**GitHub-Style Tables**: Full support for tables with alignment:

```md
| Feature | Support | Notes |
|---------|:-------:|-------|
| Tables  | ✅      | Fully supported |
| Emoji   | 🎉      | Built-in support |
```

### Code Block Enhancements

**Syntax Highlighting**: Powered by Shiki with support for numerous languages:

````md
```js
export default {
  name: 'MyComponent'
}
```
````

**Line Highlighting**: Highlight specific lines in code blocks:

````md
```js{2-4}
export default {
  data() {
    return {
      message: 'Hello VitePress!'
    }
  }
}
```
````

**Code Groups**: Organize related code examples:

````md
::: code-group
```js [config.js]
export default { /* config */ }
```
```ts [config.ts]
import type { UserConfig } from 'vitepress'
```
:::
````

**Import Code Snippets**: Include external code files:

```md
<<< @/examples/basic-usage.js{2}
```

### Advanced Features

- **Frontmatter**: YAML metadata support for page configuration
- **Table of Contents**: Automatic TOC generation with `[[toc]]`
- **Math Equations**: LaTeX math rendering with KaTeX
- **Emoji Support**: Use emoji shortcodes like `:tada:` 🎉
- **File Inclusion**: Include other markdown files with `<!--@include: ./file.md-->`

For complete documentation, visit the [Markdown Extensions guide](https://vitepress.dev/guide/markdown).
