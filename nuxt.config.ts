export default defineNuxtConfig({
  srcDir:'src',
  public: {
    path: '/assets/',
    static: {
      prefix: '/assets/'
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
    dir: 'assets/images'
  },
  
})
