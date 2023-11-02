<template>
  <div>
    <div @click="isPopupOpen" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false"><slot name="open-btn">Открыть</slot></div>
    <transition :name="transitionName">
      <div  class="popup-wrapper" v-if="isPopup" @click.self="isPopupClose" role="dialog" aria-modal="true">
        <div @click.stop class="popup-content">
          <slot></slot>
        </div>
       
        <div v-if="showCloseBtn" class="close-btn" @click="isPopupClose" role="button" tabindex="0" :aria-label="closeBtnAriaLabel"><slot name="close-btn">Закрыть</slot></div>
      </div>
    </transition>   
  </div>
</template>

<script setup>
const props = defineProps({
showCloseBtn: {
    type: Boolean,
    default: true
},
closeBtnAriaLabel: {
    type: String,
    default: 'Закрыть окно'
},
transitionName: {

    type: String,
    default:'popup-wrapper'

}
})
const isPopup = ref(false)  
const isPopupOpen = () => {
  isPopup.value = true
  document.body.classList.add('popup-opened')
}
const isPopupClose = ()=>{
    isPopup.value = false
  document.body.classList.remove('popup-opened')
}

const handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    isPopup.value = false
    document.body.classList.remove('popup-opened')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style lang="scss" scoped>
.popup-wrapper{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: auto;
}
.popup-content{
    background-color: white;
    padding: 20px;
    position: relative;
    width: 20rem;
    height: 20rem;
    z-index: 9999;
    border-radius: 5px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1); 
}
.close-btn{
    position: absolute;
    right: 2rem;
    top: 2rem;
    z-index: 999;
    cursor: pointer;
    color: white;
}

.popup-wrapper-enter-active,
.popup-wrapper-leave-active {
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}
.popup-wrapper-enter-from,
.popup-wrapper-leave-to {
  opacity: 0;
  
}
</style>