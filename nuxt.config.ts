// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      PAGE_PASSWORD: 'iamajoker'
    }
  },
  routeRules: {
    '/': { prerender: true }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ]
    }
  },
  content:{
    documentDriven: false,
    markdown: {
      remarkPlugins: ["remark-math"],
      rehypePlugins: ["rehype-mathjax"],
    },
  },
  app:{
    head:{
      link:[
        {rel:'icon', type:'image/x-icon', href:'/favicon.png'},
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'}
      ],
    },
  }
})