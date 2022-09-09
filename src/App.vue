<template>
  <RouterView v-slot="{Component}">
    <transition name="route" mode="out-in">
      <component :is="Component"> </component>
    </transition>
  </RouterView>
</template>



<style>
/*ROUTE TRNASITIONS*/
.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active{
  transition: all .3s ease-out;
}

.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active{
  transition: all .3s ease-in;
}
</style>
