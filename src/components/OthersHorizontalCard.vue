<template>
  <div
    class="
    invisible
     h-52
      flex flex-col
      items-center
      justify-center
      mx-auto
      bg-white
      rounded-lg
      border
      shadow-lg
      md:flex-row md:max-w-xl
      dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
      w-full
    "
  >
    <div class="h-full w-1/3 p-1">
      <img class="w-full h-full rounded shadow-lg" src="@/assets/bella.jpeg" alt="" />
    </div>
    <div class="flex flex-col justify-between p-4 leading-normal h-full w-2/3">
      <h5
        class="
          mb-2
          text-2xl
          font-bold
          tracking-tight
          text-gray-900
          dark:text-white
        "
      >
       July Cano
      </h5>
      <p class="mb-3  text-gray-700 font-bold dark:text-gray-400">
        J-Cano88
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Aca va la bio de la persona, por ahora esta hardcodeado, pero a futuro sera 100% dinamico
      </p>
      <div class="w-full flex flex-col justify-center">
        <div class="w-100 flex justify-center">
            <button type="button" class="border bg-transparent italic w-1/2 rounded p-1 text-blue-600 border-blue-600"><i class="bi bi-person-plus-fill"></i> Enviar solicitud</button>
        </div>
       
        <div class="w-100 flex justify-center items-center gap-2 invisible">
            <button type="button" class="border rounded p-1 italic w-1/2 bg-transparent text-green-600 border-green-600"><i class="bi bi-person-check-fill"></i> Amigos</button>            
            <button type="button" class="border bg-transparent rounded p-1 italic w-1/2 text-purple-600 border-purple-600"><i class="bi bi-person-lines-fill"> Ver amigos</i></button>
        </div>
               
      </div>      
    </div>
  </div>
</template>

<script setup>
import { LogReg } from "@/stores/LogReg";
const storeLogreg = LogReg();
</script>
