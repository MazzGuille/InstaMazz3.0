<template>
  <div
    class="
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
      <img class="w-full h-full rounded shadow-lg" src="@/assets/July.jpg" alt="" />
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
        Guillermo Mazzari
      </h5>
      <p class="mb-3  text-gray-700 font-bold dark:text-gray-400">
        MazzCode
      </p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Aca va la bio de la persona, por ahora esta hardcodeado, pero a futuro sera 100% dinamico
      </p>
      <div class="w-full flex justify-around gap-2">
        <button data-modal-toggle="publicationModal" data-tooltip-target="tooltip-publication" type="button" class="border bg-transparent rounded p-1 w-16 text-blue-600 border-blue-600"><i class="bi bi-plus-circle-fill"></i></button>
        <div id="tooltip-publication" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
          Crear publicacion
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
         <!-- Publication Modal start -->
        <div id="publicationModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
          <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
           <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Crear Publicacion
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="publicationModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
               
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="publicationModal" type="button" class="border rounded bg-transparent text-blue-600 font-bold border-blue-600 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirmar</button>                
            </div>
        </div>
    </div>
        </div>
        <!-- Publication Modal end -->

        <button data-modal-toggle="defaultModal" data-tooltip-target="tooltip-profile" type="button" class="border rounded p-1 w-16 bg-transparent text-sky-600 border-sky-600"><i class="bi bi-pencil-square"></i></button>
         <div id="tooltip-profile" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-sky-600 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
          Editar perfil
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
        <!-- profile Modal start -->
       <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Editar perfil
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
              
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="defaultModal" type="button" class="border rounded bg-transparent text-sky-600 font-bold border-sky-600 focus:ring-4 focus:outline-none px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirmar</button>
                
            </div>
        </div>
    </div>
       </div>
        <!-- profile Modal end -->

        <button data-modal-toggle="friendsModal" data-tooltip-target="tooltip-list" type="button" class="border bg-transparent rounded p-1 w-16 text-purple-600 border-purple-600"><i class="bi bi-person-lines-fill"></i></button>
         <div id="tooltip-list" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-purple-600 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
          Lista de amigos
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
          <!-- Friend list Modal start -->
        <div id="friendsModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
          <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
           <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Lista de amigos
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="friendsModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
               
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="friendsModal" type="button" class="border rounded bg-transparent text-purple-600 font-bold border-purple-600 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirmar</button>                
            </div>
        </div>
    </div>
        </div>
        <!-- Friend list Modal end -->

        <button data-modal-toggle="pendingModal" data-tooltip-target="tooltip-pending" type="button" class="border bg-transparent rounded p-1 w-16 text-green-600 border-green-600"><i class="bi bi-person-plus-fill"></i></button>
          <div id="tooltip-pending" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-green-600 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
          Solicitudes pendientes
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
         <!-- Friend list Modal start -->
        <div id="pendingModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
          <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
           <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Lista de amigos
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="pendingModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
               
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="pendingModal" type="button" class="border rounded bg-transparent text-green-600 font-bold border-green-600 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirmar</button>                
            </div>
           </div>
         </div>
        </div>
        <!-- Friend list Modal end -->
      </div>      
    </div>
  </div>
</template>

<script setup>
import { LogReg } from "@/stores/LogReg";
const storeLogreg = LogReg();
</script>
