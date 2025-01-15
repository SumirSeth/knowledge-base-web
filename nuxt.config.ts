// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  routeRules: {
    '/': { prerender: true }
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
      link:[{rel:'icon',type:'image/x-icon',href:'/favicon.png'}],
    },
    
  }
})