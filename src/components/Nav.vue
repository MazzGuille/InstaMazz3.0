<template>
  <div
    class="
      bg-gray-200
      text-black
      py-3.5
      px-6
      shadow
      md:flex
      justify-between
      items-center
    "
  >
    <div class="flex items-center cursor-pointer">
      <h1 class="text-xl">Insta-Mazz</h1>
    </div>

    <span class="absolute md:hidden right-6 top-1.5 cursor-pointer text 8xl">
      <i
        @click="toggleNav"
        :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"
      ></i>
    </span>

    <ul
      class="
        bg-gray-200
        md:flex md:items-center
        gap-3
        font-bol
        md:static
        absolute
        md:w-auto
        w-full
        top-14
        duration-700
        ease-in
      "
      :class="[open ? 'left-0 pl-3' : 'left-[-100%]']"
    >
      <li class="md:my-0 my-6">
        <router-link
          class="text-blue-600 hover:text-blue-800"
          :to="{ name: 'Feed' }"
          ><i class="bi bi-house-fill"></i> Inicio</router-link
        >
      </li>
      <li class="md:my-0 my-6">
        <router-link
          class="text-blue-600 hover:text-blue-800"
          :to="{ name: 'Profile' }"
          ><i class="bi bi-person-fill"></i> Perfil</router-link
        >
      </li>
      <li class="md:my-0 my-6">
        <router-link
          class="text-blue-600 hover:text-blue-800"
          :to="{ name: 'Search' }"
          ><i class="bi bi-search"></i> Buscar</router-link
        >
      </li>
      <li class="md:my-0 my-6">
        <router-link
          class="text-blue-600 hover:text-blue-800"
          :to="{ name: 'Chatt' }"
          ><i class="bi bi-chat-left-dots-fill"></i> Chat</router-link
        >
      </li>
      <li class="md:my-0 my-6">
        <router-link
          class="text-red-500 hover:text-red-600"
          :to="{ name: 'Login' }"
          ><i class="bi bi-door-open-fill"></i> Salir</router-link
        >
      </li>
    </ul>
  </div>

  <!--  <ul class="md:flex md:items-center">
      <li class="md:mx-4" v-for="link in Links" :key="link.link">
        <a
          :href="link.link"
          class="text-xl text-blue-600 hover:text-blue-900"
          >{{ link.name }}</a
        >
      </li>
    </ul>-->
</template>

<script setup>
import { ref } from "vue";
let open = ref(false);

const toggleNav = () => {
  open.value = !open.value;
};

/*const Links = [
  { name: "Inicio", link: "/Feed", icono: "bi bi-house-fill text-info" },
  { name: "Perfil", link: "/Profile" },
  { name: "Buscar", link: "/Search" },
  { name: "Chat", link: "/Chat" },
  { name: "Salir", link: "/Exit" },
];*/
</script>
