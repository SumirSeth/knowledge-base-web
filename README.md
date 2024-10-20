# Knowledge Base Web App

This is the Knowledge Base Web app built with nuxt.js and nuxt-content module. It uses the [knowledge-base](https://github.com/sumirseth/knowledge-base) repository as its content source.

## To Reproduce:
One can populate the `content` folder within the repository with the *contents* from your own knowledge-base. <br>
Make neccessary changes in the `pages/index.vue` file to change how the index page looks and what content is displayed.
Similarly, make neccessary changes in the `pages/search.vue` file to change how the search algorithm. <br>
Make sure to have similar file structure in the `content` folder as in the `pages` folder. Use a *catch-all* route in `pages` folder. 

Refer to the [nuxt-content](https://content.nuxt.com/get-started/installation) documentation for more information.

## To Run:

```bash
npm install
npm run dev
```

## To Deploy:

```bash
npm run generate
```

The generated static files will be available in the `dist` folder.