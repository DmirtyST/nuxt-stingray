export default defineNuxtConfig({
  srcDir:'src',
  public: {
    path: '/assets/',
    static: {
      prefix: '/assets/'
    }
  },
  app: {
  
    head: {
      title: 'Stingray',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { property: 'og:title', content: 'Shaping future' },
        { property: 'og:description', content: 'We are a collective of designers and engineers specialised in automotive design. We create innovative, creative and sustainable concepts for the automotive industry.' },
        { name: 'description',  content: 'Website design for automobiles , design, websites, https://stingray.framer.website/' },
        { 
          name: 'keywords', 
          content: 'Website design for automobiles , design, websites, https://stingray.framer.website/' 
        }
      ],
    }
  },
  vite: {
    
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styleMixins/_global.scss" as *;',
        }
      }
    }
},
modules: [
  '@nuxt/image',
  'nuxt3-leaflet'
    
],

  css:[
    '~/assets/styles/global.scss',
    
  ],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dc8xphyu3/image/upload/v1697336033/Tfy/' 
    }
  }
  
})
